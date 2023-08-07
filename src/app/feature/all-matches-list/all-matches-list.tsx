import styles from './all-matches-list.module.scss';
import { useContext, useMemo } from 'react';
import { ScoreboardContext } from '../../context/scoreboard-provider/scoreboard-provider';
import { Match } from '../../lib/game/match';

/* eslint-disable-next-line */
export interface AllMatchesListProps {}

const sort = (match1: Match, match2: Match) => {
    const score1 = match1.getScoreParts().reduce((a, { score }) => a + score, 0);
    const score2 = match2.getScoreParts().reduce((a, { score }) => a + score, 0);
    if (score1 > score2) {
        return -1;
    } else if (score1 < score2) {
        return 1;
    }
    return 0;
};

export function AllMatchesList(props: AllMatchesListProps) {
    const { scoreboard } = useContext(ScoreboardContext);
    const sortedScore = useMemo(() => [...scoreboard].reverse().sort(sort), [scoreboard]);
    return (
        <>
            <h2>Scoreboard</h2>
            <ul className={styles.list}>
                {sortedScore.map((match, idx) => (
                    <li key={idx}>{match.getScore()}</li>
                ))}
            </ul>
        </>
    );
}

export default AllMatchesList;
