//  >>======================** By ChatGpt **======================>>
const textElement = document.getElementById("animated-text");
const texts = ["B", "Book"];
let index = 0;
let charIndex = 0;
let typingSpeed = 150; // milliseconds
let deletingSpeed = 100; // milliseconds
let pauseBetween = 2000; // milliseconds

function typeText() {
  if (charIndex < texts[index].length) {
    textElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(deleteText, pauseBetween);
  }
}

function deleteText() {
  if (charIndex > 1) {
    textElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, deletingSpeed);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeText, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeText, pauseBetween);
});
//  ^^======================** By ChatGpt **======================^^

//  By OmarIlpa
let icon = document.getElementById("togglemenu");
let toggleMenu = document.getElementById("Nav");

icon.onclick = () => {
  toggleMenu.style.cssText =
    "display: flex; flex-direction: column; position: absolute; top: 99.9%; transition: 0.5s; width: 200px; background-color: #4e342e81; border-radius: 10px; padding: 10px 0 10px 0;";
};

let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 700) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let al = document.getElementById("alert");
let butn = document.getElementById("btn");
let overLay = document.getElementById("overlay");

setTimeout(() => {
  overLay.style.cssText = "display: block;";
  al.style.cssText = "display: flex;  ";
}, 6000);

butn.onclick = function () {
  overLay.style.cssText = "display: none;";
  al.style.cssText = "display: none;";
};
