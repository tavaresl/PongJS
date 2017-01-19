import { Observable } from "interfaces/Observable"

export class Game implements Observable {
    private _canvas: HTMLCanvasElement
    private _observers: Array<[string, Function]>
    private _context: CanvasRenderingContext2D

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas
        this._context = this._canvas.getContext('2d')
    }
    
    get context() {
        return this._context
    }

    subscribe(event: string, callback: Function) {
        this._observers.push([event, callback])
    }
    
    unsubscribe(event: string, callback: Function) {
        
    }

    notify(event: string) {
        this._observers.filter(observer => observer[0] == event)
                        .forEach(observer => observer[1](this._context))
    }

    update() {
        this.notify('update')
        this.draw()
    }

    draw() {
        this.notify('draw')
        window.requestAnimationFrame(this.update)
    }

    init() {
        window.requestAnimationFrame(this.update)
    }
}