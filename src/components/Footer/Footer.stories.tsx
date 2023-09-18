import React from 'react';

import { Footer } from './Footer.components';

export default {
  component: Footer
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Complete = Template.bind({});
Complete.args = {
    contact: {
        address: {
            line1: "1 Business Street",
            line2: "Business Park",
            city: "A City",
            county: "LocationShire",
            country: "ComputerLand",
            postCode: "PL5T EST"
        },
        email: "info@pallas.uk",
        fax: "01234 789543",
        mobile: "+44 7861 530488",
        landline: "01234 567890"
    },
    socialMedia: {
        headerText: "Get connected with us on social networks",
        facebook: "12345",
        instagram: "6789",
        linkedin: "abcdef",
        twitter: "zyxwv",
        scm: {
            endpoint: "http://localhost/",
            project: "proj",
            repository: "repo",
            type: "git"
        }
    },
    companyName: "Boring Company",
    companyNameLink: "https://www.pallas.uk"
};