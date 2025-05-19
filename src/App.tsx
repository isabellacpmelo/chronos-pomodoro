import './styles/theme.css';
import './styles/global.css';

import { Container } from './assets/components/Container';
import { Logo } from './assets/components/Logo';
import { Menu } from './assets/components/Menu';
import { CountDown } from './assets/components/CountDown';

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
            <label htmlFor='input'>task</label>
            <input type='text' id='input' />
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
