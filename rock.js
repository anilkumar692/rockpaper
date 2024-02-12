const userchoices = document.querySelectorAll(".choice");
const computer_arr = ["rock", "paper", "scissors"];
var messege = document.querySelector(".messege");
var user_score = 0;
var computer_score = 0;
// let computer_choice;
let userguess;
var win_messege = "congrates You Win..........";
var loose_messege = "OOps.. You Loose";

let userscore = document.querySelector("#user_score");

let compscore = document.querySelector("#comp_score");

for (let items of userchoices) {
  items.addEventListener("click", () => {
    userguess = items.getAttribute("id");

    const computer_choice = computer_arr[Math.floor(Math.random() * 3)];
    console.log("computer choice is", computer_choice);
    console.log("user guess is", userguess);

    i = 0;
    if (computer_choice === userguess) {
      console.log("match draw");
      messege.innerText = "Sorry DRaw";
      messege.setAttribute("class", "drawclass");
    } else if (computer_choice === "rock" && userguess === "paper") {
      user_score += 1;

      console.log("USER Wins");
      messege.setAttribute("class", "greenclass");
      messege.innerText = win_messege;
    } else if (computer_choice === "rock" && userguess === "scissors") {
      computer_score += 1;
      messege.innerText = loose_messege;
      messege.setAttribute("class", "redclass");
      console.log("COMPUTER WINS");
    } else if (computer_choice === "paper" && userguess === "rock") {
      computer_score += 1;
      messege.innerText = loose_messege;
      console.log("COMPUTER WINS");
      messege.setAttribute("class", "redclass");
    } else if (computer_choice === "paper" && userguess === "scissors") {
      user_score += 1;
      messege.innerText = win_messege;
      messege.setAttribute("class", "greenclass")

      console.log("USER Wins");
    } else if (computer_choice === "scissors" && userguess === "rock") {
      user_score += 1;
      messege.innerText = win_messege;
      messege.setAttribute("class", "greenclass")

      console.log("USER Wins");
    } else if (computer_choice === "scissors" && userguess === "paper") {
      computer_score += 1;
      console.log("COMPUTER WINS");
      messege.innerText = loose_messege;
      messege.setAttribute("class", "redclass");
    }
    //  else {
    //   console.log("match draw");
    //   messege.innerText = "Sorry DRaw";
    // }
    userscore.innerText = user_score;
    compscore.innerText = computer_score;
  });
}

//   if (computer_choice === "rock" && userguess === "paper") {
//     user_score += 1;
//   } else if (computer_choice === "rock" && userguess === "scissors") {
//     computer_score += 1;
//   } else if (computer_choice === "paper" && userguess === "rock") {
//     computer_score += 1;
//   } else if (computer_choice === "paper" && userguess === "scissors") {
//     user_score++;
//   }
//   if (computer_choice === "scissors" && userguess === "rock") {
//     user_score += 1;
//   }
//   if (computer_choice === "scissors" && userguess === "paper") {
//     computer_choice += 1;
//   }
