class Board {
  constructor(stage) {
    this.stage = stage;
  }

  draw() {
    const staticLeftArrow = new createjs.Bitmap("./assets/images/staticLeft.png");
    staticLeftArrow.x = 115;
    staticLeftArrow.y = 25;

    const staticDownArrow = new createjs.Bitmap("./assets/images/staticDown.png");
    staticDownArrow.x = 185;
    staticDownArrow.y = 25;

    const staticUpArrow = new createjs.Bitmap("./assets/images/staticUp.png");
    staticUpArrow.x = 255;
    staticUpArrow.y = 25;

    const staticRightArrow = new createjs.Bitmap("./assets/images/staticRight.png");
    staticRightArrow.x = 325;
    staticRightArrow.y = 25;

    staticRightArrow.image.onload = () => (this.stage.update());

    this.stage.addChild(staticLeftArrow);
    this.stage.addChild(staticDownArrow);
    this.stage.addChild(staticUpArrow);
    this.stage.addChild(staticRightArrow);

    this.stage.update();
  }
}

module.exports = Board;
