class EnemyPlayer extends Player {
    constructor(width, height, color, posX, posY, speed) {
		super(width, height, color, posX, posY, speed)
	}

	chase(ball) {
		if (ball.posY <= this.paddle.posY + 0.25 * this.paddle.height) {
			this.paddle.stopMovingDown()
			this.paddle.moveUp()
		}
		else if(ball.posY >= this.paddle.posY + 0.75 * this.paddle.height) {
			this.paddle.stopMovingUp()
			this.paddle.moveDown()
		}
	}

	stopChasing() {
		this.paddle.stopMovingUp()
		this.paddle.stopMovingDown()
	}
}