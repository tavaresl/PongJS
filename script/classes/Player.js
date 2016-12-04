"use strict";

class Player extends Paddle {
	constructor() {
		super(width,height,color,posX,posY,movingUp,movingDown);
	}

	requestMove(keyCode) {
		if (keyCode == "38" && !this.movingDown)
			this.movingUp = true;
		else if (keyCode == "40" && !this.movingUp)
			this.movingDown == true;
		else 
			return false
	}

	requestStop(keyCode) {
		if (keyCode == "38")
			this.movingUp = false;
		else if (keyCode == "40")
			this.movingDown == false;
		else
			return false;
	}
}