# ReactGoogleSignIn
##### A React component that will allow you to integrate Google sign in and sign out to your app.

## How to install
``` 
    npm install react-google-signin 

```


## How to use
```
    import React from 'react';
    import GoogleSignIn from "react-google-signin";
    
    
    class Home extends React.Component { 
    
    
        onSignIn(userProfile, accessToken) {
            console.log(userProfile)
        }
        
        signOut() {
            this.googleAuth.signOut();
        }
    
        render() {
            return (
                <GoogleSignIn clientId="YOUR_CLIENT_ID"
            			  ref={g => this.googleAuth = g}
            			  onSuccess={this.onSignIn.bind(this)}
                />
                
                <button onClick={this.signOut.bind(this)}> Sign Out </button>  
            );    
        }
 
    }
```

## Props
 
 ####  clientId `required`
 type: String
 
 Create your Google API Console Project and Client ID and specify the client id as this prop.
 To create Client ID: https://developers.google.com/identity/sign-in/web/devconsole-project
 
   
 ####  onSuccess `required`
 type: Function
  
 onSuccess callback function will be called with userProfile and accessToken.
 AccessToken will be sent only when `needAccess` prop is set to true
    
    userProfile = {
      id: ID 
      name: NAME
      givenName: GIVENNAME
      familyName: FAMILYNAME
      email: EMAIL
      imageUrl: IMAGEURL      
    }
              
 #### onFailure `optional`
 type: Function
 
 onFailure callback function will be called with error object when sign in fails
   
 #### scope `optional`
 type: String, defaultValue: profile email
 
 #### needAccess `optional`
 type: Boolean defaultValue: false
 
 The value true will allow you to get the access token as a second parameter in onSuccess callback
 
 #### width `optional`
 type: number defaultValue: 240
 
 Sets the width of the sign in button
 
 #### height `optional`
 type: number defaultValue: 50
  
 Sets the height of the sign in button
 
 #### theme `optional`
 type: String defaultValue: dark
 
 Sets the theme of the signin button
 
 
  
 
 
    
   
   
    
  
    



