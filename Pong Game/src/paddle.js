export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 10;
    this.height = 60;
    this.speed = 0;
    this.maxSpeed = 10;
    this.position = {
      x: 10,
      y: 5,
    };
  }

  moveUp() {
    this.speed = this.maxSpeed;
    console.log(this.speed);  
}

  moveDown() {
    this.speed = -this.maxSpeed;
    console.log(this.speed);
  }

  stop() {
    this.speed = 0;
  }

  update() {
    this.position.y += this.speed;
    if (this.position.y < 0) {
      this.position.y = 5;
    }

    if (this.position.y + this.height > this.gameHeight) {
      this.position.y = this.gameHeight-this.height;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
