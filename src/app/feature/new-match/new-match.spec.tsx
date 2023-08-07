import { render } from '@testing-library/react';

import NewMatch from './new-match';

describe('NewMatch', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<NewMatch />);
        expect(baseElement).toBeTruthy();
    });
});
