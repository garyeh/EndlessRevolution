const Board = require("./board");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", function () {

  const stage = new createjs.Stage("canvas");
  let speed = 7;
  const board = new Board(stage);
  board.draw();
  stage.update();

  var audio = document.getElementById("song");
  audio.volume = 0.1;

  const game = new Game(stage);
  game.play(speed);

  function handleKey(e) {
    switch (e.which) {
      case 97:
        console.log("left");
        game.checkLeft();
        break;
      case 119:
        console.log("down");
        break;
      case 115:
        console.log("up");
        break;
      case 100:
        console.log("right");
        break;
    }
  }

  document.addEventListener("keypress", handleKey, false);
});
