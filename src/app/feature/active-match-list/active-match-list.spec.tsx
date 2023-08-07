import { render } from '@testing-library/react';

import ActiveMatchList from './active-match-list';

describe('ActiveMatchList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ActiveMatchList />);
        expect(baseElement).toBeTruthy();
    });
});
