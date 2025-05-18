import './styles/theme.css';
import './styles/global.css';

import { Container } from './assets/components/Container';
import { Logo } from './assets/components/Logo';
import { Menu } from './assets/components/Menu';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
    </>
  );
}

export { App };
