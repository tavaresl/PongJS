var Ball = (function () {
    function Ball(radius, color, posX, posY, speedX, speedY) {
        this.radius = radius;
        this.color = color;
        this.posX = posX;
        this.posY = posY;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    Ball.prototype.move = function (world) {
        this.verifyPosition(world);
        this.posX += this.speedX;
        this.posY += this.speedY;
    };
    Ball.prototype.verifyPosition = function (world) {
        if (this.posX <= 10 || this.posX >= world.width - 10)
            this.speedX = -this.speedX;
        if (this.posY <= 0 || this.posY >= world.height)
            this.speedY = -this.speedY;
    };
    Ball.prototype.draw = function (context) {
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    };
    return Ball;
}());
