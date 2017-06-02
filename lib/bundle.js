/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrow__ = __webpack_require__(2);


class Game {
  constructor(stage) {
    this.stage = stage;
    this.LeftArrows = [];
    this.DownArrows = [];
    this.UpArrows = [];
    this.RightArrows = [];
    this.play = this.play.bind(this);
    this.music = new Audio('./assets/songs/songs.mp3');
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
      let leftMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].leftMovingArrow();
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
      let downMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].downMovingArrow();
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
      let upMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].upMovingArrow();
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
      let rightMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].rightMovingArrow();
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
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].leftPressedArrow();
        break;
      case "down":
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].downPressedArrow();
        break;
      case "up":
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].upPressedArrow();
        break;
      case "right":
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].rightPressedArrow();
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

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class leftMovingArrow {
  constructor() {
    let leftArrow = new createjs.Bitmap("./assets/images/left.png");
    leftArrow.x = 130;
    leftArrow.y = 720;
    this.listener = "";
    return leftArrow;
  }
}

class downMovingArrow {
  constructor() {
    let downArrow = new createjs.Bitmap("./assets/images/down.png");
    downArrow.x = 220;
    downArrow.y = 720;
    this.listener = "";
    return downArrow;
  }
}

class upMovingArrow {
  constructor() {
    let upArrow = new createjs.Bitmap("./assets/images/up.png");
    upArrow.x = 310;
    upArrow.y = 720;
    this.listener = "";
    return upArrow;
  }
}

class rightMovingArrow {
  constructor() {
    let rightArrow = new createjs.Bitmap("./assets/images/right.png");
    rightArrow.x = 400;
    rightArrow.y = 720;
    this.listener = "";
    return rightArrow;
  }
}

class leftPressedArrow {
  constructor() {
    let leftPressed = new createjs.Bitmap("./assets/images/staticLeftPressed.png");
    leftPressed.x = 130;
    leftPressed.y = 25;
    return leftPressed;
  }
}

class downPressedArrow {
  constructor() {
    let downPressed = new createjs.Bitmap("./assets/images/staticDownPressed.png");
    downPressed.x = 220;
    downPressed.y = 25;
    return downPressed;
  }
}

class upPressedArrow {
  constructor() {
    let upPressed = new createjs.Bitmap("./assets/images/staticUpPressed.png");
    upPressed.x = 310;
    upPressed.y = 25;
    return upPressed;
  }
}

class rightPressedArrow {
  constructor() {
    let rightPressed = new createjs.Bitmap("./assets/images/staticRightPressed.png");
    rightPressed.x = 400;
    rightPressed.y = 25;
    return rightPressed;
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  leftMovingArrow,
  downMovingArrow,
  upMovingArrow,
  rightMovingArrow,
  leftPressedArrow,
  downPressedArrow,
  upPressedArrow,
  rightPressedArrow
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__board__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(0);



document.addEventListener("DOMContentLoaded", function () {

  const stage = new createjs.Stage("canvas");
  const board = new __WEBPACK_IMPORTED_MODULE_0__board___default.a(stage);
  board.draw();
  stage.update();

  const game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* default */](stage);

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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

class Board {
  constructor(stage) {
    this.stage = stage;
  }

  draw() {
    const staticLeftArrow = new createjs.Bitmap("./assets/images/staticLeft.png");
    const staticDownArrow = new createjs.Bitmap("./assets/images/staticDown.png");
    const staticUpArrow = new createjs.Bitmap("./assets/images/staticUp.png");
    const staticRightArrow = new createjs.Bitmap("./assets/images/staticRight.png");

    staticLeftArrow.x = 130;
    staticLeftArrow.y = 25;

    staticDownArrow.x = 220;
    staticDownArrow.y = 25;

    staticUpArrow.x = 310;
    staticUpArrow.y = 25;

    staticRightArrow.x = 400;
    staticRightArrow.y = 25;

    staticRightArrow.image.onload = () => (this.stage.update());

    this.stage.addChild(staticLeftArrow, staticDownArrow,
      staticUpArrow, staticRightArrow);

    this.stage.update();
  }
}

module.exports = Board;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map