import React, {PropTypes} from 'react';
import $ from "jquery";

export default class GoogleSignIn extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    $.ajax({
      url: "https://apis.google.com/js/platform.js",
      dataType: "script",
      success: this.onGoogleApiLoad.bind(this)
    });
  }

  onGoogleApiLoad() {
    gapi.signin2.render('my-react-google-signin', {
      'scope': this.props.scope || 'profile email',
      'width': this.props.width || 240,
      'height': this.props.height || 50,
      'longtitle': true,
      'theme': this.props.theme || 'dark',
      'onsuccess': this.onSignIn.bind(this),
      'onfailure': this.onFailure.bind(this)
    });
  }

  signOut(callback) {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(callback);
  }

  getAccessToken(user) {
    return this.props.needAccess ? user.getAuthResponse().id_token : undefined;
  }

  getUserProfile(user) {
    const profile = user.getBasicProfile();
    return {
      id: profile.getId(),
      name: profile.getName(),
      givenName: profile.getGivenName(),
      familyName: profile.getFamilyName(),
      email: profile.getEmail(),
      imageUrl: profile.getImageUrl()
    };
  }

  onSignIn(user) {
    const profile = this.getUserProfile(user);
    const accessToken = this.getAccessToken(user);
    this.props.onSuccess(profile, accessToken);
  }

  onFailure(error) {
    this.props.onFailure(error);
  }

  getMetaContent() {
    return `${this.props.clientId}.apps.googleusercontent.com`
  }

  renderLoginButton() {
    return(
      <div>
        <meta name="google-signin-client_id" content={this.getMetaContent()}/>
        <div id="my-react-google-signin"/>
      </div>
    );
  }

  render() {
    return this.renderLoginButton();
  }

}

GoogleSignIn.PropTypes = {
  clientId: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func,
  scope: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  theme: PropTypes.string,
  needAccess: PropTypes.bool
};
