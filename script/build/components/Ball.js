'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Ball = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('./Component.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ball = exports.Ball = function (_Component) {
	_inherits(Ball, _Component);

	function Ball(color, radius, posX, posY, speedX, speedY) {
		_classCallCheck(this, Ball);

		var _this = _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this));

		_this._color = color;
		_this._radius = radius;
		_this._posX = posX;
		_this._posY = posY;
		_this._speedX = speedX;
		_this._speedY = speedY;
		_this._initialPos = { x: posX, y: posY };
		return _this;
	}

	_createClass(Ball, [{
		key: 'reflect',
		value: function reflect(axis) {
			if (axis == 'y') {
				this._speedY = -this._speedY;
			} else if (axis == 'x') {
				this._speedX = -this._speedX;
			}
		}
	}, {
		key: 'reset',
		value: function reset() {
			this._posX = this._initialPos.x;
			this._posY = this._initialPos.y;
		}
	}, {
		key: 'update',
		value: function update(context) {
			this._posX += this._speedX;
			this._posY += this._speedY;

			this._notify('move');
		}
	}, {
		key: 'draw',
		value: function draw(context) {
			context.fillStyle = this._color;
			context.beginPath();
			context.arc(this._posX, this._posY, this._radius, 0, 2 * Math.PI);
			context.fill();
		}
	}, {
		key: 'posX',
		get: function get() {
			return this._posX + 0;
		}
	}, {
		key: 'posY',
		get: function get() {
			return this._posY + 0;
		}
	}, {
		key: 'speedX',
		get: function get() {
			return this._speedX + 0;
		}
	}, {
		key: 'radius',
		get: function get() {
			return this._radius + 0;
		}
	}]);

	return Ball;
}(_Component2.Component);
//# sourceMappingURL=Ball.js.map