// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual de uma ação, e retorna o novo estado
// state <- a ação disparada, geralmente é um objeto com o type e (opcionalmente) payload
// type <- o tipo da ação, geralmente um string (pode ser enum, constante, etc)
// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado

import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type taskActionsWithPayload = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
};

export type taskActionsWithoutPayload =
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | { type: TaskActionTypes.RESET_STATE };

export type taskActionModel =
  | taskActionsWithPayload
  | taskActionsWithoutPayload;
