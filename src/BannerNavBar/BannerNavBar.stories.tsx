import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { StoryFn } from '@storybook/react';

import { BannerNavBar } from './BannerNavBar.components';

export default {
  component: BannerNavBar,
  decorators: [
    (Story) => (
      <HashRouter>
        <Routes>
          <Route path={''} element={<Story />} />
          <Route path={'/services'} element={<Story />} />
          <Route path={'/team'} element={<Story />} />
        </Routes>
      </HashRouter>
    ),
  ],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BannerNavBar> = (args) => <BannerNavBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Complete = Template.bind({});
Complete.args = {
  brandName: 'Pallas Systems',
  brandImg: { src: './images/logos/logo.svg' },
  items: [
    { text: 'Home', path: '' },
    { text: 'Services', path: '/services' },
    { text: 'Team', path: '/team' },
  ],
};

export const SpacedWords = Template.bind({});
SpacedWords.args = {
  brandName: 'Pallas Systems',
  items: [
    { text: 'Getting Started', path: '' },
    { text: 'User Guide', path: '/services' },
    { text: 'Flying Wing', path: '/team' },
  ],
};

export const LongWords = Template.bind({});
LongWords.args = {
  brandName: 'Pallas Systems',
  items: [
    { text: 'GettingStartedWithTomAndDick', path: '' },
    { text: 'User', path: '/services' },
    { text: 'Supercalifragilisticexpialidocious', path: '/services' },
  ],
};
