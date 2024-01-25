import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './styles/global.css';

function Counter() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img
            src={
              typeof viteLogo === 'string'
                ? viteLogo
                : (viteLogo as { src: string }).src
            }
            className='logo'
            alt='Vite logo'
          />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img
            src={
              typeof reactLogo === 'string'
                ? reactLogo
                : (reactLogo as { src: string }).src
            }
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>Hello world!</h1>
    </>
  );
}

export default Counter;
