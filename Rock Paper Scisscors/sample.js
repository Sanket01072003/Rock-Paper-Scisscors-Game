// const sanket = {
//     name : "Sanket Pawar",
//     age : 21,
//     gender : "Male",
//     isIntelligent : true,
// };

// for(let vr in sanket){
//     let op = `The Value for the key : ${vr} is ${sanket[vr]}`;
//     console.log(op);
// }

// let sr = "hemloo guys hoe are you ..?";
// let sp = sr.trim();
// let tp = `The Space removed are : ${sp}`;
// console.log(tp);

// for(let vr of sr){
//     let op = `The letter of string : ${vr}`;
//     console.log(op);
// }

// let cap = sr.toUpperCase();
// let cp = `The Capitalize form of the string is ${cap} with length ${sr.length}`;
// console.log(cp);

// let dap = sr.toLowerCase();
// let dp = `The Lowerise form of the string is ${dap}`;
// console.log(dp);

// let tap = sr.slice(2,6);
// let up = `The Sliced form of the string is ${cap}`;
// console.log(up);

// let fap = sr.replace("guys","gumys");
// let fp = `The Replaced form of the string is ${fap}`;
// console.log(fp);

// let xap = sr.concat(sanket.name);
// let xp = `The Concated form of the string is ${xap}`;
// console.log(xp);

// let Name = prompt("Enter Your Name : ");
// let usr = "@"+Name+Name.length;
// let sug = `Suggesting an Unique Username for You Please Wait.....\nThe Username is ${usr} `;
// console.log(sug);
// console.log(sanket["name"]);

// let name = prompt("Enter Your Name : ");
// console.log("Welcome ",name);
// let num = prompt("Please enter a number ",name," :");
// console.log("checking if the number is even or odd....");
// if(num % 2 === 0){
//     console.log("The given Number ",num," is even..!");
// }
// else{
//     console.log("The given Number ",num," is odd..!");
// }

// let score = prompt("Please Enter Your Score ",name," :");
// console.log(score);

// if(score >= 75 && score <= 100){
//     console.log("Your Grade is : A");
// }
// else if(score >= 50){
//     console.log("Your Grade is : B");
// }
// else if(score >= 35){
//     console.log("Your Grade is : C");
// }
// else{
//     console.log("Your Grade is : F");
// }

// let num = [34,566,234,32,346,346];
// let name = ["hello","world"];
// let cd = ["how",4];
// console.log(num);
// let indx = 0;
//  for(let val of num){
//     let offr = val /10;
//     num[indx] -= offr;
//     indx++;
//  }
// console.log(num);

// num.push(34);
// console.log("The Pushed array is :");
// console.log(num);

// let bv = num.pop();
// console.log(`The Poped array is ${bv}`);
// console.log(num);

// num.unshift(99);
// console.log("The Unshifted array is :");
// console.log(num);

// let sd = num.shift();
// console.log(`The Shifted array is : ${sd}`);
// console.log(num);

// let as = num.toString();
// console.log(`The Stringed array is : ${as}`);
// console.log(num);

// let ty = num.concat(name,cd);
// console.log(`The Joined array is : ${ty}`);

// let cdx = 0;
// let sum = 0;
// for(let ghj in num){
//     sum += num[ghj];
//     cdx++;
// }
// console.log("The Sum of the Array is :",sum);

// let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// let first = company.shift();
// console.log(`The Removed Company is ${first}`);
// console.log(company);

// company.splice(2,1,"Ola");
// console.log(company);

// let sl = num.slice(1,4);
// console.log(`The sliced Form is : ${sl}`);

// company.push("Amazon");
// console.log(company);

// let n = prompt("Enter the Value : ");
// let ar1 = [];
// for(let i = 1 ; i <= n ; i++){
//     ar1[i-1] = i;
// }
// console.log("_____________________________________________________");
// console.log(ar1);

// let ar2 = ar1.reduce((res,cur)=>{
//     return res + cur;
// })
// console.log("_____________________________________________________");
// console.log(ar2);

// let ar3 = ar1.reduce((res,cur)=>{
//     return res * cur;
// })
// console.log("_____________________________________________________");
// console.log(ar3);

// let ar4 = ar1.filter((val)=>{
//     if(val % 2 == 0){
//         return val;
//     }
// })
// console.log("_____________________________________________________");
// console.log(ar4);

// let ar5 = ar1.map((val)=>{
//     return val**2;
// })
// console.log("_____________________________________________________");
// console.log(ar5);

// ar1.forEach((val)=>{
//     console.log(val-1);
// })
// console.log("_____________________________________________________");

// let vovels = (asd)=>{
//     for(val of asd){
//         if(val == "a" ||val == "e"||val == "i"||val == "o"||val == "u"){
//             console.log(val);
//         }
//     }
// }

// let para = document.querySelector("#p1");
// para.innerText = "THis is CHnaged Now..!";
// para.style.color = "Blue";
// let btn = document.createElement("button");
// btn.innerText = "Click ME..!";
// let div = document.querySelector("div");
// div.append(btn);
// btn.innerText = "Change Mode";
// let body = document.querySelector("body");
// let mode = "white";
// btn.addEventListener("click", () => {
//   if (mode == "white") {
//     mode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("body");
//   } else {
//     mode = "white";
//     body.classList.add("body");
//     body.classList.remove("dark");
//   }
// });
// let im = document.createElement("img");
// im.setAttribute("src", "Screenshot 2024-05-28 231928.png");
// im.style.height = "10rem";
// div.append(im);
// im.addEventListener("mouseover", () => {
//   im.style.height = "8rem";
// });
// im.addEventListener("mouseout", () => {
//   im.style.height = "10rem";
// });
// const add = (a, b) => {
//   console.log(a + b);
// };

// function xyz(sum, text) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("This is XyZ");
//       sum(2, 5);
//       console.log(text);
//       resolve("SUCCESS");
//       // reject("ERORR");
//     }, 4000);
//   });
// }

// setTimeout(add(2, 4), 4000);

// let xyzFun = xyz(add);
// xyzFun.then((result) => {
//   console.log("The code is completed Successfully", result);
// });

// xyzFun.catch((err) => {
//   console.log("The code is not completed Successfully", err);
// });

// async function tell() {
//   await xyz(add, "hello");
//   await xyz(add, "How");
//   await xyz(add, "Are");
//   await xyz(add, "You");
//   await xyz(add, "Friend");
// }

let URL = "https://cat-fact.herokuapp.com/facts";
let btns = document.querySelector("#btn");
let fr = document.querySelector("#facts");

const response = async () => {
  let promise = await fetch(URL);
  console.log(promise);
  let data = await promise.json();
  fr.textContent = data[4].text;
};
// function response() {
//   fetch(URL)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       fr.textContent = data[3].text;
//     });
// }

btns.addEventListener("click", response);
