import {Carousel} from './Components';
import {Container} from './Components/Container';
import {Header} from './Components';
import {Footer} from './Components';
import Feed from './Components/Feed/Feed';
function App() {
  return (
    <Container>
      <Header />
      <Carousel />
      <Feed />
      <Footer />
    </Container>
  );
}

export default App;
