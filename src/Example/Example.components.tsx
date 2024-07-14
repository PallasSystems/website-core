import React, { FC } from 'react';

import { Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { ExamplesPageProps, ExamplesStorybookPageProps, ExamplesSubPageProps } from './Example.types';
import { BannerNavBar, Footer, NavbarLinkProperty } from '..';

import { PallasPageWrapper } from '../PallasPageWrapper/PallasPageWrapper.components';

/**
 *
 * @param param0
 * @returns
 */
export const ExamplesHeadPage: FC<ExamplesPageProps> = ({
  footerProps,
  navBarProps,
  exampleProps,
  headerText,
  headerMessage,
}) => {
  const header = headerText ? headerText : 'Examples';
  const message = headerMessage
    ? headerMessage
    : 'This section provides a number of examples to help you quickly get started using the library.';

  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container id='intro' className={'my-2'}>
        <Row>
          <h1>{header}</h1>
        </Row>
        <Row>
          <p>{message}</p>
        </Row>
        {exampleProps.map((exampleProp: NavbarLinkProperty) => {
          return <ExamplesHeadTitlePage key={exampleProp.id} {...exampleProp} />;
        })}
      </Container>
    </PallasPageWrapper>
  );
};

/**
 *
 * @param param0
 * @returns
 */
export const ExamplesSectionPage: FC<ExamplesSubPageProps> = ({ footerProps, navBarProps, exampleProps }) => {
  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container id='intro' className={'my-2'}>
        <ExamplesHeadTitlePage {...exampleProps} />
      </Container>
    </PallasPageWrapper>
  );
};

/**
 * Used to generate
 * @param param0
 * @returns
 */
export const ExamplesHeadTitlePage: FC<NavbarLinkProperty> = ({ text, items }) => {
  return (
    <>
      {items ? (
        <>
          <Row>
            <h2>{text}</h2>
          </Row>
          <Row className={'mx-3'}>
            <ul>
              {items.map((item) => {
                return (
                  <li key={'Example.Head.List.' + item.text}>
                    {item.path ? (
                      <LinkContainer to={item.path} key={'Example.Head.Lis.Link.' + item.text}>
                        <a>{item.text}</a>
                      </LinkContainer>
                    ) : (
                      <p>{item.text}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </Row>
        </>
      ) : null}
    </>
  );
};

/**
 * This is used to generate a page to wrap stories generated by storybook.
 * @param param0 - the page footer and navbar properties as well as information to load the storybook id.
 * @returns a valid storybook page.
 */
export const ExamplesStorybookPage: FC<ExamplesStorybookPageProps> = ({ footerProps, navBarProps, exampleProps }) => {
  const srcLink = './storybook-static/iframe.html?id=' + exampleProps.id + '&viewMode=docs&shortcuts=false';

  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <iframe
        className='embed-responsive-item'
        src={srcLink}
        height='100%'
        width='100%'
        style={{ minHeight: '1150px' }}
      />
    </PallasPageWrapper>
  );
};
