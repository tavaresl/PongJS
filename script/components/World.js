class World {
    constructor(color, width, height, game) {
        this._color    = color
        this._width    = width
        this._height   = height
        this._player   = {}
        this._enemy    = {}
        this._powerUps = []
    }

    set ball(ball)     { this._ball = ball }
    set player(player) { this._player = player }
    set enemy(enemy)   { this._enemy = enemy }

    _checkCollision() {
        if (this._ball.posY <= 0 || this._ball.posY >= this._height) {
            this._ball.reflect('y')
        }
    }

    update(context) {
        this._ball.update()
        this._player.update()
    }

    draw(context) {
        context.fillStyle = this._color
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        this._ball.draw(context)
        this._player.draw(context)
    }

    init() {
        this._player.subscribe('block', this._ball.reflect.bind(this._ball))
        this._ball.subscribe('move', this._checkCollision.bind(this))
    }
}
