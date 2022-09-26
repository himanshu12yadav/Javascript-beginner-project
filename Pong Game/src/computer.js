export default class Computer {
  constructor(gameWidth, gameHeight) {
    this.width = 10;
    this.height = 60;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.position = {
      x: this.gameWidth - 20,
      y: 10,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
