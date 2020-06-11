import React, { useState, useEffect } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { Link } from '@reach/router';
import { ToastContainer, toast } from 'react-toastify';

import { login as loginAction, resetError } from 'store/modules/auth/actions';
import { getError } from 'store/modules/auth/selectors';

import Button from 'components/Button';
import Panel from 'components/Panel';
import TextField from 'components/TextField';
import styles from './Login.module.scss';

import 'react-toastify/dist/ReactToastify.css';

const mapState = state => ({
  error: getError(state)
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error } = useMappedState(mapState);
  const dispatch = useDispatch();

  const login = () => {
    dispatch(resetError());
    dispatch(loginAction(email, password));
  }

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }, [error])

  return (
    <Panel title="Login">
      <ToastContainer />
      <TextField
        type="email"
        label="Email"
        placeholder="user@example.com"
        classes={{ input: styles.input }}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        placeholder="Secret password"
        classes={{ input: styles.input }}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button onClick={e => login()}>Submit</Button>
      <p className="mt-4 text-grey-darker">Don't have an account? <Link to="/auth/signup" className="text-orange">Sign Up</Link></p>
    </Panel>
  );
}
