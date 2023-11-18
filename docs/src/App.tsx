import { HashRouter, Routes, Route } from 'react-router-dom';

import {
  ApiNavbarPropertyPage,
  ApiNavbarBrandPage,
  ApiNavbarLinkPropertyPage,
  ApiPage,
  ExamplesPage,
  GettingStartedInstallPage,
  GettingStartedPage,
  GettingStartedUsagePage,
  HomePage,
  SimpleBannerExamplesPage,
} from './pages';
import { PageData } from './App.data';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={''} element={<HomePage {...PageData} />} />
        <Route path={'/api'} element={<ApiPage {...PageData} />} />
        <Route path={'/api/navbarproperty'} element={<ApiNavbarPropertyPage {...PageData} />} />
        <Route path={'/api/navbarbrand'} element={<ApiNavbarBrandPage {...PageData} />} />
        <Route path={'/api/navbarlinkproperty'} element={<ApiNavbarLinkPropertyPage {...PageData} />} />
        <Route path={'/examples'} element={<ExamplesPage {...PageData} />} />
        <Route path={'/examples/simplebanner'} element={<SimpleBannerExamplesPage {...PageData} />} />
        <Route path={'/gettingstarted'} element={<GettingStartedPage {...PageData} />} />
        <Route path={'/gettingstarted/install'} element={<GettingStartedInstallPage {...PageData} />} />
        <Route path={'/gettingstarted/install'} element={<GettingStartedUsagePage {...PageData} />} />
        /examples/simplebanner
      </Routes>
    </HashRouter>
  );
}

export default App;
