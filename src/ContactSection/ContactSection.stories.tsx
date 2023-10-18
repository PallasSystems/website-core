import React from 'react';

import { ContactSection } from './ContactSection.components';

export default {
  component: ContactSection
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ContactSection {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Pallas = Template.bind({});
Pallas.args = {
    email: "info@pallas.uk",
    mobile: "+44 7861 530488",
};

export const Complete = Template.bind({});
Complete.args = {
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
};

export const Partial = Template.bind({});
Partial.args = {
    address: {
        line1: "1 Business Street",
        city: "A City",
        country: "ComputerLand",
        postCode: "PL5T EST"
    },
    email: "info@pallas.uk",
    mobile: "+44 7861 530488",
};