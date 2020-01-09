import React from "react";
import loadable from "@loadable/component";
import PageHeaderContainer from './page_header/page_header_container';
import HomePageContainer from './home_page/home_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const Modal = loadable(() => import('./modals/modal'));
const FormatHelpPage = loadable(() => import('./format_page'));
const SignupFormContainer = loadable(() => import('./session_form/signup_form_container'));
const LoginFormContainer = loadable(() => import('./session_form/login_form_container'));
const TrackFormContainer = loadable(() => import('./track_form/track_form_container'));
const TrackShowContainer = loadable(() => import('./track_show/track_show_container'));
const UserProfileContainer = loadable(() => import('./user_profile/user_profile_container'));
const ArtistShowContainer = loadable(() => import('./artist_show/show_container'));
const AlbumShowContainer = loadable(() => import('./album_show/show_container'));
const Footer = loadable(() => import('./footer'));


const App = () => (
  <div className="app">
    <header>
      <PageHeaderContainer />
    </header>
    <main>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/users/:userId" component={UserProfileContainer}/>
      <Route path="/artists/:artistId" component={ArtistShowContainer} />
      <Route path="/albums/:albumId" component={AlbumShowContainer} />
      <Route path="/format" component={FormatHelpPage} />
      <Switch>
        <ProtectedRoute exact path="/tracks/new" component={TrackFormContainer} />
        <Route path="/tracks/:trackId" component={TrackShowContainer} />
      </Switch>
    </main>
    <Modal />
    <Switch>
      <Route exact path="/login" component={null} />
      <Route exact path="/signup" component={null} />
      <Route exact path="/tracks/new" component={null} />
      <Route path="/" component={Footer} />
    </Switch>
  </div>
);

export default App;