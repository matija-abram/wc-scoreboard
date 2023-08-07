import styles from './active-match-list.module.scss';
import { useContext } from 'react';
import { ScoreboardContext } from '../../context/scoreboard-provider/scoreboard-provider';
import ActiveMatch from '../active-match/active-match';

/* eslint-disable-next-line */
export interface ActiveMatchListProps {}

export function ActiveMatchList(props: ActiveMatchListProps) {
    const { scoreboard } = useContext(ScoreboardContext);

    return (
        <div className={styles.wrapper}>
            <h2>In progress</h2>
            <ul className={styles.list}>
                {scoreboard.map((match, index) => (
                    <li key={index}>
                        <ActiveMatch match={match} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ActiveMatchList;
