import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { Meta, ReactRenderer, StoryFn } from '@storybook/react';

import { BannerNavBar } from './BannerNavBar.components';
import { PallasSVG } from '../Common';
import { AnnotatedStoryFn } from '@storybook/csf';
import { NavbarProperty } from './BannerNavBar.types';

const meta: Meta<typeof BannerNavBar> = {
  component: BannerNavBar,
  //👇 Enables auto-generated documentation for the component story
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

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BannerNavBar> = (args) => <BannerNavBar {...args} />;

export const Default: AnnotatedStoryFn<ReactRenderer, NavbarProperty> = Template.bind({});
Default.args = {};

export const Minimal: AnnotatedStoryFn<ReactRenderer, NavbarProperty> = Template.bind({});
Minimal.args = {
  brand: {
    name: 'Pallas Systems',
  },
};

export const Basic: AnnotatedStoryFn<ReactRenderer, NavbarProperty> = Template.bind({});
Basic.args = {
  brand: {
    name: 'Pallas Systems',
  },
  items: [
    { text: 'Menu 1', path: '' },
    { text: 'Menu 2', path: '/services' },
    { text: 'Menu 3', path: '/team' },
  ],
};

export const Complete: AnnotatedStoryFn<ReactRenderer, NavbarProperty> = Template.bind({});
Complete.args = {
  brand: {
    name: 'Pallas Systems',
    imgFn: (
      <PallasSVG
        id='BannerNavBar.Brand.Link.Logo.SVG'
        alt='Pallas Systems Logo'
        height='3.5rem'
        width='4rem'
        className='d-inline-block'
      />
    ),
  },
  items: [
    { text: 'Home', path: '' },
    { text: 'Services', path: '/services' },
    { text: 'Team', path: '/team' },
  ],
  scm: {
    project: 'test',
    repository: 'repo',
    imgProps: {
      id: 'SourceLink',
      height: '2rem',
      width: '2.5rem',
      className: 'd-inline-block',
    },
  },
};

export const SubMenus: AnnotatedStoryFn<ReactRenderer, NavbarProperty> = Template.bind({});
SubMenus.args = {
  brand: {
    name: 'Pallas Systems',
    imgFn: (
      <PallasSVG
        id='BannerNavBar.Brand.Link.Logo.SVG'
        alt='Pallas Systems Logo'
        height='3.5rem'
        width='4rem'
        className='d-inline-block'
      />
    ),
  },
  items: [
    { text: 'Home', path: '' },
    { text: 'Services', path: '/services' },
    {
      path: '/team',
      text: 'Team',
      items: [
        { text: 'Joe Bloggs', path: '/team/jbloggs' },
        { text: 'John Doe', path: '/team/jdoe', items: [{ text: 'Jane', path: '/team/jane' }] },
      ],
    },
  ],
  scm: {
    project: 'test',
    repository: 'repo',
    imgProps: {
      id: 'SourceLink',
      height: '2rem',
      width: '2.5rem',
      className: 'd-inline-block',
    },
  },
};

export const PrefixRow: AnnotatedStoryFn<ReactRenderer, NavbarProperty> = Template.bind({});
PrefixRow.args = {
  brand: {
    name: 'Pallas Systems',
    imgFn: (
      <PallasSVG
        id='BannerNavBar.Brand.Link.Logo.SVG'
        alt='Pallas Systems Logo'
        height='3.5rem'
        width='4rem'
        className='d-inline-block'
      />
    ),
  },
  items: [
    { text: 'Getting Started', path: '' },
    { text: 'User Guide', path: '/services' },
    { text: 'Flying Wing', path: '/team' },
  ],
  prefixRow: () => {
    return <h2>hello</h2>;
  },
};

export const SpacedWords: AnnotatedStoryFn<ReactRenderer, NavbarProperty> = Template.bind({});
SpacedWords.args = {
  brand: {
    name: 'Pallas Systems',
  },
  items: [
    { text: 'Getting Started', path: '' },
    { text: 'User Guide', path: '/services' },
    { text: 'Flying Wing', path: '/team' },
  ],
};

export const LongWords: AnnotatedStoryFn<ReactRenderer, NavbarProperty> = Template.bind({});
LongWords.args = {
  brand: {
    name: 'Pallas Systems',
  },
  items: [
    { text: 'GettingStartedWithTomAndDick', path: '' },
    { text: 'User', path: '/services' },
    { text: 'Supercalifragilisticexpialidocious', path: '/services' },
  ],
};
