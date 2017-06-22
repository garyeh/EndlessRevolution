import Arrow from "./arrow";

class Game {
  constructor(stage) {
    this.stage = stage;
    this.started = false;
    this.LleftArrows = [];
    this.LdownArrows = [];
    this.LupArrows = [];
    this.LrightArrows = [];
    this.RleftArrows = [];
    this.RdownArrows = [];
    this.RupArrows = [];
    this.RrightArrows = [];
    this.play = this.play.bind(this);
    this.music = new Audio('./assets/songs/paranoia.mp3');
    this.music.loop = true;
    this.music.volume = 0.1;
    this.reset();
    document.getElementById("mute")
      .addEventListener("click", () => {
        if (this.music.muted) {
          $("i").removeClass("fa fa-volume-off");
          $("i").addClass("fa fa-volume-up");
        } else {
          $("i").removeClass("fa fa-volume-up");
          $("i").addClass("fa fa-volume-off");
        }
        this.music.muted = !this.music.muted;
      });
  }

  reset() {
    this.score = 0;
    this.life = 100;
    this.updateScore();
    this.updateLife();
    this.clearArrows();
    createjs.Ticker.removeAllEventListeners();
    this.stage.update();
    clearInterval(this.myInt);
  }

  clearArrows() {
    this.LleftArrows.forEach(arrow => { this.stage.removeChild(arrow); });
    this.LdownArrows.forEach(arrow => { this.stage.removeChild(arrow); });
    this.LupArrows.forEach(arrow => { this.stage.removeChild(arrow); });
    this.LrightArrows.forEach(arrow => { this.stage.removeChild(arrow); });
    this.RleftArrows.forEach(arrow => { this.stage.removeChild(arrow); });
    this.RdownArrows.forEach(arrow => { this.stage.removeChild(arrow); });
    this.RupArrows.forEach(arrow => { this.stage.removeChild(arrow); });
    this.RrightArrows.forEach(arrow => { this.stage.removeChild(arrow); });
    this.LleftArrows = [];
    this.LdownArrows = [];
    this.LupArrows = [];
    this.LrightArrows = [];
    this.RleftArrows = [];
    this.RdownArrows = [];
    this.RupArrows = [];
    this.RrightArrows = [];
  }

