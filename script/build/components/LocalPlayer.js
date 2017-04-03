'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LocalPlayer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Player2 = require('./Player.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocalPlayer = exports.LocalPlayer = function (_Player) {
	_inherits(LocalPlayer, _Player);

	function LocalPlayer(width, height, color, posX, posY, speed) {
		_classCallCheck(this, LocalPlayer);

		var _this = _possibleConstructorReturn(this, (LocalPlayer.__proto__ || Object.getPrototypeOf(LocalPlayer)).call(this, 'Player', width, height, color, posX, posY, speed, posX + 100, 100));

		_this.init(window.document);
		return _this;
	}

	_createClass(LocalPlayer, [{
		key: 'init',
		value: function init(document) {
			var _this2 = this;

			document.addEventListener('keydown', function (key) {
				if (key.keyCode == 38 || key.keyCode == 87) {
					_this2.paddle.moveUp();
				} else if (key.keyCode == 40 || key.keyCode == 83) {
					_this2.paddle.moveDown();
				}
			});

			document.addEventListener('keyup', function (key) {
				if (key.keyCode == 38 || key.keyCode == 87) {
					_this2.paddle.stopMovingUp();
				} else if (key.keyCode == 40 || key.keyCode == 83) {
					_this2.paddle.stopMovingDown();
				}
			});
		}
	}]);

	return LocalPlayer;
}(_Player2.Player);
//# sourceMappingURL=LocalPlayer.js.map