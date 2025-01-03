import React, { FC } from 'react';
import { Link } from 'react-router';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { PallasPageWrapper } from '@pallassystems/website-core';

// HomePage Properties
import { HomePageProperties } from './home.types';

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
              <Link to='/gettingStarted'>
                <Button variant='dark'>Getting Started</Button>
              </Link>
            </div>
          </Col>
          <Col>
            <div className={'d-grid gap-2 my-2'}>
              <Link to='/api'>
                <Button variant='dark'>API</Button>
              </Link>
            </div>
          </Col>
          <Col>
            <div className={'d-grid gap-2 my-2'}>
              <Link to='/examples'>
                <Button variant='dark'>Examples</Button>
              </Link>
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
