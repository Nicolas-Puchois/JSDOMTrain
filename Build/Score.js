

function goalto() {
  if(typeof(goal.value) != "number" || goal.value <= 0) {
    goal.value = 5
  }
  countp1 = "0";
  countp2 = "0";
  document.querySelector(".resultp1").innerHTML = countp1;
  document.querySelector(".resultp2").innerHTML = countp2;
  document.querySelector(".resultp1").removeAttribute("id");
  document.querySelector(".resultp2").removeAttribute("id");
  return (document.getElementById("goalto").innerHTML = goal.value);
}
function scoreplayer1() {
  if (countp1 < goal.value && countp2 < goal.value) {
    countp1++;
    return (document.querySelector(".resultp1").innerHTML = countp1);
  } else if (countp1 == goal.value) {
    return document.querySelector(".resultp1").setAttribute("id", "winner");
  }
}

function scoreplayer2() {
  if (countp2 < goal.value && countp1 < goal.value) {
    countp2++;
    return (document.querySelector(".resultp2").innerHTML = countp2);
  } else if (countp2 == goal.value) {
    document.querySelector(".resultp2").setAttribute("id", "winner");
  }
}
function reset() {
  countp1 = "0";
  countp2 = "0";
  document.querySelector(".resultp1").innerHTML = countp1;
  document.querySelector(".resultp2").innerHTML = countp2;
  document.querySelector(".resultp1").removeAttribute("id");
  document.querySelector(".resultp2").removeAttribute("id");
}

let countp1 = 0;
let countp2 = 0;
let goal = document.getElementById("goal");
    goal.addEventListener("change", goalto);
