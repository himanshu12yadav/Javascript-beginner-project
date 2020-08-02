window.onload = function () {
  document.querySelector(".ranges").value = 0;
};

document.querySelector(".ranges").addEventListener("change", function () {
  let input = parseInt(document.querySelector(".pay").value);
  let percent = parseInt(this.value);
  document.querySelector(".range-span").innerHTML = percent + "%";
  result(input, percent);
});

function result(value, percent) {
  if (isNaN(value) || isNaN(percent)) {
    document.querySelector(".tip_amount").value = "";
    document.querySelector(".total_bill").value = "";
  } else {
    let cut = (percent / 100) * value;
    let total_bill = value + cut;

    document.querySelector(".tip_amount").value = cut.toFixed(2);
    document.querySelector(".total_bill").value = total_bill;
  }
}
