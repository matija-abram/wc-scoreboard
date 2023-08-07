import { render } from '@testing-library/react';
import ActiveMatch from './active-match';

import { Match } from '../../lib/game/match';
import { Team } from '../../lib/team/team';

describe('ActiveMatch', () => {
    it('should render successfully', () => {
        const match = new Match(new Team('abc'), new Team('def'));
        const { baseElement } = render(<ActiveMatch match={match} />);
        expect(baseElement).toBeTruthy();
    });
});
