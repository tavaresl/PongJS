"use strict";

class Ball {
	constructor() {
		this.radius;
		this.color;
		this.posX;
		this.posY;
		this.speedX;
		this.speedY;
	}

	get radius() {
		return this.radius;
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

	get speedX() {
		return this.speedX;	
	}

	get speedY() {
		return this.speedY;	
	}

	set radius(r) {
		this.radius = r;
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

	set speedX(sX) {
		this.speedX = sX;	
	}

	set speedY(sY) {
		this.speedY = sY;	
	}

	move(world) {
		this.verifyPosition(world);
		this.posX += this.speedX;
		this.posY += this.speedY;
	}

	verifyPosition(world) {
		if (this.posX <= 10 || this.posX >= world.width-10)
			this.speedX = -this.speedX;

		if (this.posY <= 0 || this.posY >= world.height)
			this.speedY = -this.speedY;
	}

	draw(context) {
		context.beginPath();
		context.arc(this.posX, this.posY, this.radius, 0, 2*Math.PI);
		context.fillStyle = this.bgColor;
		context.fill();
	}
}