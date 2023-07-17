
import {Carousel} from './Components';
import {Container} from './Components/Container';
import {Header} from './Components';
import { Footer } from './Components';
import { Cards } from './Components';
function App() {
  return (
    <Container>
      <Header />
      <Carousel />
      <Cards />
      <Footer/>
    </Container>
  );
}

export default App;
