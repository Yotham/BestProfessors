/* eslint-disable linebreak-style */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React from 'react';
import {render} from '@testing-library/react';
import Contact from './Contact';

describe(Contact, () => {
  it('Contact displays correct information', () => {
    const {getByTestId} = render(<Contact />);
    const pageValue = getByTestId('title-test').textContent;
    expect(pageValue).toEqual('Contact:');
  });
  it('Contact displays correct information', () => {
    const {getByTestId} = render(<Contact />);
    const pageValue = getByTestId('p1-test').textContent;
    expect(pageValue).toEqual('Let us know if you have any suggestions or issues!');
  });
  it('Contact displays correct information', () => {
    const {getByTestId} = render(<Contact />);
    const pageValue = getByTestId('p2-test').textContent;
    expect(pageValue).toEqual('Email: bestprofessorlist@gmail.com');
  });
});
