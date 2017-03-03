"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = function () {
	function Paddle(width, height, color, posX, posY, speed) {
		_classCallCheck(this, Paddle);

		this._width = width;
		this._height = height;
		this._color = color;
		this._posX = posX;
		this._posY = posY;
		this._speed = speed;
		this._movingDown = false;
		this._movingUp = false;
	}

	_createClass(Paddle, [{
		key: "moveUp",
		value: function moveUp() {
			this._movingUp = true;
		}
	}, {
		key: "moveDown",
		value: function moveDown() {
			this._movingDown = true;
		}
	}, {
		key: "stopMovingUp",
		value: function stopMovingUp() {
			this._movingUp = false;
		}
	}, {
		key: "stopMovingDown",
		value: function stopMovingDown() {
			this._movingDown = false;
		}
	}, {
		key: "update",
		value: function update(context) {
			if (this.isMovingDown && !this.isMovingUp) {
				this._posY += this._speed;
			} else if (this.isMovingUp && !this.isMovingDown) {
				this._posY -= this._speed;
			}
		}
	}, {
		key: "draw",
		value: function draw(context) {
			context.fillStyle = this._color;
			context.fillRect(this._posX, this._posY, this._width, this._height);
		}
	}, {
		key: "isMovingUp",
		get: function get() {
			return this._movingUp == true;
		}
	}, {
		key: "isMovingDown",
		get: function get() {
			return this._movingDown == true;
		}
	}, {
		key: "width",
		get: function get() {
			return this._width + 0;
		}
	}, {
		key: "height",
		get: function get() {
			return this._height + 0;
		}
	}, {
		key: "posX",
		get: function get() {
			return this._posX + 0;
		}
	}, {
		key: "posY",
		get: function get() {
			return this._posY + 0;
		}
	}]);

	return Paddle;
}();
//# sourceMappingURL=Paddle.js.map