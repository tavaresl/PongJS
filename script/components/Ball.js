class Ball extends Component {
    constructor(color, radius, posX, posY, speedX, speedY) {
        super()
        this._color  = color
        this._radius = radius
        this._posX   = posX
        this._posY   = posY
        this._speedX = speedX
        this._speedY = speedY
    }

    get posX() { return this._posX + 0 }
    get posY() { return this._posY + 0 }

    _hasHitWall(context) {
        return this._posY >= context.canvas.height || this._posY <= 0
    }

    _hasHitGoal(context) {
        return this._posX >= context.canvas.width || this._posX <= 0
    }

    reflect(axis) {
        if (axis == 'y') {
            this._speedY = -this._speedY
        }
    }

    update(context) {
        this._posX += this._speedX;
        this._posY += this._speedY;

        this._notify('move')
    }

    draw(context) {
        context.fillStyle = this._color
        context.beginPath()
        context.arc(this._posX, this._posY, this._radius, 0, 2 * Math.PI)
        context.fill()
    }

    init() {}
}
