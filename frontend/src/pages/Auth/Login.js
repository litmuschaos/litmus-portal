import React, { useCallback, useState } from 'react';
import { useDispatch } from 'redux-react-hook';
import { Link } from '@reach/router';

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { login as loginAction } from 'store/modules/auth/actions';

import Button from 'components/Button';
import Panel from 'components/Panel';
import TextField from 'components/TextField';
import styles from './Login.module.scss';

export default function Login() {
  const [createTodo, { data }] = useMutation(gql`
    mutation createMutation($tt: NewTodo!) {
      createTodo(
        input: $tt
      ) {
        text
      }
    }
  `);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const login = useCallback(() => dispatch(loginAction(email, password)), [email, password]);
  const login = () => {
    createTodo({
      variables: {
        tt: { text: "XXsss" }
      }
    })
  }

  console.log(data)
  return (
    <Panel title="Login">
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
      <Button onClick={e => createTodo({ tt: { text: "XXsss" } })}>Submit</Button>
      <p className="mt-4 text-grey-darker">Don't have an account? <Link to="/auth/signup" className="text-orange">Sign Up</Link></p>
    </Panel>
  );
}
