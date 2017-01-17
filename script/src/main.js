"use strict";

var game;
var world;
var ball;
var player;
var enemy;

window.onload = function () {
	game = new Game();
	game.canvas = document.getElementById("gameCanvas");
	game.context = game.canvas.getContext("2d");
	game.status = 1;
	game.fps = 15;

	world = new World();
	world.width = parseInt(game.canvas.getAttribute("width"));
	world.height = parseInt(game.canvas.getAttribute("height"));
	world.bgColor = "black";
	
	player = new Paddle();
	player.width = 10;
	player.height = 100;
	player.color = "white";
	player.posX = 0;
	player.posY = world.height/2 - player.height/2;

	enemy = new Paddle();
	enemy.width = 10;
	enemy.height = 100;
	enemy.color = "white";
	enemy.posX = world.width - enemy.width;
	enemy.posY = world.height/2 - enemy.height/2;

	ball = new Ball();
	ball.radius = 2.5;
	ball.color = "white";
	ball.posX = world.width/2;
	ball.posY = world.height/2;
	ball.speedX = 0.5;
	ball.speedY = 0.5;

	game.start(world, player, enemy, ball);

	window.addEventListener("keydown", function(key) {
		player.requestMove(key.keyCode);
	});

	window.addEventListener("keyup", function(key) {
		player.requestStop(key.keyCode);
	});
}