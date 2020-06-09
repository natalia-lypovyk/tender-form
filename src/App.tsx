import React, { FC, useReducer } from 'react';
import { Context } from './context';
import { reducer, initialState } from './reducer';
import { Form } from './components';

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Form />
    </Context.Provider>
  );
}

export default App;
