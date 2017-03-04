import { Component } from './Component.js'
import { Paddle } from './Paddle.js'

export class Player extends Component {
	constructor(width, height, color, posX, posY, speed) {
		super()
		this._paddle = new Paddle(width, height, color, posX, posY, speed)
		this._score  = 0
	}

	get score()  { return this._score + 0 }
	get paddle() { return this._paddle }

	draw(context) 	{ this.paddle.draw(context) }
	update(context) { this.paddle.update(context) }

	scoreUp(score) {
		if (!typeof score == 'number') {
			throw new TypeError('score must be a number')
		}

		this._score += score
	}

	hasBlocked(ball) {
		if (ball.posY >= this._paddle.posY - 5
		&& ball.posY <= this._paddle.posY + this._paddle.height + 5
		&& ball.posX >= this._paddle.posX - 5
		&& ball.posX <= this._paddle.posX + this._paddle.width + 5) {
			return true
		}

		return false
	}

	init() {}
}
