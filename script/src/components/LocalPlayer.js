class LocalPlayer extends Player {
	constructor(width, height, color, posX, posY, speed) {
		super(width, height, color, posX, posY, speed)
		this.init(window.document)
	}

	init(document) {
		document.addEventListener('keydown', key => {
			if (key.keyCode == 38 || key.keyCode == 87) {
				this.paddle.moveUp()
			}
			else if (key.keyCode == 40 || key.keyCode == 83) {
				this.paddle.moveDown()
			}
		})

		document.addEventListener('keyup', key => {
			if (key.keyCode == 38 || key.keyCode == 87) {
				this.paddle.stopMovingUp()
			}
			else if (key.keyCode == 40 || key.keyCode == 83) {
				this.paddle.stopMovingDown()
			}
		})
	}
}
