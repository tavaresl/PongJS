class Playable extends Player {
	constructor(width, height, color, posX, posY, speed, ball) {
		super(width, height, color, posX, posY, speed)
		this.init(window.document)
	}

	update(context) {
		this.paddle.update(context)
	}

	draw(context) {
		this.paddle.draw(context)
	}

	init(document) {
		document.addEventListener('keydown', key => {
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
	}
}
