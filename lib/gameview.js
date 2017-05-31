class Gameview {
  constructor(stage) {
    this.stage = stage;
  }

    draw() {
      const leftArrow = new createjs.Bitmap("./assets/images/staticLeft.png");
      leftArrow.x = 115;
      leftArrow.y = 25;

      const downArrow = new createjs.Bitmap("./assets/images/staticDown.png");
      downArrow.x = 185;
      downArrow.y = 25;

      const upArrow = new createjs.Bitmap("./assets/images/staticUp.png");
      upArrow.x = 255;
      upArrow.y = 25;

      const rightArrow = new createjs.Bitmap("./assets/images/staticRight.png");
      rightArrow.x = 325;
      rightArrow.y = 25;

      rightArrow.image.onload = () => (this.stage.update());

      this.stage.addChild(leftArrow);
      this.stage.addChild(downArrow);
      this.stage.addChild(upArrow);
      this.stage.addChild(rightArrow);

      this.stage.update();
    }
}

module.exports = Gameview;
