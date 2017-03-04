'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EnemyPlayer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Player2 = require('./Player.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnemyPlayer = exports.EnemyPlayer = function (_Player) {
	_inherits(EnemyPlayer, _Player);

	function EnemyPlayer(width, height, color, posX, posY, speed) {
		_classCallCheck(this, EnemyPlayer);

		return _possibleConstructorReturn(this, (EnemyPlayer.__proto__ || Object.getPrototypeOf(EnemyPlayer)).call(this, width, height, color, posX, posY, speed));
	}

	_createClass(EnemyPlayer, [{
		key: 'chase',
		value: function chase(ball) {
			if (ball.posY <= this.paddle.posY + 0.25 * this.paddle.height) {
				this.paddle.stopMovingDown();
				this.paddle.moveUp();
			} else if (ball.posY >= this.paddle.posY + 0.75 * this.paddle.height) {
				this.paddle.stopMovingUp();
				this.paddle.moveDown();
			}
		}
	}, {
		key: 'stopChasing',
		value: function stopChasing() {
			this.paddle.stopMovingUp();
			this.paddle.stopMovingDown();
		}
	}]);

	return EnemyPlayer;
}(_Player2.Player);
//# sourceMappingURL=EnemyPlayer.js.map