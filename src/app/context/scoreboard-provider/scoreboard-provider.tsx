import { createContext, ReactNode, Reducer, useReducer } from 'react';
import { Match } from '../../lib/game/match';

/* eslint-disable-next-line */
export interface ScoreboardProviderProps {
    children: ReactNode;
}

export type ScoreboardContextType = {
    scoreboard: Match[];
    start(match: Match): void;
    update(match: Match): void;
    finish(match: Match): void;
};

type ScoreboardReducerType = Reducer<any, any>;
type StateType = {
    scoreboard: Match[];
};
type ActionType = {
    action: 'start' | 'update' | 'finish';
    match: Match;
};
const scoreboardReducer = (state: StateType, { match, action }: ActionType): StateType => {
    if (action === 'start') {
        return { scoreboard: [...state.scoreboard, match] };
    } else if (action === 'finish') {
        return { scoreboard: state.scoreboard.filter((m) => m !== match) };
    } else {
        return { scoreboard: [...state.scoreboard] };
    }
};

export const ScoreboardContext = createContext<ScoreboardContextType>({
    scoreboard: [],
    start: (m) => {
        /**/
    },
    update: (m) => {
        /**/
    },
    finish: (m) => {
        /**/
    },
} as ScoreboardContextType);

export function ScoreboardProvider({ children }: ScoreboardProviderProps) {
    const [{ scoreboard }, setScoreboard] = useReducer<ScoreboardReducerType>(scoreboardReducer, { scoreboard: [] });

    return (
        <ScoreboardContext.Provider
            value={{
                scoreboard,
                start(match: Match) {
                    console.log('start the match:', match);
                    setScoreboard({ match, action: 'start' });
                },
                update(match: Match) {
                    setScoreboard({ match, action: 'update' });
                },
                finish(match: Match) {
                    setScoreboard({ match, action: 'finish' });
                },
            }}
        >
            {children}
        </ScoreboardContext.Provider>
    );
}
