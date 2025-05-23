import './styles/theme.css';
import './styles/global.css';

import { Container } from './assets/components/Container';
import { Logo } from './assets/components/Logo';
import { Menu } from './assets/components/Menu';
import { CountDown } from './assets/components/CountDown';
import { DefaultInput } from './assets/components/DefaultInput';
import { Cycles } from './assets/components/Cycles';
import { DefaultButton } from './assets/components/DefaultButton';
// import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './assets/components/Footer';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              type='text'
              labelText='task'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
            {/* <DefaultButton icon={<StopCircleIcon />} color='red' /> */}
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export { App };