  play(difficulty) {
    this.started = true;
    let speed;
    switch(difficulty) {
      case "light":
        speed = 3.5;
        break;
      case "standard":
        speed = 7.0;
        break;
      case "heavy":
        speed = 7.0;
        break;
    }

    this.reset();
    clearTimeout(this.t1);
    clearTimeout(this.t2);
    clearTimeout(this.t3);
    clearTimeout(this.t4);
    this.music.play();

    let that = this;

    setInterval(() => {speed *= 1.0007;} , 100 );
    this.myInt = setInterval( randomGen, 7000 / 3 / speed );

    this.t1 = setTimeout(() => {
      clearInterval(this.myInt);
      if (this.life > 0) {
        this.myInt = setInterval( randomGen, 7500 / 3 / speed);
      }
    }, 52500);

    this.t2 = setTimeout(() => {
      clearInterval(this.myInt);
      if (this.life > 0) {
        this.myInt = setInterval( randomGen, 8000 / 3 / speed);
      }
    }, 105000);

    this.t3 = setTimeout(() => {
      clearInterval(this.myInt);
      if (this.life > 0) {
        this.myInt = setInterval( randomGen, 8500 / 3 / speed);
      }
    }, 157500);

    this.t4 = setTimeout(() => {
      clearInterval(this.myInt);
      if (this.life > 0) {
        this.myInt = setInterval( randomGen, 9000 / 3 / speed);
      }
    }, 210000);

    let tick = createjs.Ticker;
    tick.setFPS(30);

    const LcreateLeftArrow = () => {
      let leftMovingArrow = new Arrow.LleftArrow();
      that.LleftArrows.push(leftMovingArrow);
      that.stage.addChild(leftMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", leftTick);
      leftMovingArrow.listener = listener;

      function leftTick(event) {
        leftMovingArrow.y = leftMovingArrow.y - speed;
        if (that.LleftArrows[0] && that.LleftArrows[0].y < -40) {
          that.miss();
          that.stage.removeChild(that.LleftArrows[0]);
          that.LleftArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    const LcreateDownArrow = () => {
      let downMovingArrow = new Arrow.LdownArrow();
      that.LdownArrows.push(downMovingArrow);
      that.stage.addChild(downMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", downTick);
      downMovingArrow.listener = listener;

      function downTick(event) {
        downMovingArrow.y = downMovingArrow.y - speed;
        if (that.LdownArrows[0] && that.LdownArrows[0].y < -40) {
          that.miss();
          that.stage.removeChild(that.LdownArrows[0]);
          that.LdownArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    const LcreateUpArrow = () => {
      let upMovingArrow = new Arrow.LupArrow();
      that.LupArrows.push(upMovingArrow);
      that.stage.addChild(upMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", upTick);
      upMovingArrow.listener = listener;

      function upTick(event) {
        upMovingArrow.y = upMovingArrow.y - speed;
        if (that.LupArrows[0] && that.LupArrows[0].y < -40) {
          that.miss();
          that.stage.removeChild(that.LupArrows[0]);
          that.LupArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    const LcreateRightArrow = () => {
      let rightMovingArrow = new Arrow.LrightArrow();
      that.LrightArrows.push(rightMovingArrow);
      that.stage.addChild(rightMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", rightTick);
      rightMovingArrow.listener = listener;

      function rightTick(event) {
        rightMovingArrow.y = rightMovingArrow.y - speed;
        if (that.LrightArrows[0] && that.LrightArrows[0].y < -40) {
          that.miss();
          that.stage.removeChild(that.LrightArrows[0]);
          that.LrightArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    const RcreateLeftArrow = () => {
      let leftMovingArrow = new Arrow.RleftArrow();
      that.RleftArrows.push(leftMovingArrow);
      that.stage.addChild(leftMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", leftTick);
      leftMovingArrow.listener = listener;

      function leftTick(event) {
        leftMovingArrow.y = leftMovingArrow.y - speed;
        if (that.RleftArrows[0] && that.RleftArrows[0].y < -40) {
          that.miss();
          that.stage.removeChild(that.RleftArrows[0]);
          that.RleftArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    const RcreateDownArrow = () => {
      let downMovingArrow = new Arrow.RdownArrow();
      that.RdownArrows.push(downMovingArrow);
      that.stage.addChild(downMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", downTick);
      downMovingArrow.listener = listener;

      function downTick(event) {
        downMovingArrow.y = downMovingArrow.y - speed;
        if (that.RdownArrows[0] && that.RdownArrows[0].y < -40) {
          that.miss();
          that.stage.removeChild(that.RdownArrows[0]);
          that.RdownArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    const RcreateUpArrow = () => {
      let upMovingArrow = new Arrow.RupArrow();
      that.RupArrows.push(upMovingArrow);
      that.stage.addChild(upMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", upTick);
      upMovingArrow.listener = listener;

      function upTick(event) {
        upMovingArrow.y = upMovingArrow.y - speed;
        if (that.RupArrows[0] && that.RupArrows[0].y < -40) {
          that.miss();
          that.stage.removeChild(that.RupArrows[0]);
          that.RupArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    const RcreateRightArrow = () => {
      let rightMovingArrow = new Arrow.RrightArrow();
      that.RrightArrows.push(rightMovingArrow);
      that.stage.addChild(rightMovingArrow);
      that.stage.update();
      let listener = tick.on("tick", rightTick);
      rightMovingArrow.listener = listener;

      function rightTick(event) {
        rightMovingArrow.y = rightMovingArrow.y - speed;
        if (that.RrightArrows[0] && that.RrightArrows[0].y < -40) {
          that.miss();
          that.stage.removeChild(that.RrightArrows[0]);
          that.RrightArrows.shift();
          tick.off("tick", listener);
        }
        that.stage.update(event);
      }
    };

    function randomGen() {
      let randArrow = Math.floor(Math.random() * 5) + 1;
      let randDouble = Math.random() * 100 + 1;
      if (difficulty === "heavy") {
        if (randDouble > 75) {
          randArrow += 5;
        }
      }

      switch(randArrow) {
        case 1: RcreateLeftArrow();  break;
        case 2: RcreateDownArrow();  break;
        case 3: RcreateUpArrow();    break;
        case 4: RcreateRightArrow(); break;
        case 5: break;
        case 6: LcreateLeftArrow();  break;
        case 7: LcreateDownArrow();  break;
        case 8: LcreateUpArrow();    break;
        case 9: LcreateRightArrow(); break;
        case 10: break;
      }
    }
  }

  check(arrows, direction) {
    let pressed;
    switch(direction) {
      case "l_left":
        pressed = new Arrow.LleftPressedArrow();
        break;
      case "l_down":
        pressed = new Arrow.LdownPressedArrow();
        break;
      case "l_up":
        pressed = new Arrow.LupPressedArrow();
        break;
      case "l_right":
        pressed = new Arrow.LrightPressedArrow();
        break;
      case "r_left":
        pressed = new Arrow.RleftPressedArrow();
        break;
      case "r_down":
        pressed = new Arrow.RdownPressedArrow();
        break;
      case "r_up":
        pressed = new Arrow.RupPressedArrow();
        break;
      case "r_right":
        pressed = new Arrow.RrightPressedArrow();
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
    } else if (this.life > 0) {
      this.miss();
    }
  }

  hit(tier) {
    let hitMessageBorder;
    let hitMessage;
    if (tier === "excellent") {
      this.score += 100;
      this.life = Math.min(200, this.life + 2);

      hitMessageBorder = new createjs.Text("Excellent!", "40px Impact", "black");
      hitMessageBorder.outline = 2;
      hitMessageBorder.x = 285;
      hitMessageBorder.y = 225;
      hitMessage = hitMessageBorder.clone();
      hitMessage.outline = 0;
      hitMessage.color = "#ffff80";
    } else if (tier === "great") {
      this.score += 50;
      this.life = Math.min(200, this.life + 1);

      hitMessageBorder = new createjs.Text("Great!", "40px Impact", "black");
      hitMessageBorder.outline = 2;
      hitMessageBorder.x = 310;
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
    this.life = Math.max(0, this.life - 5);

    let missMessageBorder = new createjs.Text("Missed...", "40px Impact", "black");
    missMessageBorder.outline = 2;
    missMessageBorder.x = 300;
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
    gameOverBorder.x = 225;
    gameOverBorder.y = 275;
    let gameOver = gameOverBorder.clone();
    gameOver.outline = 0;
    gameOver.color = "red";
    this.stage.addChild(gameOver, gameOverBorder);
    this.stage.update();
    setTimeout(() => {
      this.stage.removeChild(gameOver, gameOverBorder);
    }, 5000);
    this.clearArrows();
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

    if (this.life > 50) {
      life.style.background = "green";
    } else {
      life.style.background = "red";
    }
  }
}

export default Game;
