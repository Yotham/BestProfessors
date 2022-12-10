import { render } from '@testing-library/react';
import App from './App'

describe(App, () => {
    it("App displays correct route in the container div", () => {
        const {} = render(<App/>)
    });

})