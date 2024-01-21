import React, { FC } from 'react';
// React Bootstrap libraries.
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Footer Properties
import { FooterProperties } from './Footer.types';
import { ContactSection } from '../ContactSection';
import { SocialMediaSection } from '../SocialMediaSection';

const Footer: FC<FooterProperties> = ({ companyName, companyNameLink, contact, socialMedia }) => {
  return (
    <footer className='footer d-flex align-items-end mt-auto py-4 bg-dark text-light'>
      <Container fluid>
        <Row>
          <Col className={'mx-auto mb-md-0 mb-4'} md={4} lg={3} xl={3}>
            {contact ? <ContactSection {...contact} /> : null}
            {socialMedia ? <SocialMediaSection {...socialMedia} /> : null}
          </Col>
          <Col className={'mx-auto mb-md-0 mb-4'} md={4} lg={3} xl={3}>
            <div id='CopyRightWrapper' className='pt-3'>
              <p>
                © 2022–2023
                {companyName && companyNameLink ? <a href={companyNameLink}> {companyName}</a> : null}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export { Footer };
