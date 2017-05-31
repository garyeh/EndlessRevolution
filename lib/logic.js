class Logic {
  check(arrows) {
    if (arrows[0] &&
      arrows[0].y < 50 && arrows[0].y > 0) {
      console.log("Hit!");
    } else {
      console.log("miss!");
    }
  }
}

module.exports = Logic;
