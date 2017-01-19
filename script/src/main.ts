import { Game }  from 'Game'
import { World } from 'components/World'
import { Ball }  from 'components/Ball'

let game  = new Game(<HTMLCanvasElement>document.querySelector('gameCanvas'));
let world = new World('#000')
let ball  = new Ball("white", 2,game.context.canvas.width/2,
						game.context.canvas.height/2, 5, 5)

world.init(game)
ball.init(game)
game.init()
