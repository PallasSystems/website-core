import { HashRouter, Routes, Route } from 'react-router-dom';

import {
  ApiNavbarBannerPage,
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
        <Route path={'/api/navbarbanner'} element={<ApiNavbarBannerPage {...PageData} />} />
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
