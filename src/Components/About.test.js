import React from 'react';
import { render } from '@testing-library/react';
import About from './About'

describe(About, () => {
    it("About displays correct information", () => {
        const { getByTestId } = render(<About />);
        const pageValue = getByTestId("paragraph-test").textContent;
        expect(pageValue).toEqual("A group of RPI students dedicated to making the class selection process easier, our mission was to eliminate the need to sift through RateMyProfessor to find professor ratings and instead allow students to enter their course code and receive all the necessary information.")
    });
    it("About displays correct name", () => {
        const { getByTestId } = render(<About />);
        const pageValue = getByTestId("name1").textContent;
        expect(pageValue).toEqual("Yotham Sage")
    });
    it("About displays correct name", () => {
        const { getByTestId } = render(<About />);
        const pageValue = getByTestId("name2").textContent;
        expect(pageValue).toEqual("Jen Lawless")
    });
    it("About displays correct name", () => {
        const { getByTestId } = render(<About />);
        const pageValue = getByTestId("name3").textContent;
        expect(pageValue).toEqual("Isaac Foster")
    });
    it("About displays correct name", () => {
        const { getByTestId } = render(<About />);
        const pageValue = getByTestId("name4").textContent;
        expect(pageValue).toEqual("Julia Maguire")
    });
    it("About displays correct name", () => {
        const { getByTestId } = render(<About />);
        const pageValue = getByTestId("name5").textContent;
        expect(pageValue).toEqual("Teddy Clark")
    });
})