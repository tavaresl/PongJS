import { Component } from './Component.js'

export class Ball extends Component {
	constructor(color, radius, posX, posY, speedX, speedY) {
		super()
		this._color      = color
		this._radius     = radius
		this._posX       = posX
		this._posY       = posY
		this._speedX     = speedX
		this._speedY     = speedY
		this._initialPos = { x : posX, y : posY }
	}

	get posX()   { return this._posX + 0 }
	get posY()   { return this._posY + 0 }
	get speedX() { return this._speedX + 0 }
	get radius() { return this._radius + 0 }

	reflect(axis) {
		if (axis == 'y') {
			this._speedY = -this._speedY
		} else if (axis == 'x') {
			this._speedX = -this._speedX
		}
	}

	stop() {
		this._speedX = 0
		this._speedY = 0
	}

	reset() {
		this._posX = this._initialPos.x
		this._posY = this._initialPos.y
	}

	update(context) {
		this._posX += this._speedX;
		this._posY += this._speedY;

		this._notify('move')
	}

	draw(context) {
		context.fillStyle = this._color
		context.beginPath()
		context.arc(this._posX, this._posY, this._radius, 0, 2 * Math.PI)
		context.fill()
	}
}
