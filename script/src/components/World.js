import { Component } from './Component.js'

export class World extends Component {
	constructor(color, width, height, game) {
		super()
		this._color    = color
		this._width    = width
		this._height   = height
		this._player   = {}
		this._ball     = {}
		this._enemy    = {}
		this._powerUps = []
	}

	set ball(ball)     { this._ball = ball }
	set player(player) { this._player = player }
	set enemy(enemy)   { this._enemy = enemy }
	
	stop() {
		this._ball.stop()
		this._enemy.stop()
		this._player.stop()
	}

	_checkCollision() {
		if (this._ball.posY <= 0 || this._ball.posY >= this._height) {
			this._ball.reflect('y')
		}

		if (this._ball.posX >= 10 && this._ball.posX <= this._width - 10 ) {
			return
		}

		this._ball.reflect('x')

		if (this._ball.posX < 10 
		&& !this._player.hasBlocked(this._ball)) {
			this._enemy.scoreUp()
			this._ball.reset()
			this._notify('score', this._enemy)
		}
		else if (this._ball.posX > this._width - 10
		&& !this._enemy.hasBlocked(this._ball)) {
			this._player.scoreUp()
			this._ball.reset()
			this._notify('score', this._player)
		}
	}

	update(context) {
		this._ball.update(context)
		this._player.update(context)
		this._enemy.update(context)

		if (this._ball.speedX > 0) {
			this._enemy.chase(this._ball)
		}
		else {
			this._enemy.stopChasing()
		}
	}

	draw(context) {
		context.fillStyle = this._color
		context.fillRect(0, 0, context.canvas.width, context.canvas.height)

		context.beginPath()
		context.strokeStyle = '#ccc'
		context.moveTo(this._width/2, 0)
		context.lineTo(this._width/2, this._height)
		context.stroke()
		context.strokeStyle = '#000'

		context.beginPath()
		context.fillStyle= '#666'
		context.arc(this._width/2, this._height/2, 15, 0, 2*Math.PI)
		context.fill()


		this._ball.draw(context)
		this._player.draw(context)
		this._enemy.draw(context)
	}

	init() {
		this._ball.subscribe('move', this._checkCollision.bind(this))
	}
}
