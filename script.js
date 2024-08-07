const textElement = document.getElementById("animated-text");
const texts = ["B", "Book"];
let index = 0;
let charIndex = 0;
let typingSpeed = 150;
let deletingSpeed = 100;
let pauseBetween = 2000;

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
function togglePaymentDetails(method) {
  document.getElementById("visa-details").style.display =
    method === "visa" ? "block" : "none";
  document.getElementById("paypal-details").style.display =
    method === "paypal" ? "block" : "none";
}

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

let Alert = document.getElementById("alert");
let Button = document.getElementById("btn");
let OverLay = document.getElementById("overlay");

setTimeout(() => {
  OverLay.style.cssText = "display: block;";
  Alert.style.cssText = "display: flex;  ";
}, 1000);

Button.onclick = function () {
  OverLay.style.cssText = "display: none;";
  Alert.style.cssText = "display: none;";
};
OverLay.onclick = function () {
  overLay.style.cssText = "display: none;";
  Alert.style.cssText = "display: none;";
};

let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 1500) {
    header.style.position = "fixed";
    header.style.top = "10px";
  } else {
    header.style.position = "absolute";
    header.style.top = "0px";
  }
});
