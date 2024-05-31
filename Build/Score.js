let countp1 = 0;
let countp2 = 0;
let goal = document.getElementById("goal");


document
    .getElementById("player1")
    .addEventListener("click", scoreplayer1());
document
    .getElementById("player2")
    .addEventListener("click", scoreplayer2());
document
    .getElementById("reset")
    .addEventListener("click", reset);

function scoreplayer1() {
  if (countp1 <= goal.value) {
    countp1++;
   return document.querySelector(".resultp1").innerHTML = countp1;
  }
}

function scoreplayer2() {
  if (countp2 <= goal.value) {
    countp2++;
   return  document.querySelector(".resultp1").innerHTML = countp1;
  }
}
function reset() {
  countp1 = 0;
  countp2 = 0;
  document.querySelector(".resultp1").innerHTML = countp1;
  document.querySelector(".resultp2").innerHTML = countp2;
}