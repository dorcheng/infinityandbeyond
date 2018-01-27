import React from "react";
import { googleProvider } from '../../utils/user'

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            splashScreen: false
        };

        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }

    handleGoogleLogin() {
      firebase.auth().signInWithPopup(googleProvider).then(function(result) {
        let token = result.credential.accessToken;
        let user = result.user;
      }).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
      });
    }

    render() {
        return (
          <div>
          <div>
              <button onClick={this.handleGoogleLogin}>Sign in with Google</button>
          </div>
          </div>
        )
    }
}
