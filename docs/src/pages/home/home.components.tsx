import { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// HomePage Properties
import { HomePageProperties } from './home.types';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomePage: FC<HomePageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content text-center my-5'}>
        <Row className={'my-2'}>
          <h1>Website Core Components</h1>
        </Row>
        <Row className={'my-2'}>
          <h5>Components to enable the creation of Pallas Systems themed websites</h5>
        </Row>
        <Row className={'my-2'}>
          <Col xs={3}></Col>
          <Col>
            <LinkContainer to='/gettingStarted'>
              <Button variant='dark'>Getting Started</Button>
            </LinkContainer>
          </Col>
          <Col>
            <LinkContainer to='/api'>
              <Button variant='dark'>API</Button>
            </LinkContainer>
          </Col>
          <Col>
            <LinkContainer to='/examples'>
              <Button variant='dark'>Examples</Button>
            </LinkContainer>
          </Col>
          <Col xs={3}></Col>
        </Row>
        <Row className={'my-2'}>
          <p>Current Version: 0.1.6</p>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { HomePage };
