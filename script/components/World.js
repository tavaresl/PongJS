class World {
    constructor(color, game) {
        this._color = color

        this._init(game)
    }

    draw(context) {
        context.fillStyle = this._color
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }

    _init() {
        game.subscribe('draw', this.draw.bind(this))
    }
}
