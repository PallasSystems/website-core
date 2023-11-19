import { HashRouter, Routes, Route } from 'react-router-dom';

import {
  ApiHeadPage,
  ApiBannerNavBarPageData,
  ExamplesHeadPage,
  ExamplePageData,
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
        <Route path={'/api'} element={<ApiHeadPage {...PageData} />} />
        {ApiBannerNavBarPageData.map((value) => {
          return <Route path={value.link} element={value.page(PageData)} />;
        })}
        <Route path={'/examples'} element={<ExamplesHeadPage {...PageData} />} />
        {ExamplePageData.map((value) => {
          return <Route path={value.link} element={value.page(PageData)} />;
        })}
        <Route path={'/gettingstarted'} element={<GettingStartedPage {...PageData} />} />
        <Route path={'/gettingstarted/install'} element={<GettingStartedInstallPage {...PageData} />} />
        <Route path={'/gettingstarted/usage'} element={<GettingStartedUsagePage {...PageData} />} />
        /examples/simplebanner
      </Routes>
    </HashRouter>
  );
}

export default App;
