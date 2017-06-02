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
    leftPressed.x = 25;
    leftPressed.y = 25;
    return leftPressed;
  }
}

class LdownPressedArrow {
  constructor() {
    let downPressed = new createjs.Bitmap("./assets/images/staticDownPressed.png");
    downPressed.x = 100;
    downPressed.y = 25;
    return downPressed;
  }
}

class LupPressedArrow {
  constructor() {
    let upPressed = new createjs.Bitmap("./assets/images/staticUpPressed.png");
    upPressed.x = 175;
    upPressed.y = 25;
    return upPressed;
  }
}

class LrightPressedArrow {
  constructor() {
    let rightPressed = new createjs.Bitmap("./assets/images/staticRightPressed.png");
    rightPressed.x = 250;
    rightPressed.y = 25;
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
    leftPressed.x = 400;
    leftPressed.y = 25;
    return leftPressed;
  }
}

class RdownPressedArrow {
  constructor() {
    let downPressed = new createjs.Bitmap("./assets/images/staticDownPressed.png");
    downPressed.x = 475;
    downPressed.y = 25;
    return downPressed;
  }
}

class RupPressedArrow {
  constructor() {
    let upPressed = new createjs.Bitmap("./assets/images/staticUpPressed.png");
    upPressed.x = 550;
    upPressed.y = 25;
    return upPressed;
  }
}

class RrightPressedArrow {
  constructor() {
    let rightPressed = new createjs.Bitmap("./assets/images/staticRightPressed.png");
    rightPressed.x = 625;
    rightPressed.y = 25;
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
