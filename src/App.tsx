import {Carousel} from './Components';
import {Container} from './Components/Container';
import {Header} from './Components';
import {Footer} from './Components';
import Feed from './Components/Feed/Feed';
import {Cards} from './Components';
import {Flex} from '@chakra-ui/react';

function App() {
  return (
    <Container>
      <Header />
      <Carousel />
      <Flex direction="row" className="w-5/6">
        <Flex direction="column">
          <Cards />
          <Feed />
        </Flex>
        <aside className="w-1/6">Aside here</aside>
      </Flex>

      <Footer />
    </Container>
  );
}

export default App;
