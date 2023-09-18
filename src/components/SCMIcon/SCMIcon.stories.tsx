import React from 'react';

import { SCMIcon } from './SCMIcon.components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: SCMIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    endpoint: {
      name: 'SCM URI',
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'demo description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text'
      }
    },
    project: {
      name: 'Project/Group',
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'Repositories are typically grouped within a SCM, this holds the group name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text'
      }
    },
    repository: {
      name: 'Repository',
      type: { name: 'string', required: true },
      defaultValue: '',
      description: 'Name of the SCM repository',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text'
      }
    },
    type: {
      name: 'SCM Name',
      type: { name: 'string', required: true },
      defaultValue: 'Git',
      description: 'Can be Git or Github',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Git' },
      },
      control: {
        type: 'text'
      }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SCMIcon {...args} />;


export const Default = Template.bind({});
Default.args = {
    project: "PallasSystems",
    repository: "react-common",
    type: "GitHub"
};

export const Complete = Template.bind({});
Complete.args = {
    endpoint: "https://localhost:8090/",
    project: "test",
    repository: "repo",
    type: "Git"
};
