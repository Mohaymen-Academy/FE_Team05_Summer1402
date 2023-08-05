import Carousel from './Components/Main/Components/Carousel/Carousel';
import {Footer, Header} from './Components';
import {Main} from './Components';
import {AsideMenu} from './Components/Main/Components/AsideMenu';

function App() {
  return (
    <>
      <div>
        <Header />
        <AsideMenu />
        <Carousel />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
