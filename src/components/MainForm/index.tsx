import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useState } from 'react';

// import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Deu certo!!!');
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='task'
          placeholder='Digite algo'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25 min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
        {/* <DefaultButton icon={<StopCircleIcon />} color='red' /> */}
      </div>
    </form>
  );
}
