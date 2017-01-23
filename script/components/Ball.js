class Ball extends Component {
    constructor(color, radius, posX, posY, speedX, speedY, game) {
        super()
        this._color  = color
        this._radius = radius
        this._posX   = posX
        this._posY   = posY
        this._speedX = speedX
        this._speedY = speedY

        this._init(game)
    }

    _hasHitWall(context) {
        return this._posY >= context.canvas.height || this._posY <= 0
    }

    _hasHitGoal(context) {
        return this._posX >= context.canvas.width || this._posX <= 0
    }

    update(context) {
        this._posX += this._speedX;
        this._posY += this._speedY;

        if (this._hasHitWall(context)) {
            this._speedY = -this._speedY
        }

        if (this._hasHitGoal(context)) {
            this._speedX = -this._speedX
        }
    }

    draw(context) {
        context.fillStyle = this._color
        context.beginPath()
        context.arc(this._posX, this._posY, this._radius, 0, 2 * Math.PI)
        context.fill()
    }

    _init() {
        game.subscribe('update', this.update.bind(this))
        game.subscribe('draw', this.draw.bind(this))
    }
}
