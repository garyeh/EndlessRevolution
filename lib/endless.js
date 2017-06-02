import Board from "./board";
import Game from "./game";

document.addEventListener("DOMContentLoaded", function () {

  const stage = new createjs.Stage("canvas");
  const board = new Board(stage);
  board.draw();
  stage.update();

  const game = new Game(stage);

  function handleKey(e) {
    switch (e.keyCode) {
      case 97:
        game.check(game.LeftArrows, "left");
        break;
      case 115:
        game.check(game.DownArrows, "down");
        break;
      case 119:
        game.check(game.UpArrows, "up");
        break;
      case 100:
        game.check(game.RightArrows, "right");
        break;
    }
  }
  document.getElementById("light").addEventListener("click", () => {
    game.play(3.5);
  });
  document.getElementById("standard").addEventListener("click", () => {
    game.play(7);
  });
  document.getElementById("heavy").addEventListener("click", () => {
    game.play(8.75);
  });

  document.addEventListener("keypress", handleKey, false);
});
