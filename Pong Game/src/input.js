export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", function (event) {
      event.preventDefault();
      switch (event.keyCode) {
        case 87:
          paddle.moveUp();
          break;
        case 83:
          paddle.moveDown();
          break;
      }
    });

    document.addEventListener("keyup", function (event) {
      switch (event.keyCode) {
        case 87:
        case 83:
          paddle.stop();
          break;
      }
    });
  }
}
