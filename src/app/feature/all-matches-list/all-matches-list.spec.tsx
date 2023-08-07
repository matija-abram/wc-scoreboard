import { render } from '@testing-library/react';

import AllMatchesList from './all-matches-list';

describe('AllMatchesList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<AllMatchesList />);
        expect(baseElement).toBeTruthy();
    });
});
