import { render } from '@testing-library/react';

import ActiveMatch from './active-match';

describe('ActiveMatch', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ActiveMatch />);
        expect(baseElement).toBeTruthy();
    });
});
