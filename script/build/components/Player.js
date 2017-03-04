'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Player = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('./Component.js');

var _Paddle = require('./Paddle.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = exports.Player = function (_Component) {
	_inherits(Player, _Component);

	function Player(width, height, color, posX, posY, speed) {
		_classCallCheck(this, Player);

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

		_this._paddle = new _Paddle.Paddle(width, height, color, posX, posY, speed);
		_this._score = 0;
		return _this;
	}

	_createClass(Player, [{
		key: 'draw',
		value: function draw(context) {
			this.paddle.draw(context);
		}
	}, {
		key: 'update',
		value: function update(context) {
			this.paddle.update(context);
		}
	}, {
		key: 'scoreUp',
		value: function scoreUp(score) {
			if (!(typeof score === 'undefined' ? 'undefined' : _typeof(score)) == 'number') {
				throw new TypeError('score must be a number');
			}

			this._score += score;
		}
	}, {
		key: 'hasBlocked',
		value: function hasBlocked(ball) {
			if (ball.posY >= this._paddle.posY - 5 && ball.posY <= this._paddle.posY + this._paddle.height + 5 && ball.posX >= this._paddle.posX - 5 && ball.posX <= this._paddle.posX + this._paddle.width + 5) {
				return true;
			}

			return false;
		}
	}, {
		key: 'init',
		value: function init() {}
	}, {
		key: 'score',
		get: function get() {
			return this._score + 0;
		}
	}, {
		key: 'paddle',
		get: function get() {
			return this._paddle;
		}
	}]);

	return Player;
}(_Component2.Component);
//# sourceMappingURL=Player.js.map