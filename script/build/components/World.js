'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var World = function () {
	function World(color, width, height, game) {
		_classCallCheck(this, World);

		this._color = color;
		this._width = width;
		this._height = height;
		this._player = {};
		this._ball = {};
		this._enemy = {};
		this._powerUps = [];
	}

	_createClass(World, [{
		key: '_checkCollision',
		value: function _checkCollision() {
			if (this._ball.posY <= 0 || this._ball.posY >= this._height) {
				this._ball.reflect('y');
			}

			if (this._ball.posX >= 10 && this._ball.posX <= this._width - 10) {
				return;
			}

			if (this._player.hasBlocked(this._ball)) {
				this._player.scoreUp();
			} else if (this._enemy.hasBlocked(this._ball)) {
				this._enemy.scoreUp();
			} else {
				this._ball.reset();
			}

			this._ball.reflect('x');
		}
	}, {
		key: 'update',
		value: function update(context) {
			this._ball.update(context);
			this._player.update(context);
			this._enemy.update(context);

			console.log('ball speed', this._ball.speedX);

			if (this._ball.speedX > 0) {
				this._enemy.chase(this._ball);
			} else {
				this._enemy.stopChasing();
			}
		}
	}, {
		key: 'draw',
		value: function draw(context) {
			context.fillStyle = this._color;
			context.fillRect(0, 0, context.canvas.width, context.canvas.height);

			this._ball.draw(context);
			this._player.draw(context);
			this._enemy.draw(context);
		}
	}, {
		key: 'init',
		value: function init() {
			this._ball.subscribe('move', this._checkCollision.bind(this));
		}
	}, {
		key: 'ball',
		set: function set(ball) {
			this._ball = ball;
		}
	}, {
		key: 'player',
		set: function set(player) {
			this._player = player;
		}
	}, {
		key: 'enemy',
		set: function set(enemy) {
			this._enemy = enemy;
		}
	}]);

	return World;
}();
//# sourceMappingURL=World.js.map