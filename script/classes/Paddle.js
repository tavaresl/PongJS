"use strict";

class Paddle {
	constructor() {
		this.width;
		this.height;
		this.color;
		this.posX;
		this.posY;
		this.speed = 5;
		this.movingUp = false;
		this.movingDown = false;
	}

	get width() {
		return this.width;
	}

	get height() {
		return this.height;
	}

	get color() {
		return this.color;
	}

	get posX() {
		return this.posX;
	}

	get posY() {
		return this.posY;
	}

	get movingUp() {
		return this.movingUp;
	}

	get movingDown() {
		return this.movingUp;
	}



	set width(w) {
		this.width = w;
	}

	set height(h) {
		this.height = h;
	}

	set color(c) {
		this.color = c;
	}

	set posX(x) {
		this.posX = x;
	}

	set posY(y) {
		this.posY = y;
	}

	set movingUp(m) {
		this.movingUp = m;
	}

	set movingDown(m) {
		this.movingUp = m;
	}

	move(d) {
		if (this.movingUp)
			this.posY -= this.speed;
		else if (this.movingDown)
			this.posY += this.speed;
		else
			this.posY = this.posY;
	}

	draw(context) {
		context.beginPath();
		context.rect(this.posX, this.posY, this.width, this.height);
		context.fillStyle = this.color;
		context.fill();
	}
}