import React, { FC } from 'react';
// React Bootstrap libraries.
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Footer Properties
import { FooterDefaultData } from './Footer.data';
import { FooterProperties } from './Footer.types';
import { ContactSection } from '../ContactSection';
import { SocialMediaSection }  from '../SocialMediaSection';

function getValidString(defaultValue: string, value?: string) {
    let result = value;

    if (value === undefined || null === value || value.length < 1) {
        result = defaultValue;
    }
    
    return result;
}


const Footer: FC<FooterProperties> = ({companyName, companyNameLink, contact, socialMedia}) => {

    const companyNameProp = getValidString(FooterDefaultData.companyName, companyName);
    const companyNameLinkProp = getValidString(FooterDefaultData.companyNameLink, companyNameLink);
    const contactProps = undefined === contact || null == contact ? FooterDefaultData.contact : contact;
    const socialMediaProps = undefined === socialMedia || null == socialMedia ? FooterDefaultData.socialMedia : socialMedia;

    return (
            <footer className="footer d-flex align-items-end mt-auto py-4 bg-dark text-light">
                <Container fluid>
                    <Row>
                        <Col className={"mx-auto mb-md-0 mb-4"} md={4} lg={3} xl={3}>
                            <ContactSection {...contactProps} />
                        </Col>
                        <Col className={"mx-auto mb-md-0 mb-4"} md={4} lg={3} xl={3}>
                            <SocialMediaSection {...socialMediaProps} />
                            <div id="CopyRightWrapper" className="pt-3">
                                <p>
                                © 2022–2023
                                <a href={companyNameLinkProp}> {companyNameProp}</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
    )
};

export { Footer };

