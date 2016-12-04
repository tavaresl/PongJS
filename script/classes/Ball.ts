class Ball {
	private radius :number;
	private color :string;
	private posX :number;
	private posY :number;
	private speedX :number;
	private speedY :number;

	constructor(radius:number, color:string, posX:number, posY:number,
		speedX:number, speedY:number) {
			this.radius = radius;
			this.color = color;
			this.posX = posX;
			this.posY = posY;
			this.speedX = speedX;
			this.speedY = speedY;
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
