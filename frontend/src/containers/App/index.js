import { Router } from '@reach/router';
import Full from 'containers/Layouts/Full';
import Main from 'containers/Layouts/Main';
import Login from 'pages/Auth/Login';
import SignUp from 'pages/Auth/SignUp';
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'redux-react-hook';
import { bootstrap as bootstrapAction } from 'store/modules/app/actions';
import withTheme from 'theme/themeHoc';

function App() {
  const dispatch = useDispatch();
  const bootstrap = useCallback(() => dispatch(bootstrapAction()));
  useEffect(() => {
    bootstrap();
  });

  return (
    <Router>
      <Home path="/" />
      <Main path="/app">
        <Dashboard path="dashboard" />
      </Main>
      <Full path="/auth">
        <Login path="login" />
        <SignUp path="signup" />
      </Full>
    </Router>
  );
}

export default withTheme(App);
