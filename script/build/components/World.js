'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.World = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('./Component.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var World = exports.World = function (_Component) {
	_inherits(World, _Component);

	function World(color, width, height, game) {
		_classCallCheck(this, World);

		var _this = _possibleConstructorReturn(this, (World.__proto__ || Object.getPrototypeOf(World)).call(this));

		_this._color = color;
		_this._width = width;
		_this._height = height;
		_this._player = {};
		_this._ball = {};
		_this._enemy = {};
		_this._powerUps = [];
		return _this;
	}

	_createClass(World, [{
		key: 'stop',
		value: function stop() {
			this._ball.stop();
			this._enemy.stop();
			this._player.stop();
		}
	}, {
		key: '_checkCollision',
		value: function _checkCollision() {
			if (this._ball.posY <= 0 || this._ball.posY >= this._height) {
				this._ball.reflect('y');
			}

			if (this._ball.posX >= 10 && this._ball.posX <= this._width - 10) {
				return;
			}

			this._ball.reflect('x');

			if (this._ball.posX < 10 && !this._player.hasBlocked(this._ball)) {
				this._enemy.scoreUp();
				this._ball.reset();
				this._notify('score', this._enemy);
			} else if (this._ball.posX > this._width - 10 && !this._enemy.hasBlocked(this._ball)) {
				this._player.scoreUp();
				this._ball.reset();
				this._notify('score', this._player);
			}
		}
	}, {
		key: 'update',
		value: function update(context) {
			this._ball.update(context);
			this._player.update(context);
			this._enemy.update(context);

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

			context.beginPath();
			context.strokeStyle = '#ccc';
			context.moveTo(this._width / 2, 0);
			context.lineTo(this._width / 2, this._height);
			context.stroke();
			context.strokeStyle = '#000';

			context.beginPath();
			context.fillStyle = '#666';
			context.arc(this._width / 2, this._height / 2, 15, 0, 2 * Math.PI);
			context.fill();

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
}(_Component2.Component);
//# sourceMappingURL=World.js.map