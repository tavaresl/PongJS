import { Drawable } from "../interfaces/Drawable"
import { Game }     from '../Game'

export class Paddle implements Drawable {
	private _width: number
	private _height: number
	private _color: string
	private _posX: number
	private _posY: number
	private _speed: number
	private _movingUp: boolean
	private _movingDown: boolean

	constructor(width: number, height: number, color: string, posX: number,
		posY: number, speed: number) {
			this._width   	 = width
			this._height 	 = height
			this._color  	 = color
			this._posX   	 = posX
			this._posY   	 = posY
			this._speed 	 = speed
			this._movingDown = false
			this._movingUp   = false
	}

	get isMovingUp() : boolean {
		return this._movingUp == true
	}

	get isMovingDown() : boolean {
		return this._movingDown == true
	}

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

	translate() {
		if (this.isMovingDown && !this.isMovingUp) {
			this._posY += this._speed
		}
		else if (this.isMovingUp && !this.isMovingDown) {
			this._posY -= this._speed
		}
	}

	draw(context: CanvasRenderingContext2D) {
		context.beginPath();
		context.rect(this._posX, this._posY, this._width, this._height);
		context.fillStyle = this._color;
		context.fill();
	}

	init(game: Game) {
		game.subscribe('draw', this.draw)
	}
}