import { TaskStateModel } from '../../models/TaskStateModel';
import { taskActionModel, TaskActionTypes } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: taskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }

    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }
}
