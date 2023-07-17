import {Container} from './Components/Container';
import {Header} from './Components';
import {Carousel} from './Components/Carousel';

function App() {
  return (
    <div className="font-roboto">
      <Container>
        <Header />
        <Carousel />
      </Container>
    </div>
  );
}

export default App;
