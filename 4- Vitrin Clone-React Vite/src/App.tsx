import Carousel from './Components/Carousel/Carousel';
import {Footer, Header} from './Components';
import {Main} from './Components';
import {AsideMenu} from './Components/AsideMenu';

function App() {
  return (
    <>
      <div>
        <Header />
        <AsideMenu />
        {/* <Carousel /> */}
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
