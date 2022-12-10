import { render } from '@testing-library/react';
import data from '../Data/courses.json'
import ClassResults from './ClassResults'

describe(ClassHome, () => {
    it("ClassHome displays correct number of pagination pages", () => {
        const { getby } = render(<ClassResults />);
        const pageValue = getByTestId('page-count');
    });
})