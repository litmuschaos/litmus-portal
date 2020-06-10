import React, { useCallback, useEffect } from 'react';
import { Router } from "@reach/router";
import { useDispatch } from 'redux-react-hook';
import { bootstrap as bootstrapAction } from 'store/modules/app/actions';

import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import TransactionAdd from 'pages/Transactions/Add';
import Login from 'pages/Auth/Login';
import SignUp from 'pages/Auth/SignUp';
import Main from 'containers/Layouts/Main';
import Full from 'containers/Layouts/Full';

export default function App() {
  const dispatch = useDispatch();
  const bootstrap = useCallback(() => dispatch(bootstrapAction()));
  useEffect(() => {
    bootstrap();
  });

  return (
    <Router>
      <Home path="/" />
      <Full path="/app">
        <Dashboard path="dashboard" />
      </Full>
      <Full path="/auth">
        <Login path="login" />
        <SignUp path="signup" />
      </Full>
    </Router>
  );
}