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

export default {
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
};
