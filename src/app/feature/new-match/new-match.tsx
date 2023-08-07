import { FormEvent, FormEventHandler, useContext, useState } from 'react';
import styles from './new-match.module.scss';
import { Team } from '../../lib/team/team';
import { ScoreboardContext } from '../../context/scoreboard-provider/scoreboard-provider';
import { Match } from '../../lib/game/match';

/* eslint-disable-next-line */
export interface NewMatchProps {}

export function NewMatch(props: NewMatchProps) {
    const [homeVal, setHomeVal] = useState<string>('');
    const [awayVal, setAwayVal] = useState<string>('');
    const { start } = useContext(ScoreboardContext);

    const onSubmit: FormEventHandler = (e: FormEvent) => {
        e.preventDefault();
        if (homeVal.length >= Team.NAME_LENGTH && awayVal.length >= Team.NAME_LENGTH) {
            console.log('start');
            setAwayVal('');
            setHomeVal('');
            start(new Match(new Team(homeVal), new Team(awayVal)));
        } else {
            return;
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className={styles.formWrapper}>
                <h2>Add new Match</h2>
                <div>
                    <label>
                        <span className={styles.label}>Away Team Name</span>
                        <input
                            value={homeVal}
                            onChange={(e) => setHomeVal(e.target.value)}
                            type="text"
                            name="home"
                            minLength={Team.NAME_LENGTH}
                            required
                        />
                    </label>
                </div>
                <span>-</span>
                <div>
                    <label>
                        <span className={styles.label}>Away Team Name</span>
                        <input
                            value={awayVal}
                            onChange={(e) => setAwayVal(e.target.value)}
                            type="text"
                            name="away"
                            minLength={Team.NAME_LENGTH}
                            required
                        />
                    </label>
                </div>
                <button type="submit">+</button>
            </div>
        </form>
    );
}

export default NewMatch;
