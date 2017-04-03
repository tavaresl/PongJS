import { Component } from './Component.js'

export class Score extends Component {
	
	constructor(score, posX, posY) {
		super()
		this._score = score
		this._posX = posX
		this._posY = posY
		this._multiplier = 1
	}

	get points() {
		return this._score + 0
	}

	get multiplier() {
		return this._multiplier + 0
	}

	set multiplier(multiplier) {
		this._multiplier = multiplier
	}

	scoreUp() {
		this._score += 1 * this._multiplier
	}

	draw(context) {
		context.font = '16px Arial'
		context.fillStyle = 'white'
		context.fillText(this._score.toString(), this._posX, this._posY)
	}

	update(context) {}

	init() {}
}