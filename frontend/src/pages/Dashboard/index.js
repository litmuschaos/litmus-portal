import React, { Fragment, useState } from 'react';

import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_TODO_MUTATION, TODO_LIST } from 'schemas';

import Button from 'components/Button';
import ChartImage from './charts.svg';

const initialState = {
  num: 1
}

export default function Dashboard() {
  const [state, setState] = useState(initialState);
  const [createTodo] = useMutation(CREATE_TODO_MUTATION);
  const {data} = useQuery(TODO_LIST);

  const addTodo = () => {
    createTodo({
      variables: {
        tt: { text: `Test Todo${state.num}` }
      }
    });

    setState({ num: state.num + 1 })
  }


  let todoList = data ? data.todos.map((todo, idx) => (
    <div key={`todo${idx}`}>{todo.text}</div>
  )) : [];
  console.log(todoList)

  return (
    <Fragment>
      <h1 className="text-grey-darkest mb-8">Dashboard</h1>
      <div className="max-w-lg mx-auto">
        <img src={ChartImage} alt="Empty Dashboad" className="my-8" />
        {
          todoList.length === 0 ?
            (<p className="text-grey-darker text-center text-xl mb-8">You don't have any todos!</p>)
          : 
            (<div>{todoList}</div>)
        }        
        <p className="text-center ">
          <Button onClick={() => addTodo()}>Add Todo</Button>
          </p>
      </div>
    </Fragment>
  );
}