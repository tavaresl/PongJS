'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _World = require('./World.js');

var _Ball = require('./Ball.js');

var _LocalPlayer = require('./LocalPlayer.js');

var _EnemyPlayer = require('./EnemyPlayer.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
	function Game(canvas) {
		_classCallCheck(this, Game);

		this._canvas = document.querySelector('#' + canvas);
		this.context = this._canvas.getContext('2d');
	}

	_createClass(Game, [{
		key: '_update',
		value: function _update() {
			this._world.update(this.context);
			this._draw();
		}
	}, {
		key: '_draw',
		value: function _draw() {
			this._world.draw(this.context);
			window.requestAnimationFrame(this._update.bind(this));
		}
	}, {
		key: 'start',
		value: function start() {
			var WIDTH = this._canvas.width;
			var HEIGHT = this._canvas.height;

			var ball = new _Ball.Ball('white', 4, WIDTH / 2, HEIGHT / 2, 5, 5);
			var player = new _LocalPlayer.LocalPlayer(10, 100, 'white', 0, HEIGHT / 2 - 50, 5);
			var enemy = new _EnemyPlayer.EnemyPlayer(10, 100, 'white', WIDTH - 10, HEIGHT / 2 - 50, 5);

			this._world = new _World.World('black', WIDTH, HEIGHT);
			this._world.player = player;
			this._world.enemy = enemy;
			this._world.ball = ball;
			this._world.init();

			window.requestAnimationFrame(this._update.bind(this));
		}
	}]);

	return Game;
}();
//# sourceMappingURL=Game.js.map