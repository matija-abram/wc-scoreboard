import { Match } from './match';
import { Team } from '../team/team';

describe('Match', () => {
    const home = new Team('Germany');
    const away = new Team('France');
    const match = new Match(home, away);

    it('should instantiate with correct score', () => {
        expect(match.getScore()).toBe('Germany 0 - France 0');
    });

    it('should update score correctly', () => {
        match.updateScore(3, 2);
        expect(match.getScore()).toBe('Germany 3 - France 2');
    });
    it('should return correct values for match', () => {
        match.updateScore(3, 8);
        const [h, a] = match.getScoreParts();
        expect(h.score === 3 && a.score === 8 && h.name === 'Germany' && a.name === 'France').toBeTruthy();
    });
});
