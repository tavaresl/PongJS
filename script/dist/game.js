System.register("interfaces/Observable", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("interfaces/Drawable", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Game", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Game;
    return {
        setters: [],
        execute: function () {
            Game = (function () {
                function Game(canvas) {
                    this._canvas = canvas;
                    this._context = this._canvas.getContext('2d');
                }
                Object.defineProperty(Game.prototype, "context", {
                    get: function () {
                        return this._context;
                    },
                    enumerable: true,
                    configurable: true
                });
                Game.prototype.subscribe = function (event, callback) {
                    this._observers.push([event, callback]);
                };
                Game.prototype.unsubscribe = function (event, callback) {
                };
                Game.prototype.notify = function (event) {
                    var _this = this;
                    this._observers.filter(function (observer) { return observer[0] == event; })
                        .forEach(function (observer) { return observer[1](_this._context); });
                };
                Game.prototype.update = function () {
                    this.notify('update');
                    this.draw();
                };
                Game.prototype.draw = function () {
                    this.notify('draw');
                    window.requestAnimationFrame(this.update);
                };
                Game.prototype.init = function () {
                    window.requestAnimationFrame(this.update);
                };
                return Game;
            }());
            exports_3("Game", Game);
        }
    };
});
System.register("components/Ball", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Ball;
    return {
        setters: [],
        execute: function () {
            Ball = (function () {
                function Ball(color, radius, posX, posY, speedX, speedY) {
                    this._color = color;
                    this._radius = radius;
                    this._posX = posX;
                    this._posY = posY;
                    this._speedX = speedX;
                    this._speedY = speedY;
                }
                Ball.prototype.subscribe = function (event, callback) {
                    this._observers.push([event, callback]);
                };
                Ball.prototype.unsubscribe = function (event, callback) {
                    this._observers = this._observers.filter(function (observer) {
                        return observer[0] != event && observer[1] != callback;
                    });
                };
                Ball.prototype.notify = function (event) {
                    var _this = this;
                    this._observers
                        .filter(function (observer) { return observer[0] == event; })
                        .forEach(function (observer) { return observer[1](_this); });
                };
                Ball.prototype.update = function () {
                    this._posX += this._speedX;
                    this._posY += this._speedY;
                };
                Ball.prototype.draw = function (context) {
                    context.fillStyle = this._color;
                    context.arc(this._posX, this._posY, this._radius, 0, 2 * Math.PI);
                    context.fill();
                };
                Ball.prototype.init = function (game) {
                    game.subscribe('update', this.update);
                    game.subscribe('draw', this.draw);
                };
                return Ball;
            }());
            exports_4("Ball", Ball);
        }
    };
});
System.register("components/Paddle", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
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
                Paddle.prototype.moveUp = function () {
                    this._movingUp = true;
                };
                Paddle.prototype.moveDown = function () {
                    this._movingDown = true;
                };
                Paddle.prototype.stopMovingUp = function () {
                    this._movingUp = false;
                };
                Paddle.prototype.stopMovingDown = function () {
                    this._movingDown = false;
                };
                Paddle.prototype.translate = function () {
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
                Paddle.prototype.init = function (game) {
                    game.subscribe('draw', this.draw);
                };
                return Paddle;
            }());
            exports_5("Paddle", Paddle);
        }
    };
});
System.register("interfaces/Playable", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("interfaces/Scoreable", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("components/Player", ["components/Paddle"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var Paddle_1, Player;
    return {
        setters: [
            function (Paddle_1_1) {
                Paddle_1 = Paddle_1_1;
            }
        ],
        execute: function () {
            Player = (function () {
                function Player(width, height, color, posX, posY, speed) {
                    this._paddle = new Paddle_1.Paddle(width, height, color, posX, posY, speed);
                    this._score = 0;
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
                    var _this = this;
                    document.addEventListener('keydown', function (key) {
                        if (key.keyCode == 38) {
                            _this._paddle.moveUp();
                        }
                        else if (key.keyCode == 40) {
                        }
                    });
                };
                return Player;
            }());
            exports_8("Player", Player);
        }
    };
});
System.register("components/World", [], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var World;
    return {
        setters: [],
        execute: function () {
            World = (function () {
                function World(color) {
                    this._color = color;
                }
                World.prototype.draw = function (context) {
                    context.fillStyle = this._color;
                    context.rect(0, 0, context.canvas.width, context.canvas.height);
                    context.fill();
                };
                World.prototype.init = function (game) {
                    game.subscribe('draw', this.draw);
                };
                return World;
            }());
            exports_9("World", World);
        }
    };
});
System.register("main", ["Game", "components/World", "components/Ball"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var Game_1, World_1, Ball_1, game, world, ball;
    return {
        setters: [
            function (Game_1_1) {
                Game_1 = Game_1_1;
            },
            function (World_1_1) {
                World_1 = World_1_1;
            },
            function (Ball_1_1) {
                Ball_1 = Ball_1_1;
            }
        ],
        execute: function () {
            game = new Game_1.Game(document.querySelector('gameCanvas'));
            world = new World_1.World('#000');
            ball = new Ball_1.Ball("white", 2, game.context.canvas.width / 2, game.context.canvas.height / 2, 5, 5);
            world.init(game);
            ball.init(game);
            game.init();
        }
    };
});
//# sourceMappingURL=game.js.map