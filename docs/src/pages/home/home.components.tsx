import React, { FC } from 'react';

import { PallasPageWrapper } from '@pallassystems/website-core';

// HomePage Properties
import { HomePageProperties } from './home.types';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// Package properties
import projectProps from '../../../../package.json';

const HomePage: FC<HomePageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container fluid id={'home.container'} className={'text-center content'}>
        <Row className={'my-2'}>
          <h1>Website Core Components</h1>
        </Row>
        <Row className={'my-2'}>
          <h5>{projectProps.description}</h5>
        </Row>
        <Row>
          <Col>
            <div className={'d-grid gap-2 my-2'}>
              <LinkContainer to='/gettingStarted'>
                <Button variant='dark'>Getting Started</Button>
              </LinkContainer>
            </div>
          </Col>
          <Col>
            <div className={'d-grid gap-2 my-2'}>
              <LinkContainer to='/api'>
                <Button variant='dark'>API</Button>
              </LinkContainer>
            </div>
          </Col>
          <Col>
            <div className={'d-grid gap-2 my-2'}>
              <LinkContainer to='/examples'>
                <Button variant='dark'>Examples</Button>
              </LinkContainer>
            </div>
          </Col>
        </Row>
        <Row className={'my-2'}>
          <p>Current Version: {projectProps.version}</p>
        </Row>
      </Container>
    </PallasPageWrapper>
  );
};

export { HomePage };
