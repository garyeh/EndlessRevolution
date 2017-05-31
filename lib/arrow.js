class leftMovingArrow {
  constructor() {
    let leftArrow = new createjs.Bitmap("./assets/images/left.gif");
    leftArrow.x = 115;
    leftArrow.y = 700;
    return leftArrow;
  }
}

class downMovingArrow {
  constructor() {
    let downArrow = new createjs.Bitmap("./assets/images/down.gif");
    downArrow.x = 185;
    downArrow.y = 700;
    return downArrow;
  }
}

class upMovingArrow {
  constructor() {
    let upArrow = new createjs.Bitmap("./assets/images/up.gif");
    upArrow.x = 255;
    upArrow.y = 700;
    return upArrow;
  }
}

class rightMovingArrow {
  constructor() {
    let rightArrow = new createjs.Bitmap("./assets/images/right.gif");
    rightArrow.x = 325;
    rightArrow.y = 700;
    return rightArrow;
  }
}

module.exports = {
  leftMovingArrow,
  downMovingArrow,
  upMovingArrow,
  rightMovingArrow
};
