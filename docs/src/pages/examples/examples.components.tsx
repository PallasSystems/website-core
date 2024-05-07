import { FC } from 'react';

import { Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

import { ExamplesPageProperties, ExampleStorybookPageProperties } from './examples.types';
import { ExamplePageData } from './example.data';

const ExamplesHeadPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
      <BannerNavBar {...navBarProps} />
      <main className={'flex-grow-1'} role={'main'}>
        <Container id='intro' className={'my-2'}>
          <Row>
            <h1>Examples</h1>
          </Row>
          <Row className={'mx-3'}>
            <ul>
              {ExamplePageData.map((value) => {
                return (
                  <li>
                    <LinkContainer to={value.link}>
                      <a>{value.text}</a>
                    </LinkContainer>
                  </li>
                );
              })}
            </ul>
          </Row>
        </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

export { ExamplesHeadPage };
