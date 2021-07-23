import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AuthApp from './AuthApp'
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";


Amplify.configure(awsExports);


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthApp />
  </StrictMode>,
  rootElement
);
