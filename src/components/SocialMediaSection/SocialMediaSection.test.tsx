import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import {SocialMediaSection} from './SocialMediaSection.components';

test("Blank Social Media Credentials", () => {
  const result = render(<SocialMediaSection />);

  expect(result.container).toBeValid();
});

test("All Social Media Credentials", () => {
  
  const scmProps = { project:"proj", repository:"repo" };
  const socialProps = { headerText:"Header", facebook:"jeff", instagram:"gram", linkedin:"business", twitter: "tweet",  scm: scmProps};
  

  const result = render(<SocialMediaSection {...socialProps}/>);

  const header = result.getByText(socialProps.headerText);
  expect(header).toBeValid();

  const facebookURL = "[href=\"https://www.facebook.com/groups/" + socialProps.facebook + "\"";
  const facebook = result.container.querySelector(facebookURL);
  expect(facebook).toBeValid();

  const instagramURL = "[href=\"https://instagram.com/" + socialProps.instagram + "\"";
  const instagram = result.container.querySelector(instagramURL);
  expect(instagram).toBeValid();

  const linkedinURL = "[href=\"https://linkedin.com/in/" + socialProps.linkedin + "\"";
  const linkedin = result.container.querySelector(linkedinURL);
  expect(linkedin).toBeValid();

  const twitterURL = "[href=\"https://twitter.com/" + socialProps.twitter + "\"";
  const twitter = result.container.querySelector(twitterURL);
  expect(twitter).toBeValid();

  const githubURL = "[href=\"https://github.com/" + scmProps.project + "/" + scmProps.repository + "\"" ;
  const scm = result.container.querySelector(githubURL);
  expect(scm).toBeValid();
});
