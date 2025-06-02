import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';
import { TaskContextProvider } from './contexts/TaskContext';

const inicialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '04:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
function App() {
  const [state, setState] = useState(inicialState);

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export { App };
