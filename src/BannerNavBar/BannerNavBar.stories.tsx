import React from 'react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';
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
      <MemoryRouter>
        <Routes>
          <Route path={''} element={<Story />} />
          <Route path={'/services'} element={<Story />} />
          <Route path={'/team'} element={<Story />} />
        </Routes>
      </MemoryRouter>
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
    { id:'menu1NavBar', text: 'Menu 1', path: '' },
    { id:'menu2NavBar', text: 'Menu 2', path: '/services' },
    { id:'menu3NavBar', text: 'Menu 3', path: '/team' },
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
    { id:'homeNavbar', text: 'Home', path: '' },
    { id:'servicesNavbar', text: 'Services', path: '/services' },
    { id:'teamNavbar', text: 'Team', path: '/team' },
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
    { id:'homeNavBar', text: 'Home', path: '' },
    { id:'servicesNavBar', text: 'Services', path: '/services' },
    {
      id:'teamNavBar', 
      path: '/team',
      text: 'Team',
      items: [
        { id:'joeSubNavBar', text: 'Joe Bloggs', path: '/team/jbloggs' },
        { id:'johnSubNavBar', text: 'John Doe', path: '/team/jdoe', items: [{ id:'janeSubSubNavBar', text: 'Jane', path: '/team/jane' }] },
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
    { id:'gettingStartedNavBar', text: 'Getting Started', path: '' },
    { id:'servicesNavBar', text: 'User Guide', path: '/services' },
    { id:'teamNavBar', text: 'Flying Wing', path: '/team' },
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
    { id:'gettingStartedNavBar', text: 'Getting Started', path: '' },
    { id:'servicesNavBar', text: 'User Guide', path: '/services' },
    { id:'teamNavBar', text: 'Flying Wing', path: '/team' },
  ],
};

export const LongWords: AnnotatedStoryFn<ReactRenderer, NavbarProperty> = Template.bind({});
LongWords.args = {
  brand: {
    name: 'Pallas Systems',
  },
  items: [
    { id:'gsNavBar', text: 'GettingStartedWithTomAndDick', path: '' },
    { id:'servicesNavBar', text: 'User', path: '/services' },
    { id:'teamsNavBar', text: 'Supercalifragilisticexpialidocious', path: '/teams' },
  ],
};
