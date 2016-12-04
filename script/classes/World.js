"use strict";

class World {
	constructor() {
		this.width;
		this.height;
		this.bgColor;
	}

	get width() {
		return this.width;
	}

	get height() {
		return this.height;
	}

	get bgColor() {
		return this.bgColor;
	}

	

	set width(w) {
		this.width = w;
	}

	set height(h) {
		this.height = h;
	}

	set bgColor(c) {
		this.bgColor = c;
	}

	draw(context) {
		context.beginPath();
		context.fillStyle = this.bgColor;
		context.rect(0, 0, this.width, this.height);
		context.fill();
	}

	drawEverything(context, player, enemy, ball) {
		this.draw(context);
		player.draw(context);
		enemy.draw(context);
		ball.draw(context);
	}
}