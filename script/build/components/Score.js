'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Score = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('./Component.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = exports.Score = function (_Component) {
	_inherits(Score, _Component);

	function Score(score, posX, posY) {
		_classCallCheck(this, Score);

		var _this = _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this));

		_this._score = score;
		_this._posX = posX;
		_this._posY = posY;
		_this._multiplier = 1;
		return _this;
	}

	_createClass(Score, [{
		key: 'scoreUp',
		value: function scoreUp() {
			this._score += 1 * this._multiplier;
		}
	}, {
		key: 'draw',
		value: function draw(context) {
			context.font = '16px Arial';
			context.fillStyle = 'white';
			context.fillText(this._score.toString(), this._posX, this._posY);
		}
	}, {
		key: 'update',
		value: function update(context) {}
	}, {
		key: 'init',
		value: function init() {}
	}, {
		key: 'points',
		get: function get() {
			return this._score + 0;
		}
	}, {
		key: 'multiplier',
		get: function get() {
			return this._multiplier + 0;
		},
		set: function set(multiplier) {
			this._multiplier = multiplier;
		}
	}]);

	return Score;
}(_Component2.Component);
//# sourceMappingURL=Score.js.map