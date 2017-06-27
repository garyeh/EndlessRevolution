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
/***/ (function(module, exports) {

class Board {
  constructor(stage) {
    this.stage = stage;
  }

  openModal() {
    $(document.getElementById("instructionModal")).addClass('visible');
  }

  closeModal() {
    $(document.getElementById("instructionModal")).removeClass('visible');
  }

  draw() {
    const LstaticLeftArrow = new createjs.Bitmap("./assets/images/staticLeft.png");
    const LstaticDownArrow = new createjs.Bitmap("./assets/images/staticDown.png");
    const LstaticUpArrow = new createjs.Bitmap("./assets/images/staticUp.png");
    const LstaticRightArrow = new createjs.Bitmap("./assets/images/staticRight.png");

    const RstaticLeftArrow = new createjs.Bitmap("./assets/images/staticLeft.png");
    const RstaticDownArrow = new createjs.Bitmap("./assets/images/staticDown.png");
    const RstaticUpArrow = new createjs.Bitmap("./assets/images/staticUp.png");
    const RstaticRightArrow = new createjs.Bitmap("./assets/images/staticRight.png");

    LstaticLeftArrow.x = 25; LstaticLeftArrow.y = 25;
    LstaticDownArrow.x = 100; LstaticDownArrow.y = 25;
    LstaticUpArrow.x = 175; LstaticUpArrow.y = 25;
    LstaticRightArrow.x = 250; LstaticRightArrow.y = 25;

    RstaticLeftArrow.x = 400; RstaticLeftArrow.y = 25;
    RstaticDownArrow.x = 475; RstaticDownArrow.y = 25;
    RstaticUpArrow.x = 550; RstaticUpArrow.y = 25;
    RstaticRightArrow.x = 625; RstaticRightArrow.y = 25;

    RstaticRightArrow.image.onload = () => (this.stage.update());

    this.stage.addChild(LstaticLeftArrow, LstaticDownArrow,
      LstaticUpArrow, LstaticRightArrow, RstaticLeftArrow,
      RstaticDownArrow, RstaticUpArrow, RstaticRightArrow);

    this.stage.update();
  }
}

module.exports = Board;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrow__ = __webpack_require__(2);


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
      let leftMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].LleftArrow();
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
      let downMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].LdownArrow();
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
      let upMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].LupArrow();
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
      let rightMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].LrightArrow();
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
      let leftMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].RleftArrow();
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
      let downMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].RdownArrow();
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
      let upMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].RupArrow();
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
      let rightMovingArrow = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].RrightArrow();
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
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].LleftPressedArrow();
        break;
      case "l_down":
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].LdownPressedArrow();
        break;
      case "l_up":
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].LupPressedArrow();
        break;
      case "l_right":
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].LrightPressedArrow();
        break;
      case "r_left":
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].RleftPressedArrow();
        break;
      case "r_down":
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].RdownPressedArrow();
        break;
      case "r_up":
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].RupPressedArrow();
        break;
      case "r_right":
        pressed = new __WEBPACK_IMPORTED_MODULE_0__arrow__["a" /* default */].RrightPressedArrow();
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

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LleftArrow {
  constructor() {
    let leftArrow = new createjs.Bitmap("./assets/images/lh_left.png");
    leftArrow.x = 25;
    leftArrow.y = 720;
    this.listener = "";
    return leftArrow;
  }
}

class LdownArrow {
  constructor() {
    let downArrow = new createjs.Bitmap("./assets/images/lh_down.png");
    downArrow.x = 100;
    downArrow.y = 720;
    this.listener = "";
    return downArrow;
  }
}

class LupArrow {
  constructor() {
    let upArrow = new createjs.Bitmap("./assets/images/lh_up.png");
    upArrow.x = 175;
    upArrow.y = 720;
    this.listener = "";
    return upArrow;
  }
}

class LrightArrow {
  constructor() {
    let rightArrow = new createjs.Bitmap("./assets/images/lh_right.png");
    rightArrow.x = 250;
    rightArrow.y = 720;
    this.listener = "";
    return rightArrow;
  }
}

class LleftPressedArrow {
  constructor() {
    let leftPressed = new createjs.Bitmap("./assets/images/staticLeftPressed.png");
    leftPressed.x = 22;
    leftPressed.y = 22;
    leftPressed.scaleX=1.1;
    leftPressed.scaleY=1.1;
    return leftPressed;
  }
}

class LdownPressedArrow {
  constructor() {
    let downPressed = new createjs.Bitmap("./assets/images/staticDownPressed.png");
    downPressed.x = 97;
    downPressed.y = 22;
    downPressed.scaleX=1.1;
    downPressed.scaleY=1.1;
    return downPressed;
  }
}

