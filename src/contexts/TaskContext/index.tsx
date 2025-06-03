import React, { createContext, useContext, useState } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';

const inicialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '07:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const inicialContextValue = {
  state: inicialState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(inicialContextValue);

type TaskContextProviderProps = {
  children: React.ReactNode;
};
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(inicialState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
