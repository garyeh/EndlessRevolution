class leftMovingArrow {
  constructor() {
    let leftArrow = new createjs.Bitmap("./assets/images/left.png");
    leftArrow.x = 130;
    leftArrow.y = 700;
    return leftArrow;
  }
}

class downMovingArrow {
  constructor() {
    let downArrow = new createjs.Bitmap("./assets/images/down.png");
    downArrow.x = 220;
    downArrow.y = 700;
    return downArrow;
  }
}

class upMovingArrow {
  constructor() {
    let upArrow = new createjs.Bitmap("./assets/images/up.png");
    upArrow.x = 310;
    upArrow.y = 700;
    return upArrow;
  }
}

class rightMovingArrow {
  constructor() {
    let rightArrow = new createjs.Bitmap("./assets/images/right.png");
    rightArrow.x = 400;
    rightArrow.y = 700;
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

export default {
  leftMovingArrow,
  downMovingArrow,
  upMovingArrow,
  rightMovingArrow,
  leftPressedArrow,
  downPressedArrow,
  upPressedArrow,
  rightPressedArrow
};
