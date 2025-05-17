import { Heading } from './assets/components/Heading';

import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá, mundo!
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum
        ipsa, nam, laudantium excepturi exercitationem ipsam pariatur ad,
        repudiandae voluptatibus quisquam. Veritatis, molestiae ad repudiandae
        est a beatae tempore illum!
      </p>
    </>
  );
}

export { App };
