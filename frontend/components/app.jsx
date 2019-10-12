import React from "react";
import PageHeaderContainer from './page_header/page_header_container';
import HomePageContainer from './home_page/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import TrackFormContainer from './track_form/track_form_container';
import TrackShowContainer from './track_show/track_show_container';
import TrackEditFormContainer from './track_show/track_edit_form_container';
import UserProfileContainer from './user_profile/user_profile_container';
import ProfileFormContainer from './user_profile/profile_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app">
    <header>
      <PageHeaderContainer />
    </header>
    <article>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/users/:userId" component={UserProfileContainer}/>
      <Switch>
        <ProtectedRoute exact path="/tracks/new" component={TrackFormContainer} />
        <Route path="/tracks/:trackId" component={TrackShowContainer} />
      </Switch>
    </article>
    <Route exact path="/users/:userId" component={ProfileFormContainer} />
    <Switch>
      <Route exact path="/tracks/new/" component={() => <div />} />
      <Route exact path="/tracks/:trackId/" component={TrackEditFormContainer} />
    </Switch>
  </div>
);

export default App;