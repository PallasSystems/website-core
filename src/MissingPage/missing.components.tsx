import React, { FC } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import type { MissingPageProperties } from './missing.types';
import { PallasPageWrapper, PallasSVG } from '../';

const MissingPage: FC<MissingPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container fluid id={'Missing.Container'} className={'content'}>
        <Row align='center' id={'Missing.Container.ImageRow'}>
          <Col className={'text-dark'} id={'Missing.Container.ImageRow.Coloumn'}>
            <PallasSVG id='Missing.Container.ImageRow.Coloumn.Image' />
          </Col>
        </Row>
        <Row align={'center'} id={'Missing.Container.TextRow'}>
          <Col className={'text-dark'} id={'Missing.Container.TextRow.Coloumn'}>
            <h1 id={'Missing.Container.TextRow.Coloumn.Text'}>Missing Page</h1>
          </Col>
        </Row>
      </Container>
    </PallasPageWrapper>
  );
};

export { MissingPage };
