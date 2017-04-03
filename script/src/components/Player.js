import { Component } from './Component.js'
import { Paddle } from './Paddle.js'
import { Score } from './Score.js'

export class Player extends Component {
	constructor(name, width, height, color, paddlePosX, paddlePosY, speed, scorePosX, scorePosY) {
		super()
		this._name 	 = name
		this._paddle = new Paddle(width, height, color, paddlePosX, paddlePosY, speed)
		this._score  = new Score(0, scorePosX, scorePosY)
	}

	get name()   { return this._name + '' }
	get score()  { return this._score }
	get paddle() { return this._paddle }

	scoreUp() {
		this._score.scoreUp()
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

	stop() {
		this._paddle.stop()
 	}

	draw(context) 	{ 
		this._paddle.draw(context)
		this._score.draw(context)
	}
	
	update(context) {
		this._paddle.update(context)
		this._score.update(context)
	}

	init() {}
}
