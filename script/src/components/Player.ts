import { Paddle }    from "Paddle"
import { Playable }  from "../interfaces/Playable"
import { Scoreable } from "../interfaces/Scoreable"

export class Player implements Playable, Scoreable {
	private _score: number
	private _paddle: Paddle

	constructor(width: number, height: number, color: string, posX: number,
		posY: number, speed: number) {
			this._paddle = new Paddle(width, height, color, posX, posY, speed)
			this._score = 0
	}

	get score() : number {
		return this._score + 0
	}

	scoreUp(score) : void {
		this._score += score
	}

	scoreDown(score) : void {
		this._score -= score
	}

	listenToMoveKeys() : void {
		document.addEventListener('keydown', key => {
			if (key.keyCode == 38) {
				this._paddle.moveUp()
			}
			else if (key.keyCode == 40) {
				
			}
		})
	}	
}