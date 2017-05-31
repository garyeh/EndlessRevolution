const Arrow = require("./arrow");

class Game {
  constructor(stage) {
    this.stage = stage;
    this.LeftArrows = [];
    this.DownArrows = [];
    this.UpArrows = [];
    this.RightArrows = [];
    this.play = this.play.bind(this);
  }

  play(speed) {
    let that = this;

    let myInt = setInterval( randomGen, 7000 / 3 / speed );
    let tick = createjs.Ticker
    tick.setFPS(30);

    const createLeftArrow = () => {
      let leftMovingArrow = new Arrow.leftMovingArrow();
      that.LeftArrows.push(leftMovingArrow);
      that.stage.addChild(leftMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", leftTick);

      function leftTick(event) {
        leftMovingArrow.y = leftMovingArrow.y - speed;
        if (that.LeftArrows[0] && that.LeftArrows[0].y < -20) {
          that.stage.removeChild(that.LeftArrows[0]);
          that.LeftArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    const createDownArrow = () => {
      let downMovingArrow = new Arrow.downMovingArrow();
      that.DownArrows.push(downMovingArrow);
      that.stage.addChild(downMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", downTick);

      function downTick(event) {
        downMovingArrow.y = downMovingArrow.y - speed;
        if (that.DownArrows[0] && that.DownArrows[0].y < -20) {
          that.stage.removeChild(that.DownArrows[0]);
          that.DownArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    const createUpArrow = () => {
      let upMovingArrow = new Arrow.upMovingArrow();
      that.UpArrows.push(upMovingArrow);
      that.stage.addChild(upMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", upTick);

      function upTick(event) {
        upMovingArrow.y = upMovingArrow.y - speed;
        if (that.UpArrows[0] && that.UpArrows[0].y < -20) {
          that.stage.removeChild(that.UpArrows[0]);
          that.UpArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    const createRightArrow = () => {
      let rightMovingArrow = new Arrow.rightMovingArrow();
      that.RightArrows.push(rightMovingArrow);
      that.stage.addChild(rightMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", rightTick);

      function rightTick(event) {
        rightMovingArrow.y = rightMovingArrow.y - speed;
        if (that.RightArrows[0] && that.RightArrows[0].y < -20) {
          that.stage.removeChild(that.RightArrows[0]);
          that.RightArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    function randomGen() {
      let randArrow = Math.floor(Math.random() * 4) + 1;
      let randDouble = Math.random() * 100 + 1;
      if (randDouble > 80) {
        randArrow = Math.floor(Math.random() * 6) + 5;
      }

      switch(randArrow) {
        case 1: createLeftArrow();  break;
        case 2: createDownArrow();  break;
        case 3: createUpArrow();    break;
        case 4: createRightArrow(); break;
        case 5:
          createLeftArrow();
          createDownArrow();
          break;
        case 6:
          createLeftArrow();
          createUpArrow();
          break;
        case 7:
          createLeftArrow();
          createRightArrow();
          break;
        case 8:
          createDownArrow();
          createUpArrow();
          break;
        case 9:
          createDownArrow();
          createRightArrow();
          break;
        case 10:
          createUpArrow();
          createRightArrow();
          break;
      }
    }
  }
}

module.exports = Game;
