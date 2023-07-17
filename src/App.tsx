import {Carousel} from './Components';
import {Container} from './Components/Container';
import {Header} from './Components';
import {Footer} from './Components';
import Feed from './Components/Feed/Feed';;
import { Cards } from './Components';
function App() {
  return (
    <Container>
      <Header />
      <Carousel />
      <Cards />
      <Feed />
      <Footer />
    </Container>
  );
}

export default App;
