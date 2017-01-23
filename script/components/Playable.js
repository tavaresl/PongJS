class Playable extends Player {
	constructor(width, height, color, posX, posY, speed, ball, game) {
		super(width, height, color, posX, posY, speed, game)
		this._init(window.document, ball)
	}

	_init(document, ball) {
		document.addEventListener('keydown', key => {
			console.log('churros', key.keyCode)
			if (key.keyCode == 38 || key.keyCode == 87) {
				this._paddle.moveUp()
			}
			else if (key.keyCode == 40 || key.keyCode == 83) {
				this._paddle.moveDown()
			}
		})

		document.addEventListener('keyup', key => {
			if (key.keyCode == 38 || key.keyCode == 87) {
				this._paddle.stopMovingUp()
			}
			else if (key.keyCode == 40 || key.keyCode == 83) {
				this._paddle.stopMovingDown()
			}
		})

		ball.subscribe('goalhit', evt => {
			if (evt.target == 'enemy') {
				this.scoreUp()
			}
		})
	}
}
