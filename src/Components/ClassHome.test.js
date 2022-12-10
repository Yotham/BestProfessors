import { render } from '@testing-library/react';
import data from '../Data/courses.json'
import ClassHome from './ClassHome'

describe(ClassHome, () => {
    it("ClassHome displays correct number of pagination pages", () => {
        const { getby } = render(<ClassHome data={ data }/>);
        const pageValue = getByTestId('page-count');
    });

})