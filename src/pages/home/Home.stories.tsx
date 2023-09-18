import React from 'react';

import { HomePage } from './Home.components';

export default {
  title: 'Pages/Home',
  component: HomePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
