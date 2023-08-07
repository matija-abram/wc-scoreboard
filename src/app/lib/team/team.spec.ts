import { Team } from './team';

describe('Team', () => {
    it('sets initial score correctly', () => {
        const team1 = new Team('Germany');
        const team2 = new Team('England', 2);
        expect(team1.score === 0 && team2.score === 2).toBeTruthy();
    });
    it('should check for minimum name length', () => {
        expect(() => new Team('abcdefgh'.substring(0, Team.NAME_LENGTH - 1))).toThrow(Error);
    });
});
