import {Carousel} from './Components';
import {Container} from './Components/Container';
import {Header} from './Components';
import {Footer} from './Components';
import Feed from './Components/Feed/Feed';
import {Cards} from './Components';
import {Flex} from '@chakra-ui/react';
import {News} from './Components/News';

function App() {
  return (
    <Container>
      <Header />
      <Carousel />
      <Flex direction="row" gap="4">
        <Flex direction="column" className="w-5/6">
          <Cards />
          <Feed />
        </Flex>
        <aside className="w-2/6">
          <News />
        </aside>
      </Flex>

      <Footer />
    </Container>
  );
}

export default App;
