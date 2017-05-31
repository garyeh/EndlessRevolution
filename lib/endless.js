const Gameview = require("./gameview");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", function () {

  const stage = new createjs.Stage("canvas");
  let speed = 5;
  const gameview = new Gameview(stage);
  gameview.draw();
  stage.update();

  var audio = document.getElementById("song");
  audio.volume = 0.1;

  const game = new Game(stage);
  game.play(speed);

  function handleKey(e) {
    e.preventDefault();
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
