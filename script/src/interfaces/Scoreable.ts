export interface Scoreable {
    score: number
    scoreUp(score: number) : void
    scoreDown(score: number) : void
}