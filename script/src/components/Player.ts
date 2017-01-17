"use strict";

import { Paddle } 	from "Paddle"
import { Playable } from "../interfaces/Playable"

export class Player extends Paddle implements Playable {
	private _score : number

	constructor(width: number, height: number, color: string, posX: number,
		posY: number, speed: number) {
			super(width, height, color, posX, posY, speed)
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

			}
			else if (key.keyCode == 40) {
				
			}
		})
	}	
}