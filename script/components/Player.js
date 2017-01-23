class Player {
	constructor(width, height, color, posX, posY, speed, game) {
		this._paddle = new Paddle(width, height, color, posX, posY, speed, game)
		this._score  = 0
	}

	get score() {
		return this._score + 0
	}

	scoreUp(score) {
		if (!typeof score == 'number') {
			throw new TypeError('score must be a number')
		}

		this._score += score
	}
}
