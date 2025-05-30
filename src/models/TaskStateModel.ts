import type { TaskModel } from './TaskModel';

// Estado -> Componente - > Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // Histórico, MainForm
  secondsRemaining: number; // CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: string; // Título da Pagina, CountDown
  activeTask: TaskModel | null; // CountDown, Histórico, MainForm, Button
  currentCycle: number; // 1 to 8 Home
  config: {
    // MainForm
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
