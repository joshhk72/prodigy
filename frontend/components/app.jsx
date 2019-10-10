import React from "react";
import PageHeaderContainer from './page_header/page_header_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import TrackFormContainer from './track_form/track_form_container';
import TrackShowContainer from './track_show/track_show_container';
import UserProfileContainer from './user_profile/user_profile_container';
import ProfileFormContainer from './user_profile/profile_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app">
    <header>
      <PageHeaderContainer />
    </header>
    <article>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/users/:userId" component={UserProfileContainer}/>
      <ProtectedRoute exact path="/tracks/new" component={TrackFormContainer} />
    </article>
    <Route path="/users/:userId" component={ProfileFormContainer} />
    <Route path="/tracks/:trackId" component={TrackShowContainer} />
  </div>
);

export default App;