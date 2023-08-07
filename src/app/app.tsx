import styles from './app.module.scss';
import { ScoreboardProvider } from './context/scoreboard-provider/scoreboard-provider';
import ActiveMatchList from './feature/active-match-list/active-match-list';
import NewMatch from './feature/new-match/new-match';
import AllMatchesList from './feature/all-matches-list/all-matches-list';

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
                    <AllMatchesList />
                </div>
            </div>
        </ScoreboardProvider>
    );
}

export default App;
