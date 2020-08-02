let key = {
  one: document.querySelector(".one"),
  two: document.querySelector(".two"),
  three: document.querySelector(".three"),
  four: document.querySelector(".four"),
  five: document.querySelector(".five"),
  six: document.querySelector(".six"),
  seven: document.querySelector(".seven"),
  eight: document.querySelector(".eight"),
  nine: document.querySelector(".nine"),
  zero: document.querySelector(".zero"),
  equal: document.querySelector(".equal"),
  cancel: document.querySelector(".cancel"),
  dot: document.querySelector(".dot"),
  input: document.querySelector(".input input"),
  plus: document.querySelector(".plus"),
  plus: document.querySelector(".minus"),
  plus: document.querySelector(".multiplication"),
  plus: document.querySelector(".division"),
};

let collect = new String();
let result;

function sum(v) {
  if (v.innerText == "=") {
    result = eval(collect);
    collect = result;
    return collect;
  }

  collect += v.innerText;

  return collect;
}

document.querySelector(".cal").addEventListener("click", function (e) {
  e.preventDefault();
  v = e.target;
	let str;
  if (v.innerText == "C") {
    return "";
  }
  for (let i in key) {
    if (i == v.className) {
	  key.input["value"] = sum(v);
	}
  }

});
