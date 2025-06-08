import { useEffect, useReducer, useState } from 'react';
import { inicialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(inicialTaskState);

  const [numero, dispatch] = useReducer((state, action) => {
    console.log(action, state);

    switch (action) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'INITIAL_STATE':
        return 0;
    }
    return state;
  }, 0);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* {children} */}
      <h1>O numero é {numero}</h1>
      <button
        onClick={() => {
          dispatch('INCREMENT');
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          dispatch('DECREMENT');
        }}
      >
        Decrementar
      </button>
      <button
        onClick={() => {
          dispatch('INITIAL_STATE');
        }}
      >
        Zerar
      </button>
    </TaskContext.Provider>
  );
}
