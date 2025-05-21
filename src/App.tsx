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
import { Heading } from './assets/components/Heading';

function App() {
  let numero = 0;
  function handleClick() {
    const span = document.getElementById('numero');

    if (!span) return;
    numero += 1;
    span.innerText = numero.toString();
    console.log(numero);
  }

  return (
    <>
      <Heading>
        <span id='numero'>Numero: {numero}</span>
      </Heading>
      <button onClick={handleClick}>Aumenta</button>
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
              labelText={numero.toString()}
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
