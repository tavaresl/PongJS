class Paddle {
	constructor(width, height, color, posX, posY, speed, game) {
		this._width   	 = width
		this._height 	 = height
		this._color  	 = color
		this._posX   	 = posX
		this._posY   	 = posY
		this._speed 	 = speed
		this._movingDown = false
		this._movingUp   = false

		this._init(game)
	}

	get isMovingUp()   { return this._movingUp == true }

	get isMovingDown() { return this._movingDown == true }

	moveUp() {
		this._movingUp = true
	}

	moveDown() {
		this._movingDown = true
	}

	stopMovingUp() {
		this._movingUp = false
	}

	stopMovingDown() {
		this._movingDown = false
	}

	update() {
		if (this.isMovingDown && !this.isMovingUp) {
			this._posY += this._speed
		}
		else if (this.isMovingUp && !this.isMovingDown) {
			this._posY -= this._speed
		}
	}

	draw(context) {
		context.fillStyle = this._color;
		context.fillRect(this._posX, this._posY, this._width, this._height);
	}

	_init() {
		game.subscribe('update', this.update.bind(this))
		game.subscribe('draw', this.draw.bind(this))
	}
}
