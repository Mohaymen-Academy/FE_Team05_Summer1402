import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {Container} from './Components/Container';
import {Header} from './Components';
import {Carousel} from './Components';
import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <Carousel />
    </Container>
    </>
  );
}

export default App;
