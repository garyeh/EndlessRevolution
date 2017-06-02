import Arrow from "./arrow";

class Game {
  constructor(stage) {
    this.stage = stage;
    this.LeftArrows = [];
    this.DownArrows = [];
    this.UpArrows = [];
    this.RightArrows = [];
    this.play = this.play.bind(this);
    this.music = new Audio('./assets/images/paranoia.mp3');
    this.music.loop = true;
    this.music.volume = 0.1;
    this.reset();
    document.getElementById("mute")
      .addEventListener("click", () => {
        this.music.muted = !this.music.muted;
      });
  }

  reset() {
    this.score = 0;
    this.life = 50;
    this.updateScore();
    this.updateLife();
    this.clearArrows();
    this.LeftArrows = [];
    this.DownArrows = [];
    this.UpArrows = [];
    this.RightArrows = [];
    createjs.Ticker.removeAllEventListeners();
    this.stage.update();
    clearInterval(this.myInt);
  }

  clearArrows() {
    this.LeftArrows.forEach(arrow => { this.stage.removeChild(arrow); })
    this.DownArrows.forEach(arrow => { this.stage.removeChild(arrow); })
    this.UpArrows.forEach(arrow => { this.stage.removeChild(arrow); })
    this.RightArrows.forEach(arrow => { this.stage.removeChild(arrow); })
  }

