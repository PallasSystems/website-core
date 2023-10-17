import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import {Footer} from './Footer.components';

const addressProps = { line1:"A Big house", line2:"Very Big house", city:"Liverchester", county:"Execester", country:"Elbonia", postCode:"SA99 3GT" };
const expectedAddress = "A Big house, Very Big house, Liverchester, Execester, Elbonia, SA99 3GT";
const contactProps = { email:"test@random.org", fax:"01234 567891", mobile:"0771234567", landline:"09876 543210", address: addressProps};

// Social Media Bar Test Properties
const scmProps = { project:"proj", repository:"repo" };
const socialProps = { headerText:"Header", facebook:"jeff", instagram:"gram", linkedin:"business", twitter: "tweet",  scm: scmProps};

test("Blank Footer", () => {
  const result = render(<Footer />);
  expect(result.container).toBeValid();
});

test("Complete Footer", () => {

  const result = render(<Footer companyName="Test" companyNameLink="http://localhost" contact={contactProps} socialMedia={socialProps}/>);
  expect(result.container).toBeValid();

  // Test the social media bar renders correctly
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

  // Contact Section checks
  const text = result.getByText(expectedAddress);
  expect(text).toBeValid();
});

