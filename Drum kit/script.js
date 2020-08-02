const snare = document.querySelector(".snare").getAttribute("data-key");
const kick = document.querySelector(".kick").getAttribute("data-key");
const kick2 = document.querySelector(".kick2").getAttribute("data-key");
const tom_high = document.querySelector(".tom-high").getAttribute("data-key");
const tom_mid = document.querySelector(".tom-mid").getAttribute("data-key");
const tom_low = document.querySelector(".tom-low").getAttribute("data-key");
const crash = document.querySelector(".crash").getAttribute("data-key");
const ride = document.querySelector(".ride").getAttribute("data-key");
const hihat_open = document
  .querySelector(".hihat-open")
  .getAttribute("data-key");
const hihat_close = document
  .querySelector(".hihat-close")
  .getAttribute("data-key");

document.body.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.keyCode == kick) {
    audio = document.createElement("audio");
    document
      .querySelector(".kick")
      .appendChild(audio)
      .setAttribute(
        "src",
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav"
      );
    audio.play();
  }

  if (e.keyCode == kick2) {
    audio = document.createElement("audio");
    document
      .querySelector(".kick2")
      .appendChild(audio)
      .setAttribute(
        "src",
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav"
      );
    audio.play();
  }

  if (e.keyCode == tom_high) {
    audio = document.createElement("audio");
    document
      .querySelector(".tom-high")
      .appendChild(audio)
      .setAttribute(
        "src",
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav"
      );
    audio.play();
  }

  if (e.keyCode == tom_mid) {
    audio = document.createElement("audio");
    document
      .querySelector(".tom-mid")
      .appendChild(audio)
      .setAttribute(
        "src",
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav"
      );
    audio.play();
  }

  if (e.keyCode == tom_low) {
    audio = document.createElement("audio");
    document
      .querySelector(".tom-low")
      .appendChild(audio)
      .setAttribute(
        "src",
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav"
      );
    audio.play();
  }

  if (e.keyCode == crash) {
    audio = document.createElement("audio");
    document
      .querySelector(".crash")
      .appendChild(audio)
      .setAttribute(
        "src",
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav"
      );
    audio.play();
  }

  if (e.keyCode == ride) {
    audio = document.createElement("audio");
    document
      .querySelector(".ride")
      .appendChild(audio)
      .setAttribute(
        "src",
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav"
      );
    audio.play();
  }

  if (e.keyCode == hihat_open) {
    audio = document.createElement("audio");
    document
      .querySelector(".hihat-open")
      .appendChild(audio)
      .setAttribute(
        "src",
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav"
      );
    audio.play();
  }

  if (e.keyCode == hihat_close) {
    audio = document.createElement("audio");
    
    document
      .querySelector(".hihat-close")
      .appendChild(audio)
      .setAttribute(
        "src",
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav"
      );
    audio.play();
  }

  if (e.keyCode == snare) {
    audio = document.createElement("audio");
    document
      .querySelector(".snare")
      .appendChild(audio)
      .setAttribute(
        "src",
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav"
      );
    audio.play();
  }
});
