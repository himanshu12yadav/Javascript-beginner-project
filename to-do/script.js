var alert = `<div class="alert">
<p> Please enter before Adding </p> 
</div>`;



document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  let input = document.querySelector(".input-text").value;
  let list = document.querySelector(".list");

  if (input == "") {
    list.insertAdjacentHTML("beforeBegin", alert);
    setTimeout(disappear, 2000);
  } else {
    add_to_list(input);
  }
});

function disappear(){
    document.querySelector('.alert').setAttribute('class', 'alert-appear');
}

function add_to_list(value) {
  let list = document.querySelector(".list");
  let html = `<div class="add">
    <input class="check" type="checkbox">
    <p class="text">${value}</p>
    <button class="delete"><i class="fa fa-trash fa-2x"></i></button>
    </div>`;
  list.insertAdjacentHTML("beforeend", html);
}

document.querySelector(".list").addEventListener("click", function (e) {
  let checkbox = document.querySelectorAll(".check");
  if (e.target.className == "fa fa-trash fa-2x") {
    checkbox.forEach((el) => {
      el["checked"] == true ? el.parentElement.remove() : false;
    });
  }
});
