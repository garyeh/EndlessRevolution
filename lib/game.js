const Arrow = require("./arrow");

class Game {
  constructor(stage) {
    this.stage = stage;
    this.currentLeftArrows = [];
    this.currentDownArrows = [];
    this.currentUpArrows = [];
    this.currentRightArrows = [];
    this.play = this.play.bind(this);
  }

  checkLeft() {
    if (this.currentLeftArrows[0] &&
      this.currentLeftArrows[0].y < 40 && this.currentLeftArrows[0].y > 10) {
      console.log("Hit!");
    } else {
      console.log("miss!");
    }
  }

  play(speed) {
    let that = this;

    let myInt = setInterval( randomGen, 5000 / 3 / speed );
    createjs.Ticker.setFPS(30);

    const createLeftArrow = () => {
      let leftMovingArrow = new Arrow.leftMovingArrow();
      that.currentLeftArrows.push(leftMovingArrow);
      that.stage.addChild(leftMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", leftTick.bind(that));
      function leftTick(event) {
        leftMovingArrow.y = leftMovingArrow.y - speed;
        if (that.currentLeftArrows.length !== 0 && that.currentLeftArrows[0].y < -20) {
          that.stage.removeChild(that.currentLeftArrows[0]);
          that.currentLeftArrows.shift();
        }
        that.stage.update(event);
      }
    };

    const createDownArrow = () => {
      let downMovingArrow = new Arrow.downMovingArrow();
      that.currentDownArrows.push(downMovingArrow);
      that.stage.addChild(downMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", downTick.bind(that));
      function downTick(event) {
        downMovingArrow.y = downMovingArrow.y - speed;
        if (that.currentDownArrows.length !== 0 && that.currentDownArrows[0].y < -20) {
          that.stage.removeChild(that.currentDownArrows[0]);
          that.currentDownArrows.shift();
        }
        that.stage.update(event);
      }
    };

    const createUpArrow = () => {
      let upMovingArrow = new Arrow.upMovingArrow();
      that.currentUpArrows.push(upMovingArrow);
      that.stage.addChild(upMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", upTick.bind(that));
      function upTick(event) {
        upMovingArrow.y = upMovingArrow.y - speed;
        if (that.currentUpArrows.length !== 0 && that.currentUpArrows[0].y < -20) {
          that.stage.removeChild(that.currentUpArrows[0]);
          that.currentUpArrows.shift();
        }
        that.stage.update(event);
      }
    };

    const createRightArrow = () => {
      let rightMovingArrow = new Arrow.rightMovingArrow();
      that.currentRightArrows.push(rightMovingArrow);
      that.stage.addChild(rightMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", rightTick.bind(that));
      function rightTick(event) {
        rightMovingArrow.y = rightMovingArrow.y - speed;
        if (that.currentRightArrows.length !== 0 && that.currentRightArrows[0].y < -20) {
          that.stage.removeChild(that.currentRightArrows[0]);
          that.currentRightArrows.shift();
        }
        that.stage.update(event);
      }
    };

    function randomGen() {
      let randArrow = Math.floor(Math.random() * 4) + 1;
      let randDouble = Math.random() * 100 + 1;
      // if (randDouble > 80) {
      //   randArrow = Math.floor(Math.random() * 6) + 5;
      // }

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
