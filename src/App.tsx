import './styles/theme.css';
import './styles/global.css';

import { Container } from './assets/components/Container';
import { Logo } from './assets/components/Logo';
import { Menu } from './assets/components/Menu';
import { CountDown } from './assets/components/CountDown';
import { DefaultInput } from './assets/components/DefaultInput';

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
              labelText='Minha label'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <div>0 0 0 0 0 0 0</div>
          </div>

          <div className='formRow'>
            <button type='button'>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export { App };
