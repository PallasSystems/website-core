import { HashRouter, Routes, Route } from 'react-router-dom';

import { ExamplesHeadPage, ExamplesSectionPage, ExamplesStorybookPage } from '@pallassystems/website-core';
import type { NavbarLinkProperty } from '@pallassystems/website-core';

import {
  ApiHeadPage,
  ApiBannerNavBarPageData,
  GettingStartedInstallPage,
  GettingStartedPage,
  GettingStartedUsagePage,
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
        <Route path={'/api'} element={<ApiHeadPage {...PageData} />} />
        {ApiBannerNavBarPageData.map((value) => {
          return <Route path={value.link} element={value.page(PageData)} />;
        })}
        <Route path={'/example'} element={<ExamplesHeadPage {...PageData} exampleProps={ExamplePageData} />} />
        {ExamplePageData.map((value: NavbarLinkProperty) => {
          return <Route path={value.path} element={<ExamplesSectionPage exampleProps={value} {...PageData} />} />;
        })}
        {storybooks.map((value: NavbarLinkProperty) => {
          return <Route path={value.path} element={<ExamplesStorybookPage exampleProps={value} {...PageData} />} />;
        })}
        <Route path={'/gettingstarted'} element={<GettingStartedPage {...PageData} />} />
        <Route path={'/gettingstarted/install'} element={<GettingStartedInstallPage {...PageData} />} />
        <Route path={'/gettingstarted/usage'} element={<GettingStartedUsagePage {...PageData} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
