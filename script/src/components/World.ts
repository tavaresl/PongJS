import { Drawable } from '../interfaces/Drawable'
import { Game }     from '../Game'

export class World implements Drawable {
    private _color: string
    private _width: number
    private _height: number

    constructor(color: string) {
        this._color = color
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this._color
        context.rect(0, 0, context.canvas.width, context.canvas.height)
        context.fill()
    }

    init(game: Game) {
        game.subscribe('draw', this.draw)
    }
}