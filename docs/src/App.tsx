import { HashRouter, Routes, Route } from 'react-router-dom';

import {
  ApiPage,
  ExamplesPage,
  GettingStartedInstallPage,
  GettingStartedPage,
  GettingStartedUsagePage,
  HomePage,
} from './pages';
import { PageData } from './App.data';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={''} element={<HomePage {...PageData} />} />
        <Route path={'/api'} element={<ApiPage {...PageData} />} />
        <Route path={'/examples'} element={<ExamplesPage {...PageData} />} />
        <Route path={'/gettingstarted'} element={<GettingStartedPage {...PageData} />} />
        <Route path={'/gettingstarted/install'} element={<GettingStartedInstallPage {...PageData} />} />
        <Route path={'/gettingstarted/install'} element={<GettingStartedUsagePage {...PageData} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
