var Player1 = prompt("Enter player 1 name : ");
var Player2 = prompt("Enter player 2 name : ");
document.querySelector(".player1").innerHTML = Player1;
document.querySelector(".player2").innerHTML = Player2;
const rollButton = document.getElementById("rollButton");

// Function to execute your code when the page is clicked or refreshed
function onPageInteraction() {
  console.log("Page clicked or refreshed!");
  let r1 = Math.floor(Math.random() * 6) + 1;
  console.log(r1);
  let r2 = Math.floor(Math.random() * 6) + 1;
  console.log(r2);
  document.querySelector(".img1").setAttribute("src", "./images/dice"+ r1+".png");
  document.querySelector(".img2").setAttribute("src", "./images/dice"+ r2+".png");

  if (r1 > r2) {
    document.querySelector("h1").innerHTML = "🚩"+ Player1+" won the match.";
  } else if (r1 < r2) {
    document.querySelector("h1").innerHTML = Player2 + " won the match. 🚩";
  } else {
    document.querySelector("h1").innerHTML = "You both have the same.";
  }
}

rollButton.addEventListener("click", onPageInteraction);
