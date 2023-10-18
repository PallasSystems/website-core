import React from 'react';

import { StoryFn } from '@storybook/react';

import { SocialMediaSection } from './SocialMediaSection.components';

export default {
  component: SocialMediaSection,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SocialMediaSection> = (args) => <SocialMediaSection {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Complete = Template.bind({});
Complete.args = {
  facebook: '12345',
  instagram: '6789',
  linkedin: 'abcdef',
  twitter: 'zyxwv',
  scm: {
    project: 'test',
    repository: 'repo',
    endpoint: 'https://bitbucket.com',
  },
};
