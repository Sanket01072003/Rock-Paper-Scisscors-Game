// let images = document.querySelectorAll("img");
let img1 = document.querySelector("#rock");
console.log(img1.getAttribute("id"));
let img2 = document.querySelector("#paper");
console.log(img2.getAttribute("id"));
let img3 = document.querySelector("#scisscors");
console.log(img3.getAttribute("id"));
let but = document.querySelector("#btn");
let msg = document.querySelector("#res");
let userscore = document.querySelector("#ply-score");
let compscore = document.querySelector("#comp-score");
let reset = document.querySelector("#reset");

let choice1 = "";
let userwin = true;
let compwin = true;
let usrcount = 0;
let comcount = 0;
userscore.textContent = usrcount;
compscore.textContent = comcount;
// let compwin = true;
// let choice2 = "";
// let choice3 = "";
// msg.classList.add("hide");

img1.addEventListener("click", () => {
  choice1 = img1.getAttribute("id");
  console.log(choice1);
  msg.classList.add("hide");
  // play(choice1);
});

img2.addEventListener("click", () => {
  choice1 = img2.getAttribute("id");
  console.log(choice1);
  msg.classList.add("hide");
  // play(choice1);
});

img3.addEventListener("click", () => {
  choice1 = img3.getAttribute("id");
  console.log(choice1);
  msg.classList.add("hide");
  // play(choice1);
});

const play = (userchoice) => {
  let choice = ["rock", "paper", "scisscors"];
  let com = choice[Math.floor(Math.random() * 3)];
  console.log(com);
  if (userchoice == "rock" && com == "scisscors") {
    console.log("User Win");
    userwin = true;
    compwin = false;
    // console.log(compwin);
    return com;
  } else if (userchoice == "rock" && com == "paper") {
    console.log("Computer Wins");
    userwin = false;
    compwin = true;
    return com;
  } else if (userchoice == "paper" && com == "scisscors") {
    console.log("Computer Wins");
    userwin = false;
    compwin = true;
    return com;
  } else if (userchoice == "paper" && com == "rock") {
    console.log("User Win");
    userwin = true;
    compwin = false;
    return com;
  } else if (userchoice == "scisscors" && com == "rock") {
    console.log("Computer Wins");
    userwin = false;
    compwin = true;
    return com;
  } else if (userchoice == "rock" && com == "rock") {
    console.log("Tied");
    userwin = true;
    compwin = true;
    return com;
  } else if (userchoice == "paper" && com == "paper") {
    console.log("Tied");
    userwin = true;
    compwin = true;
    return com;
  } else if (userchoice == "scisscors" && com == "scisscors") {
    console.log("Tied");
    userwin = true;
    compwin = true;
    return com;
  } else {
    console.log("User Win");
    userwin = true;
    compwin = false;
    return com;
  }
};

but.addEventListener("click", () => {
  let ans = play(choice1);
  if (userwin && !compwin) {
    msg.textContent = `User Wins by Choice ${choice1} and Computer's Choice ${ans}`;
    usrcount = usrcount + 1;
    userscore.textContent = usrcount;
    // msg.classList.add("hide");
    msg.classList.remove("hide");
  } else if (!userwin && compwin) {
    msg.textContent = `Computer Wins by Choice ${ans} and User's Choice ${choice1}`;
    comcount = comcount + 1;
    compscore.textContent = comcount;
    // msg.classList.add("hide");
    msg.classList.remove("hide");
  } else {
    msg.textContent = `The Game is Tied (DRAW)`;
    // msg.classList.add("hide");
    msg.classList.remove("hide");
  }
});

reset.addEventListener("click", () => {
  msg.classList.add("hide");
  usrcount = 0;
  comcount = 0;
  userscore.textContent = usrcount;
  compscore.textContent = comcount;
  console.log("Done");
});
