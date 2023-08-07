import styles from './app.module.scss';
import { ScoreboardProvider } from './context/scoreboard-provider/scoreboard-provider';
import ActiveMatchList from './feature/active-match-list/active-match-list';
import NewMatch from './feature/new-match/new-match';
import ScoreBoard from './feature/all-matches-list/score-board';

export function App() {
    return (
        <ScoreboardProvider>
            <div className={styles.layout}>
                <div className={styles.wide}>
                    <NewMatch />
                </div>
                <div>
                    <ActiveMatchList />
                </div>
                <div>
                    <ScoreBoard />
                </div>
            </div>
        </ScoreboardProvider>
    );
}

export default App;
