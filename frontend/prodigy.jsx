import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login }  from './actions/session_actions';
import { fetchUser } from './actions/session_actions';

window.login = login;
window.fetchUser = fetchUser;

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});