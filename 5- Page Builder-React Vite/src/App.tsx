import {LoginPage} from './Components/LoginPage';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import {PageBuilder} from './Components/PageBuilder';
import {PageButtons, PageLayout, PageSetting, TextPage} from './Components/PageBuilder/Components/AsideMenu';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {storeStateTypes} from './util/types';

//test commit

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<PageBuilder />}>
            <Route path="pageSetting" element={<PageSetting />} />
            <Route path="pageLayout" element={<PageLayout />} />
            <Route path="pageButtons" element={<PageButtons />} />
            <Route path="textPage" element={<TextPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
