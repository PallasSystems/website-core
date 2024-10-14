import { HashRouter, Routes, Route } from 'react-router-dom';

import type { NavbarLinkProperty } from '@pallassystems/website-core';

import {

  HomePage,
} from './pages';
import { ExamplePageData, PageData } from './App.data';

function App() {
  let storybooks: NavbarLinkProperty[] = [];
  ExamplePageData.forEach((value) => {
    if (value.items && value.items.length > 0) {
      storybooks = storybooks.concat(value.items);
    }
  });

  return (
    <HashRouter>
      <Routes>
        <Route path={''} element={<HomePage {...PageData} />} />
        
      </Routes>
    </HashRouter>
  );
}

export default App;
