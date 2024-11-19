// EXERCICE1

// document.querySelector("img").addEventListener("mouseenter", handleMouseEnterBorder);

// function handleMouseEnterBorder(event){
//     // if (event.target.classList.contains("image1")){
//     //             event.target.classList.remove("image1");
//     //            event.target.classList.add("border-red");
//     //         }else{
//     //             event.target.classList.add("image1");
//     //             event.target.classList.remove("border-red");
//     //         }
// }

// EXERCICE 2

// const text = document.querySelector("#text > p");

// const afficher = document.querySelector("body > a");
// const parentElement = document.querySelector('body');
// const masquer = parentElement.children[1];;

// afficher.addEventListener("click", handleClickAfficher);

// masquer.addEventListener("click", handleClickmasquer);

// function handleClickAfficher(event){
//     const text = document.querySelector("#text > p");
//      event.target.remove(text);

// }
// const a = document.querySelectorAll("a");
// a.forEach((element) => {
//   element.addEventListener("click", handleClick);
// });

// function handleClick(event) {
//     // console.log(event.target.classList.contains("2"));

//   let text = document.querySelector("#text > p");

//   if (event.target.innerHTML === "Masquer") {
//     text.remove(text);
//   }else if (event.target.innerHTML === "Afficher"){
//     text = document.querySelector("#text > p");
//   }
// }

// EXERCICE 3

// let text = document.querySelector("p");
// const green = document.querySelector(".green");
// const red = document.querySelector(".red");
// const blue = document.querySelector(".blue");
// const couleur = green + red + blue;

// const couleur = document.querySelectorAll(".color");
// couleur.forEach((element) => {
//   element.addEventListener("click", handleOnClick);
// });

// function handleOnClick(event) {
//   if (event.target.classList.contains("green")) {
//     text.classList.add("green");
//     text.classList.remove("red");
//     text.classList.remove("blue");
//   }
//   if (event.target.classList.contains("red")) {
//     text.classList.add("red");
//     text.classList.remove("green");
//     text.classList.remove("blue");
//   }
//   if (event.target.classList.contains("blue")) {
//     text.classList.add("blue");
//     text.classList.remove("red");
//     text.classList.remove("green");
//   }

// }

// EXERCICE 4

// const button = document.querySelector("button");
// const inputs = document.querySelectorAll("input");

// inputs.forEach((element) => {
//   element.addEventListener("input", handleClickOn);
// });

// function handleClickOn(event) {
//   inputs.forEach((element) => {
//     if (inputs[0].value == inputs[1].value) {
//       element.classList.add("border-green");
//       element.classList.remove("border-red");
//     } else if (inputs[0].value != inputs[1].value) {
//       element.classList.add("border-red");
//       element.classList.remove("border-green");
//     }
//   });
// }

// EXERCICE 5



