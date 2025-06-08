import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { inicialTaskState } from './initialTaskState';
import { taskActionModel } from './taskActions';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<taskActionModel>;
};

const inicialContextValue = {
  state: inicialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(inicialContextValue);
