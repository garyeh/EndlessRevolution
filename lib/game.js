const Circle = require("./arrow.js");

const circles = [];

class Game {
  constructor(ctx) {
    this.xDim = Game.DIM_X;
    this.yDim = Game.DIM_Y;
    this.ctx = ctx;
    for (let i = 0; i < Game.NUM_CIRCLES; ++i) {
      circles.push(
        Circle.randomCircle(Game.DIM_X, Game.DIM_Y, Game.NUM_CIRCLES)
      );
    }
  }

render() {
  //this will empty the canvas
  this.ctx.clearRect(0, 0, this.xDim, this.yDim);

  circles.forEach(circle => {
    circle.render(this.ctx);
  });
}

moveCircles() {
  circles.forEach(circle => {
    circle.moveRandom(this.xDim, this.yDim);
  });
}

start() {
  //this function will update the position of all the circles,
  //clear the canvas, and redraw them
  const animateCallback = () => {
    this.moveCircles();
    this.render(this.ctx);
    //this will call our animateCallback again, but only when the browser
    //is ready, usually every 1/60th of a second

    //if we didn't know about requestAnimationFrame, we could use setTimeout
    //setTimeout(animateCallback, 1000/60);
  };

  //this will cause the first render and start the endless triggering of
  //the function using requestAnimationFrame
    setInterval(() => animateCallback(), 20);
  }
}

Game.NUM_CIRCLES = 4000;
Game.MOVES = {
  "w": [ 0, -1],
  "a": [-1,  0],
  "s": [ 0,  1],
  "d": [ 1,  0],
};

Game.BG_COLOR = "#000000";
Game.DIM_X = window.innerWidth;
Game.DIM_Y = window.innerHeight;

module.exports = Game;
