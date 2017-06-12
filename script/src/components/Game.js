import { World } 	   from './World.js'
import { Ball } 	   from './Ball.js'
import { LocalPlayer } from './LocalPlayer.js'
import { EnemyPlayer } from './EnemyPlayer.js'

export class Game {
	constructor(canvas) {
		this._canvas = document.querySelector('#' + canvas)
		this.context = this._canvas.getContext('2d')
		this._state = 0
		this._winner = {}
	}

	_update() {
		if (this._state == 0) {
			this._world.update(this.context)
			this._draw()	
		} else if (this._state == 2) {
			this._showWinner(this._winner)
		}
	}

	_draw() {
		this._world.draw(this.context)
		window.requestAnimationFrame(this._update.bind(this))
	}

	_stop() {
		this._world.stop()
	}

	_showWinner(winner) {
		const CENTER_X  = this._canvas.width/2
		const WINNER_TEXT = `The winner is ${winner.name}!`

		this.context.beginPath()
		this.context.font = '36px Arial'
		this.context.textAlign = 'center'
		this.context.fillStyle = '#fff'
		this.context.fillText(WINNER_TEXT, CENTER_X, 150)
	}

	checkWinner(player) {
		if (player.score.points == 10) {
			this._state = 2
			this._stop()
			this._winner = player
		}
	}

	start() {
		const WIDTH  = this._canvas.width
		const HEIGHT = this._canvas.height

		let ball   = new Ball('white', 4, WIDTH/2, HEIGHT/2, 5, 5.5)
		let player = new LocalPlayer(10, 100, 'white', 0, HEIGHT/2 - 50, 5)
		let enemy  = new EnemyPlayer(10, 100, 'white', WIDTH - 10, HEIGHT/2 -50, 5)

		this._world        = new World('black', WIDTH, HEIGHT)
		this._world.player = player
		this._world.enemy  = enemy
		this._world.ball   = ball
		this._world.init()

		this._world.subscribe('score', this.checkWinner.bind(this))

		window.requestAnimationFrame(this._update.bind(this))
	}
}
