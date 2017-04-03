'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('./Component.js');

var _Paddle = require('./Paddle.js');

var _Score = require('./Score.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = exports.Player = function (_Component) {
	_inherits(Player, _Component);

	function Player(name, width, height, color, paddlePosX, paddlePosY, speed, scorePosX, scorePosY) {
		_classCallCheck(this, Player);

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

		_this._name = name;
		_this._paddle = new _Paddle.Paddle(width, height, color, paddlePosX, paddlePosY, speed);
		_this._score = new _Score.Score(0, scorePosX, scorePosY);
		return _this;
	}

	_createClass(Player, [{
		key: 'scoreUp',
		value: function scoreUp() {
			this._score.scoreUp();
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
		key: 'stop',
		value: function stop() {
			this._paddle.stop();
		}
	}, {
		key: 'draw',
		value: function draw(context) {
			this._paddle.draw(context);
			this._score.draw(context);
		}
	}, {
		key: 'update',
		value: function update(context) {
			this._paddle.update(context);
			this._score.update(context);
		}
	}, {
		key: 'init',
		value: function init() {}
	}, {
		key: 'name',
		get: function get() {
			return this._name + '';
		}
	}, {
		key: 'score',
		get: function get() {
			return this._score;
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