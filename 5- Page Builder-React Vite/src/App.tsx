import {LoginPage} from './Components/LoginPage';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import {PageBuilder} from './Components/PageBuilder';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<PageBuilder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
