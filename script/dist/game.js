var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("components/Paddle", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Paddle;
    return {
        setters: [],
        execute: function () {
            Paddle = (function () {
                function Paddle(width, height, color, posX, posY, speed) {
                    this._width = width;
                    this._height = height;
                    this._color = color;
                    this._posX = posX;
                    this._posY = posY;
                    this._speed = speed;
                    this._movingDown = false;
                    this._movingUp = false;
                }
                Object.defineProperty(Paddle.prototype, "isMovingUp", {
                    get: function () {
                        return this._movingUp == true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paddle.prototype, "isMovingDown", {
                    get: function () {
                        return this._movingDown == true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Paddle.prototype.move = function () {
                    if (this.isMovingDown && !this.isMovingUp) {
                        this._posY += this._speed;
                    }
                    else if (this.isMovingUp && !this.isMovingDown) {
                        this._posY -= this._speed;
                    }
                };
                Paddle.prototype.draw = function (context) {
                    context.beginPath();
                    context.rect(this._posX, this._posY, this._width, this._height);
                    context.fillStyle = this._color;
                    context.fill();
                };
                return Paddle;
            }());
            exports_1("Paddle", Paddle);
        }
    };
});
System.register("interfaces/Playable", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("components/Player", ["components/Paddle"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Paddle_1, Player;
    return {
        setters: [
            function (Paddle_1_1) {
                Paddle_1 = Paddle_1_1;
            }
        ],
        execute: function () {
            Player = (function (_super) {
                __extends(Player, _super);
                function Player(width, height, color, posX, posY, speed) {
                    var _this = _super.call(this, width, height, color, posX, posY, speed) || this;
                    _this._score = 0;
                    return _this;
                }
                Object.defineProperty(Player.prototype, "score", {
                    get: function () {
                        return this._score + 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Player.prototype.scoreUp = function (score) {
                    this._score += score;
                };
                Player.prototype.scoreDown = function (score) {
                    this._score -= score;
                };
                Player.prototype.listenToMoveKeys = function () {
                    document.addEventListener('keydown', function (key) {
                        if (key.keyCode == 38) {
                        }
                        else if (key.keyCode == 40) {
                        }
                    });
                };
                return Player;
            }(Paddle_1.Paddle));
            exports_3("Player", Player);
        }
    };
});
//# sourceMappingURL=game.js.map