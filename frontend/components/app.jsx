import React from "react";
import PageHeaderContainer from './page_header/page_header_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="app">
    <header>
      <PageHeaderContainer />
    </header>
    <article>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </article>
  </div>
);

export default App;