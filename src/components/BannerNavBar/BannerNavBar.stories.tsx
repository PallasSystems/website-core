import React from 'react';
import { BannerNavBar } from './BannerNavBar.components';

export default { component: BannerNavBar };

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BannerNavBar {...args} />;

export const Default = Template.bind({});
Default.args = {}

export const Complete = Template.bind({});
Complete.args = {
  brandName: "Pallas Systems",
  brandImg: { src: "./images/logos/logo.svg"},
  items: [
      {text: "Home", path: ""},
      {text: "Services", path: "/services"},
      {text: "Team", path: "/team"}
  ]
};