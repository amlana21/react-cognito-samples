import "./styles.css";

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <h1>A React App</h1>
      <h2>This app is authenticated by AWS Cognito.</h2>
    </div>
  );
}

export default withAuthenticator(App)
