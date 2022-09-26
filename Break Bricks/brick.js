import { detectionCollision } from './collisionDetection.js';

export default class Brick {
  constructor(game, position) {
    this.image = document.querySelector("#img_brick");
    this.game = game;
    this.position = position;
    this.width = 80;
    this.height = 24;
    this.markedForDelete = false;
  }

  update() {
    if (detectionCollision(this.game.ball, this)){
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedForDelete = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
