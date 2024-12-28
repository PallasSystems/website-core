import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { PallasPageWrapper } from '@pallassystems/website-core';

// Getting Started Page Properties
import { ApiPageProperties } from './api.types';
import { ApiBannerNavBarPageData } from './BannerNavBar/BannerNavBar.data';

const ApiHeadPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container id='intro'>
        <Row className={'my-2'}>
          <h1>API Reference</h1>
        </Row>
        <Row className={'my-2'}>
          <h2>BannerNavBar Properties</h2>
        </Row>
        <Row className={'mx-3'}>
          <ul>
            {ApiBannerNavBarPageData.map((value) => {
              return (
                <li key={value.link}>
                  <LinkContainer to={value.link}>
                    <a href={value.text}>{value.text}</a>
                  </LinkContainer>
                </li>
              );
            })}
          </ul>
        </Row>
      </Container>
    </PallasPageWrapper>
  );
};

export { ApiHeadPage };
