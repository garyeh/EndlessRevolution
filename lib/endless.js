const Board = require("./board");
const Game = require("./game");
const Logic = require("./logic");

document.addEventListener("DOMContentLoaded", function () {

  const stage = new createjs.Stage("canvas");
  let speed = 7;
  const board = new Board(stage);
  board.draw();
  stage.update();

  var audio = document.getElementById("song");
  audio.volume = 0.1;

  const game = new Game(stage);
  const logic = new Logic();
  game.play(speed);

  function handleKey(e) {
    switch (e.which) {
      case 97:
        logic.check(game.LeftArrows);
        break;
      case 119:
        logic.check(game.DownArrows);
        break;
      case 115:
        logic.check(game.UpArrows);
        break;
      case 100:
        logic.check(game.RightArrows);
        break;
    }
  }

  document.addEventListener("keypress", handleKey, false);
});