  play(speed) {
    this.reset();
    clearTimeout(this.t1);
    clearTimeout(this.t2);
    clearTimeout(this.t3);
    this.music.play();

    let that = this;

    setInterval(() => {speed *= 1.0007;} , 100 );
    this.myInt = setInterval( randomGen, 7000 / 3 / speed );

    this.t1 = setTimeout(() => {
      clearInterval(this.myInt);
      if (this.life > 0) {
        this.myInt = setInterval( randomGen, 7000 / 3 / speed);
      }
    }, 52500);

    this.t2 = setTimeout(() => {
      clearInterval(this.myInt);
      if (this.life > 0) {
        this.myInt = setInterval( randomGen, 7000 / 3 / speed);
      }
    }, 157500);

    this.t3 = setTimeout(() => {
      clearInterval(this.myInt);
      if (this.life > 0) {
        this.myInt = setInterval( randomGen, 7000 / 3 / speed);
      }
    }, 315000);

    let tick = createjs.Ticker;
    tick.setFPS(30);

    const createLeftArrow = () => {
      let leftMovingArrow = new Arrow.leftMovingArrow();
      that.LeftArrows.push(leftMovingArrow);
      that.stage.addChild(leftMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", leftTick);
      leftMovingArrow.listener = listener;

      function leftTick(event) {
        leftMovingArrow.y = leftMovingArrow.y - speed;
        if (that.LeftArrows[0] && that.LeftArrows[0].y < -40) {
          that.miss();
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
      downMovingArrow.listener = listener;

      function downTick(event) {
        downMovingArrow.y = downMovingArrow.y - speed;
        if (that.DownArrows[0] && that.DownArrows[0].y < -40) {
          that.miss();
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
      upMovingArrow.listener = listener;

      function upTick(event) {
        upMovingArrow.y = upMovingArrow.y - speed;
        if (that.UpArrows[0] && that.UpArrows[0].y < -40) {
          that.miss();
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
      rightMovingArrow.listener = listener;

      function rightTick(event) {
        rightMovingArrow.y = rightMovingArrow.y - speed;
        if (that.RightArrows[0] && that.RightArrows[0].y < -40) {
          that.miss();
          that.stage.removeChild(that.RightArrows[0]);
          that.RightArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    function randomGen() {
      let randArrow = Math.floor(Math.random() * 5) + 1;
      // let randDouble = Math.random() * 100 + 1;
      // if (randDouble > 90) {
      //   randArrow = Math.floor(Math.random() * 6) + 6;
      // }

      switch(randArrow) {
        case 1: createLeftArrow();  break;
        case 2: createDownArrow();  break;
        case 3: createUpArrow();    break;
        case 4: createRightArrow(); break;
        case 5: break;
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
        case 11:
          createLeftArrow();
          createDownArrow();
          break;
      }
    }
  }

  check(arrows, direction) {
    let pressed;
    switch(direction) {
      case "left":
        pressed = new Arrow.leftPressedArrow();
        break;
      case "down":
        pressed = new Arrow.downPressedArrow();
        break;
      case "up":
        pressed = new Arrow.upPressedArrow();
        break;
      case "right":
        pressed = new Arrow.rightPressedArrow();
        break;
    }
    this.stage.addChild(pressed);
    this.stage.update();
    setTimeout( () => this.stage.removeChild(pressed), 100);

    if (arrows[0] && arrows[0].y < 40 && arrows[0].y > 10) {
      if (this.life > 0) {
        this.hit("excellent");
      }
      createjs.Ticker.off("tick", arrows[0].listener);
      this.stage.removeChild(arrows[0]);
      arrows.shift();
    } else if (arrows[0] && arrows[0].y < 55 && arrows[0].y > -5) {
      if (this.life > 0) {
        this.hit("great");
      }
      createjs.Ticker.off("tick", arrows[0].listener);
      this.stage.removeChild(arrows[0]);
      arrows.shift();
    } else {
      this.miss();
    }
  }

  hit(tier) {
    let hitMessageBorder;
    let hitMessage;
    if (tier === "excellent") {
      this.score += 100;
      this.life = Math.min(100, this.life + 2);

      hitMessageBorder = new createjs.Text("Excellent!", "40px Impact", "black");
      hitMessageBorder.outline = 2;
      hitMessageBorder.x = 225;
      hitMessageBorder.y = 225;
      hitMessage = hitMessageBorder.clone();
      hitMessage.outline = 0;
      hitMessage.color = "#ffff80";
    } else if (tier === "great") {
      this.score += 50;
      this.life = Math.min(100, this.life + 1);

      hitMessageBorder = new createjs.Text("Great!", "40px Impact", "black");
      hitMessageBorder.outline = 2;
      hitMessageBorder.x = 250;
      hitMessageBorder.y = 225;
      hitMessage = hitMessageBorder.clone();
      hitMessage.outline = 0;
      hitMessage.color = "#80ff80";
    }

    this.stage.addChild(hitMessage, hitMessageBorder);
    this.stage.update();
    setTimeout( () => {
      this.stage.removeChild(hitMessage, hitMessageBorder);
    }, 200);

    this.updateScore();
    this.updateLife();
  }

  miss() {
    this.life = Math.max(0, this.life - 4);

    let missMessageBorder = new createjs.Text("Missed...", "40px Impact", "black");
    missMessageBorder.outline = 2;
    missMessageBorder.x = 225;
    missMessageBorder.y = 275;
    let missMessage = missMessageBorder.clone();
    missMessage.outline = 0;
    missMessage.color = "red";

    this.stage.addChild(missMessage, missMessageBorder);
    this.stage.update();
    setTimeout( () => {
      this.stage.removeChild(missMessage, missMessageBorder);
    }, 200);
    this.updateLife();
    if (this.life === 0) {
      this.gameOver();
      this.stage.removeChild(missMessage, missMessageBorder);
    }
  }

  gameOver() {
    let gameOverBorder = new createjs.Text("Game over!", "60px Impact", "black");
    gameOverBorder.outline = 2;
    gameOverBorder.x = 160;
    gameOverBorder.y = 275;
    let gameOver = gameOverBorder.clone();
    gameOver.outline = 0;
    gameOver.color = "red";
    this.stage.addChild(gameOver, gameOverBorder);
    this.stage.update();
    setTimeout( () => {
      this.stage.removeChild(gameOver, gameOverBorder);
    }, 5000);
    this.music.pause();
    clearInterval(this.myInt);
  }

  updateScore() {
    let score = document.getElementById("score");
    score.innerHTML = this.score;
  }

  updateLife() {
    let life = document.getElementById("life");
    life.innerHTML = this.life;

    if (this.life > 25) {
      life.style.background = "green";
    } else {
      life.style.background = "red";
    }
  }
}

export default Game;
