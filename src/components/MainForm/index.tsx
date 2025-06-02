import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import type { HomeProps } from '../../pages/Home';
// import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: '23:34',
      };
    });
  }
  return (
    <form className='form' action=''>
      <div>
        <button type='button' onClick={handleClick}>
          Clicar
        </button>
      </div>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='task'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de {state.config.workTime}min</p>
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
