import styles from './active-match.module.scss';
import { Match } from '../../lib/game/match';
import { FormEvent, useContext, useState } from 'react';
import { Team } from '../../lib/team/team';
import { ScoreboardContext } from '../../context/scoreboard-provider/scoreboard-provider';

/* eslint-disable-next-line */
export interface ActiveMatchProps {
    match: Match;
}

export function ActiveMatch({ match }: ActiveMatchProps) {
    const { update, finish } = useContext(ScoreboardContext);
    const [h, a] = match.getScoreParts();
    const [homeScore, setHomeScore] = useState<number>(h.score);
    const [awayScore, setAwayScore] = useState<number>(a.score);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        match.updateScore(homeScore, awayScore);
        update(match);
    };

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={onSubmit}>
                <div className={styles.form}>
                    <div>
                        <label>
                            <h3 className={styles.label}>{h.name}</h3>
                            <input
                                value={homeScore}
                                onChange={(e) => setHomeScore(parseInt(e.target.value))}
                                type="number"
                                name="home"
                                minLength={Team.NAME_LENGTH}
                                required
                            />
                        </label>
                    </div>
                    <span>-</span>
                    <div>
                        <label>
                            <h3 className={styles.label}>{a.name}</h3>
                            <input
                                value={awayScore}
                                onChange={(e) => setAwayScore(parseInt(e.target.value))}
                                type="number"
                                name="away"
                                minLength={Team.NAME_LENGTH}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">↻ Update</button>
                </div>
            </form>
            <button type="button" onClick={() => finish(match)}>
                ✔️ Finish
            </button>
        </div>
    );
}

export default ActiveMatch;
