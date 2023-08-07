export class Team {
    public static readonly NAME_LENGTH = 3;

    public readonly name: string;
    private _score: number;

    constructor(name: string, initScore = 0) {
        if (name.length >= Team.NAME_LENGTH) {
            this.name = name;
            this._score = initScore;
        } else {
            throw new Error(`Team name is too short. It needs to be at least ${Team.NAME_LENGTH} characters long.`);
        }
    }

    public set score(value: number) {
        // using setter would allow adding additional checks when setting new score
        this._score = value;
    }

    public get score(): number {
        return this._score;
    }
}
