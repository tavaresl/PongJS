class Game extends Component {
    constructor(canvas) {
        super()
        this._canvas = document.querySelector('#' + canvas)
        this._context = this._canvas.getContext('2d')
    }

    get context() {
        return this._context
    }

    _update() {
        this._notify('update', this._context)
        this._draw()
    }

    _draw() {
        this._notify('draw', this._context)
        window.requestAnimationFrame(this._update.bind(this))
    }

    start() {
        let world = new World('black', this)
        let ball = new Ball('white', 4, this._canvas.width/2, this._canvas.height/2,
                            5, 5, this)
        let player = new Playable(10, 100, 'white', 0, this._canvas.height/2 - 50,
                                    5, ball, this)
        window.requestAnimationFrame(this._update.bind(this))
    }
}
