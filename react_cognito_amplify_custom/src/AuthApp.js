import React from 'react'

import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut,AmplifySignIn,AmplifyForgotPassword } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

import App from './App'

const AuthApp=()=>{

    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);


    return authState === AuthState.SignedIn && user ? (
        <><App /><AmplifySignOut  /></>
      ) : (
        <AmplifyAuthenticator>
          <AmplifySignIn
            hideSignUp={true}
            hideForgotPassword={true}
            slot="sign-in"
            
            
          ></AmplifySignIn>
          
        </AmplifyAuthenticator>
    );
}

export default AuthApp