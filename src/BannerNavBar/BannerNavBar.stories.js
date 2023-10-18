import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { BannerNavBar } from './BannerNavBar.components';
export default {
    component: BannerNavBar,
    decorators: [
        (Story) => (React.createElement(HashRouter, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: '', element: React.createElement(Story, null) }),
                React.createElement(Route, { path: '/services', element: React.createElement(Story, null) }),
                React.createElement(Route, { path: '/team', element: React.createElement(Story, null) })))),
    ],
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => React.createElement(BannerNavBar, { ...args });
export const Default = Template.bind({});
Default.args = {};
export const Complete = Template.bind({});
Complete.args = {
    brandName: 'Pallas Systems',
    brandImg: { id: 'logo', src: './images/logos/logo.svg' },
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
//# sourceMappingURL=BannerNavBar.stories.js.map