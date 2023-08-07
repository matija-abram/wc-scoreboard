import { Team } from '../team/team';

export type TeamScore = {
    name: string;
    score: number;
};

export class Match {
    public readonly home: Team;
    public readonly away: Team;

    private isActive = false;
    private isFinished = false;

    constructor(home: Team, away: Team) {
        this.home = home;
        this.away = away;

        this.isActive = true;
    }

    public finish(): void {
        this.isActive = false;
        this.isFinished = true;
    }

    public updateScore(homeScore: number, awayScore: number): void {
        this.home.score = homeScore;
        this.away.score = awayScore;
    }

    public get active(): boolean {
        return this.isActive;
    }

    public get finished(): boolean {
        return this.isFinished;
    }

    public getScore(): string {
        return `${this.home.name} ${this.home.score} - ${this.away.name} ${this.away.score}`;
    }

    public getScoreParts = (): TeamScore[] => [
        {
            name: this.home.name,
            score: this.home.score,
        },
        {
            name: this.away.name,
            score: this.away.score,
        },
    ];
}
