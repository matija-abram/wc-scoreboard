import styles from './active-match-list.module.scss';
import { useContext } from 'react';
import { ScoreboardContext } from '../../context/scoreboard-provider/scoreboard-provider';

/* eslint-disable-next-line */
export interface ActiveMatchListProps {}

export function ActiveMatchList(props: ActiveMatchListProps) {
    const { scoreboard } = useContext(ScoreboardContext);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {scoreboard.map((match, index) => (
                    <li key={index}>{match.getScore()}</li>
                ))}
            </ul>
        </div>
    );
}

export default ActiveMatchList;
