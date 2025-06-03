import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { inicialTaskState } from './initialTaskState';

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const inicialContextValue = {
  state: inicialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(inicialContextValue);
