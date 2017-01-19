import { Observable } from "../interfaces/Observable"
import { Drawable }   from "../interfaces/Drawable"
import { Game }     from '../Game'

export class Ball implements Observable, Drawable {
    private _color: string
    private _radius: number
    private _posX: number
    private _posY: number
    private _speedX: number
    private _speedY: number
    private _observers: Array<[string, Function]>;

    constructor(color: string, radius: number, posX: number, posY: number,
        speedX: number, speedY: number) {
            this._color  = color
            this._radius = radius
            this._posX   = posX
            this._posY   = posY
            this._speedX = speedX
            this._speedY = speedY
    }

    subscribe(event: string, callback: Function) {
        this._observers.push([event, callback])
    }

    unsubscribe(event: string, callback: Function) {
        this._observers = this._observers.filter(observer => 
            observer[0] != event && observer[1] != callback)
    }

    notify(event: string) {
        this._observers
                .filter(observer => observer[0] == event)
                .forEach(observer => observer[1](this))
    }

    update() {
        this._posX += this._speedX;
        this._posY += this._speedY;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this._color
        context.arc(this._posX, this._posY, this._radius, 0, 2 * Math.PI)
        context.fill()
    }

    init(game: Game) {
        game.subscribe('update', this.update)
        game.subscribe('draw', this.draw)
    }
}