class LupPressedArrow {
  constructor() {
    let upPressed = new createjs.Bitmap("./assets/images/staticUpPressed.png");
    upPressed.x = 172;
    upPressed.y = 22;
    upPressed.scaleX=1.1;
    upPressed.scaleY=1.1;
    return upPressed;
  }
}

class LrightPressedArrow {
  constructor() {
    let rightPressed = new createjs.Bitmap("./assets/images/staticRightPressed.png");
    rightPressed.x = 247;
    rightPressed.y = 22;
    rightPressed.scaleX=1.1;
    rightPressed.scaleY=1.1;
    return rightPressed;
  }
}

class RleftArrow {
  constructor() {
    let leftArrow = new createjs.Bitmap("./assets/images/rh_left.png");
    leftArrow.x = 400;
    leftArrow.y = 720;
    this.listener = "";
    return leftArrow;
  }
}

class RdownArrow {
  constructor() {
    let downArrow = new createjs.Bitmap("./assets/images/rh_down.png");
    downArrow.x = 475;
    downArrow.y = 720;
    this.listener = "";
    return downArrow;
  }
}

class RupArrow {
  constructor() {
    let upArrow = new createjs.Bitmap("./assets/images/rh_up.png");
    upArrow.x = 550;
    upArrow.y = 720;
    this.listener = "";
    return upArrow;
  }
}

class RrightArrow {
  constructor() {
    let rightArrow = new createjs.Bitmap("./assets/images/rh_right.png");
    rightArrow.x = 625;
    rightArrow.y = 720;
    this.listener = "";
    return rightArrow;
  }
}

class RleftPressedArrow {
  constructor() {
    let leftPressed = new createjs.Bitmap("./assets/images/staticLeftPressed.png");
    leftPressed.x = 397;
    leftPressed.y = 22;
    leftPressed.scaleX=1.1;
    leftPressed.scaleY=1.1;
    return leftPressed;
  }
}

class RdownPressedArrow {
  constructor() {
    let downPressed = new createjs.Bitmap("./assets/images/staticDownPressed.png");
    downPressed.x = 472;
    downPressed.y = 22;
    downPressed.scaleX=1.1;
    downPressed.scaleY=1.1;
    return downPressed;
  }
}

class RupPressedArrow {
  constructor() {
    let upPressed = new createjs.Bitmap("./assets/images/staticUpPressed.png");
    upPressed.x = 547;
    upPressed.y = 22;
    upPressed.scaleX=1.1;
    upPressed.scaleY=1.1;
    return upPressed;
  }
}

class RrightPressedArrow {
  constructor() {
    let rightPressed = new createjs.Bitmap("./assets/images/staticRightPressed.png");
    rightPressed.x = 622;
    rightPressed.y = 22;
    rightPressed.scaleX=1.1;
    rightPressed.scaleY=1.1;
    return rightPressed;
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  LleftArrow,
  LdownArrow,
  LupArrow,
  LrightArrow,
  LleftPressedArrow,
  LdownPressedArrow,
  LupPressedArrow,
  LrightPressedArrow,
  RleftArrow,
  RdownArrow,
  RupArrow,
  RrightArrow,
  RleftPressedArrow,
  RdownPressedArrow,
  RupPressedArrow,
  RrightPressedArrow
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__board__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(1);



document.addEventListener("DOMContentLoaded", function () {
  const stage = new createjs.Stage("canvas");
  const board = new __WEBPACK_IMPORTED_MODULE_0__board___default.a(stage);
  window.board = board;
  board.draw();
  stage.update();

  const game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* default */](stage);

  function LhandlePress(e) {
    if (game.started) {
      switch (e.keyCode) {
        case 97:
          game.check(game.LleftArrows, "l_left");
          break;
        case 115:
          game.check(game.LdownArrows, "l_down");
          break;
        case 119:
          game.check(game.LupArrows, "l_up");
          break;
        case 100:
          game.check(game.LrightArrows, "l_right");
          break;
      }
    }
  }

  function RhandlePress(e) {
    if (game.started) {
      switch (e.keyCode) {
        case 106:
          game.check(game.RleftArrows, "r_left");
          break;
        case 107:
          game.check(game.RdownArrows, "r_down");
          break;
        case 105:
          game.check(game.RupArrows, "r_up");
          break;
        case 108:
          game.check(game.RrightArrows, "r_right");
          break;
      }
    }
  }

  document.getElementById("light").addEventListener("click", () => {
    game.play("light");
  });
  document.getElementById("standard").addEventListener("click", () => {
    game.play("standard");
  });
  document.getElementById("heavy").addEventListener("click", () => {
    game.play("heavy");
  });

  document.addEventListener("keypress", LhandlePress, false);
  document.addEventListener("keypress", RhandlePress, false);
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map