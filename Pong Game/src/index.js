/** GOD  */

import Paddle from "./paddle.js";
import InputHandler from './input.js';
import Computer from './computer.js';

const canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let computer = new Computer(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);


function gameLoop() {
  ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);
  paddle.update();
  paddle.draw(ctx);
  
  computer.draw(ctx);
  
  requestAnimationFrame(gameLoop);
}

gameLoop();
