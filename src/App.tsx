// import { Heading } from './assets/components/Heading';
// import { TimerIcon } from 'lucide-react';
import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <>
      {/* <Heading>
        Olá, mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading> */}
      <div className='container'>
        <div className='content'>
          <section>LOGO</section>
        </div>
      </div>
      <div className='container'>
        <div className='content'>
          <section>MENU</section>
        </div>
      </div>
      <div className='container'>
        <div className='content'>
          <section>FORM</section>
        </div>
      </div>
      <div className='container'>
        <div className='content'>
          <section>FOOTER</section>
        </div>
      </div>
    </>
  );
}

export { App };
