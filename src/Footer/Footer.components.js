import React from 'react';
// React Bootstrap libraries.
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Footer Properties
import { FooterDefaultData } from './Footer.data';
import { ContactSection } from '../ContactSection';
import { SocialMediaSection } from '../SocialMediaSection';
function getValidString(defaultValue, value) {
    let result = value;
    if (value === undefined || null === value || value.length < 1) {
        result = defaultValue;
    }
    return result;
}
const Footer = ({ companyName, companyNameLink, contact, socialMedia }) => {
    const companyNameProp = getValidString(FooterDefaultData.companyName, companyName);
    const companyNameLinkProp = getValidString(FooterDefaultData.companyNameLink, companyNameLink);
    const contactProps = undefined === contact || null == contact ? FooterDefaultData.contact : contact;
    const socialMediaProps = undefined === socialMedia || null == socialMedia ? FooterDefaultData.socialMedia : socialMedia;
    return (React.createElement("footer", { className: 'footer d-flex align-items-end mt-auto py-4 bg-dark text-light' },
        React.createElement(Container, { fluid: true },
            React.createElement(Row, null,
                React.createElement(Col, { className: 'mx-auto mb-md-0 mb-4', md: 4, lg: 3, xl: 3 },
                    React.createElement(ContactSection, { ...contactProps })),
                React.createElement(Col, { className: 'mx-auto mb-md-0 mb-4', md: 4, lg: 3, xl: 3 },
                    React.createElement(SocialMediaSection, { ...socialMediaProps }),
                    React.createElement("div", { id: 'CopyRightWrapper', className: 'pt-3' },
                        React.createElement("p", null,
                            "\u00A9 2022\u20132023",
                            React.createElement("a", { href: companyNameLinkProp },
                                " ",
                                companyNameProp))))))));
};
export { Footer };
//# sourceMappingURL=Footer.components.js.map