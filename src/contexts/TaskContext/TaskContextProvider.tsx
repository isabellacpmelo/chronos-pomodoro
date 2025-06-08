import { useEffect, useReducer, useState } from 'react';
import { inicialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(inicialTaskState);

  type ActionType = {
    type: string;
    payload?: number;
  };
  const [myState, dispatch] = useReducer(
    (state, action: ActionType) => {
      console.log(action, state);

      switch (action.type) {
        case 'INCREMENT': {
          if (!action.payload) return state;

          return {
            ...state,
            secondsRemaining: state.secondsRemaining + action?.payload,
          };
        }

        case 'DECREMENT': {
          if (!action.payload) return state;

          return {
            ...state,
            secondsRemaining: state.secondsRemaining - action?.payload,
          };
        }

        case 'RESET': {
          return {
            secondsRemaining: 0,
          };
        }
      }
      return state;
    },
    {
      secondsRemaining: 0,
    },
  );

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* {children} */}
      <h1>O estado é {JSON.stringify(myState)}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT', payload: 10 });
        }}
      >
        Incrementar +10
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT', payload: 20 });
        }}
      >
        Incrementar +20
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT', payload: 50 });
        }}
      >
        Decrementar -50
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'RESET' });
        }}
      >
        Reset
      </button>
    </TaskContext.Provider>
  );
}
