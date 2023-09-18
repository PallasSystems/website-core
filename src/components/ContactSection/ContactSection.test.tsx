import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import {ContactSection} from './ContactSection.components';

test("Blank Footer", () => {
  const result = render(<ContactSection />);
  expect(result.container).toBeValid();
});

test("Valid Non Address Components Footer", () => {
  // test data to confirm the logic works correctly
  const contactProps = { email:"test@random.org", fax:"01234 567891", mobile:"0771234567", landline:"09876 543210" };

  const result = render(<ContactSection {...contactProps}/>);
  expect(result.container).toBeValid();

  const email = result.getByText(contactProps.email);
  expect(email).toBeValid();

  const fax = result.getByText(contactProps.fax);
  expect(fax).toBeValid();

  const mobile = result.getByText(contactProps.mobile);
  expect(mobile).toBeValid();

  const landline = result.getByText(contactProps.landline);
  expect(landline).toBeValid();
});

test("Address Components Partial Footer", () => {

  // test data to confirm the logic works correctly
  const addressProps = { line1:"A Big house", city:"Liverchester", country:"Elbonia", postCode:"SA99 3GT" };

  const result = render(<ContactSection address={addressProps}/>);
  expect(result.container).toBeValid();

  const expectedText = "A Big house, Liverchester, Elbonia, SA99 3GT";

  const text = result.getByText(expectedText);
  expect(text).toBeValid();
});


test("Address Components Complete Footer", () => {

  // test data to confirm the logic works correctly
  const addressProps = { line1:"A Big house", line2:"Very Big house", city:"Liverchester", county:"Execester", country:"Elbonia", postCode:"SA99 3GT" };

  const result = render(<ContactSection address={addressProps}/>);
  expect(result.container).toBeValid();

  const expectedText = "A Big house, Very Big house, Liverchester, Execester, Elbonia, SA99 3GT";

  const text = result.getByText(expectedText);
  expect(text).toBeValid();
});

