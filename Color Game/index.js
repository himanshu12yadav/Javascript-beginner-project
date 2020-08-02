var combine = "";
document.querySelector(".btn").addEventListener("click", function () {
  let box = document.querySelectorAll(".box");
  box.forEach((e) => (e.style.opacity = 1));
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  combine = `(${r}, ${g}, ${b})`;
  document.querySelector(".rgb__color").innerHTML = `(${r}, ${g}, ${b})`;
  reColor(combine);
});

function reColor(fixedColor) {
  let boxes = document.querySelectorAll("#box");
  let sample = Math.floor(Math.random() * boxes.length);
  let color = new String();
  for (let i = 0; i < boxes.length; i++) {
    color = `(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;

    if (i == sample) {
      boxes[sample].style.backgroundColor = "rgb" + fixedColor;
      continue;
    }
    boxes[i].style.backgroundColor = "rgb" + color;
  }
}

const box = document.querySelectorAll("#box");

document.querySelector(".box-1").addEventListener("click", function () {
  let previousBox = box[0].style.backgroundColor;
  let correctBox = "rgb" + combine;
  if (previousBox !== correctBox) {
    this.style.opacity = 0;
  }
  if (previousBox === correctBox) {
    for (let s of box) {
      s.style.backgroundColor = previousBox;
      s.style.opacity = 1;
    }
  }
});

document.querySelector(".box-2").addEventListener("click", function () {
  let previousBox = box[1].style.backgroundColor;
  let correctBox = "rgb" + combine;

  if (previousBox !== correctBox) {
    this.style.opacity = 0;
  }
  if (previousBox === correctBox) {
    for (let s of box) {
      s.style.backgroundColor = previousBox;
      s.style.opacity = 1;
    }
  }
});

document.querySelector(".box-3").addEventListener("click", function () {
  let previousBox = box[2].style.backgroundColor;
  let correctBox = "rgb" + combine;

  if (previousBox !== correctBox) {
    this.style.opacity = 0;
  }
  if (previousBox === correctBox) {
    for (let s of box) {
      s.style.backgroundColor = previousBox;
      s.style.opacity = 1;
    }
  }
});

document.querySelector(".box-4").addEventListener("click", function () {
  let previousBox = box[3].style.backgroundColor;
  let correctBox = "rgb" + combine;

  if (previousBox !== correctBox) {
    this.style.opacity = 0;
  }
  if (previousBox === correctBox) {
    for (let s of box) {
      s.style.backgroundColor = previousBox;
      s.style.opacity = 1;
    }
  }
});

document.querySelector(".box-5").addEventListener("click", function () {
  let previousBox = box[4].style.backgroundColor;
  let correctBox = "rgb" + combine;

  if (previousBox !== correctBox) {
    this.style.opacity = 0;
  }
  if (previousBox === correctBox) {
    for (let s of box) {
      s.style.backgroundColor = previousBox;
      s.style.opacity = 1;
    }
  }
});

document.querySelector(".box-6").addEventListener("click", function () {
  let previousBox = box[5].style.backgroundColor;
  let correctBox = "rgb" + combine;

  if (previousBox !== correctBox) {
    this.style.opacity = 0;
  }
  if (previousBox == correctBox) {
    for (let s of box) {
      s.style.backgroundColor = previousBox;
      s.style.opacity = 1;
    }
  }
});
