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
