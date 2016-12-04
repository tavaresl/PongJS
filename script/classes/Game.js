"use strict";


class Game {
	constructor() {
		this.canvas;
		this.gameContext;
		this.status;
		this.fps;
	}

	get canvas() {
		return this.canvas;
	}

	get gameContext() {
		return this.gameContext;
	}

	get status() {
		return this.status;
	}

	get fps() {
		return this.fps
	}



	set canvas(cv) {
		this.canvas = cv;
	}

	set gameContext(cx) {
		this.gameContext = cx;
	}

	set status(s) {
		this.status = s;
	}

	set fps(r) {
		this.fps = r;
	}

	start(world, player, enemy, ball) {
		window.setInterval(function() {
			world.drawEverything(this.context, player, enemy, ball);
			ball.move(world);
			player.move();
		}, 1/this.fps);	
	}
}