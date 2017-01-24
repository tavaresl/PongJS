class World {
	constructor(color, width, height, game) {
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

	_checkCollision() {
		if (this._ball.posY <= 0 || this._ball.posY >= this._height) {
			this._ball.reflect('y')
		}

		if (this._ball.posX >= 10 && this._ball.posX <= this._width - 10) {
			return
		}

		if (this._player.hasBlocked(this._ball)) {
			this._player.scoreUp()
		}
		else if (this._enemy.hasBlocked(this._ball)) {
			this._enemy.scoreUp()
		}
		else {
			this._ball.reset()
		}

		this._ball.reflect('x')
	}

	update(context) {
		this._ball.update(context)
		this._player.update(context)
		this._enemy.update(context)

		console.log('ball speed', this._ball.speedX)

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

		this._ball.draw(context)
		this._player.draw(context)
		this._enemy.draw(context)
	}

	init() {
		this._ball.subscribe('move', this._checkCollision.bind(this))
	}
}
