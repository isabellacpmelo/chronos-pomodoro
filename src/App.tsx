import './styles/theme.css';
import './styles/global.css';

import { Container } from './assets/components/Container';
import { Heading } from './assets/components/Heading';
// import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
      {/* <Heading>
        Olá, mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading> */}
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <Heading>FORM</Heading>
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}

export { App };
