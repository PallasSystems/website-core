import React from 'react';
// Contact specific icons
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import { SCMIcon } from '../SCMIcon';
function isValidString(value) {
    return value !== undefined && null != value && value.length > 1;
}
function hasSocialMediaValues(facebook, instagram, twitter, linkedin, scm) {
    return (isValidString(facebook) ||
        isValidString(instagram) ||
        isValidString(twitter) ||
        isValidString(linkedin) ||
        (undefined !== scm && null !== scm));
}
const SocialMediaSection = ({ headerText, facebook, instagram, twitter, linkedin, scm }) => {
    return (React.createElement("div", { id: 'SocialMediaSectionWrapper', className: 'pt-2' },
        isValidString(headerText) ? React.createElement("p", null, headerText) : null,
        hasSocialMediaValues(facebook, instagram, twitter, linkedin, scm) ? (React.createElement("p", { id: 'SocialMediaSectionWrapper.IconBlock' },
            isValidString(facebook) ? (React.createElement("a", { id: 'SocialMediaSectionWrapper.IconBlock.facebook', className: 'text-light, px-1', href: 'https://www.facebook.com/groups/' + facebook },
                React.createElement(Facebook, null))) : null,
            isValidString(instagram) ? (React.createElement("a", { id: 'SocialMediaSectionWrapper.IconBlock.facebook', className: 'text-light, px-1', href: 'https://instagram.com/' + instagram },
                React.createElement(Instagram, null))) : null,
            isValidString(linkedin) ? (React.createElement("a", { id: 'SocialMediaSectionWrapper.IconBlock.facebook', className: 'text-light, px-1', href: 'https://linkedin.com/in/' + linkedin },
                React.createElement(Linkedin, null))) : null,
            isValidString(twitter) ? (React.createElement("a", { id: 'SocialMediaSectionWrapper.IconBlock.facebook', className: 'text-light, px-1', href: 'https://twitter.com/' + twitter },
                React.createElement(Twitter, null))) : null,
            scm === null || scm === undefined ? null : React.createElement(SCMIcon, { ...scm }))) : null));
};
export { SocialMediaSection };
//# sourceMappingURL=SocialMediaSection.components.js.map