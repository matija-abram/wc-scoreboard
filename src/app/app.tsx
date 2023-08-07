import styles from './app.module.scss';
import { ScoreboardProvider } from './context/scoreboard-provider/scoreboard-provider';
import ActiveMatchList from './feature/active-match-list/active-match-list';
import NewMatch from './feature/new-match/new-match';

export function App() {
    return (
        <ScoreboardProvider>
            <div>
                <div>
                    <NewMatch />
                </div>
                <div>
                    <ActiveMatchList />
                </div>
            </div>
        </ScoreboardProvider>
    );
}

export default App;
