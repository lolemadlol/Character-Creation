const chHair = document.querySelector(".ch-hair");
const chHair0 = document.querySelector(".ch-hair0");
const chHair1 = document.querySelector(".ch-hair1");
const chHair2 = document.querySelector(".ch-hair2");
const chHair3 = document.querySelector(".ch-hair3");
const chMan = document.querySelector(".ch-man");
const chMan0 = document.querySelector(".ch-man0");
const chMan1 = document.querySelector(".ch-man1");
const chMan2 = document.querySelector(".ch-man2");
const chMan3 = document.querySelector(".ch-man3");
const chShirt = document.querySelector(".ch-shirt");
const chShirt0 = document.querySelector(".ch-shirt0");
const chShirt1 = document.querySelector(".ch-shirt1");
const chShirt2 = document.querySelector(".ch-shirt2");
const chShirt3 = document.querySelector(".ch-shirt3");
const chAccessory = document.querySelector(".ch-accessory");
const chAccessory0 = document.querySelector(".ch-accessory0");
const chAccessory1 = document.querySelector(".ch-accessory1");
const chAccessory2 = document.querySelector(".ch-accessory2");
const chAccessory3 = document.querySelector(".ch-accessory3");
const accessory0 = document.querySelector(".accessory0");
const accessory1 = document.querySelector(".accessory1");
const accessory2 = document.querySelector(".accessory2");
const accessory3 = document.querySelector(".accessory3");
const btn = document .querySelector(".btn");

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

chHair0.addEventListener("click", () => {
    chHair.style.display = "block";
    chHair.src = "images/ch-hair01.png";
});

chHair1.addEventListener("click", () => {
    chHair.style.display = "block";
    chHair.src = "images/ch-hair02.png";
});

chHair2.addEventListener("click", () => {
    chHair.style.display = "block";
    chHair.src = "images/ch-hair03.png";
});

chHair3.addEventListener("click", () => {
    chHair.style.display = "block";
    chHair.src = "images/ch-hair04.png";
});

chMan0.addEventListener("click", () => {
    chMan.style.display = "block";
    chMan.src = "images/ch-man0.png";
});

chMan1.addEventListener("click", () => {
    chMan.style.display = "block";
    chMan.src = "images/ch-man1.png";
});

chMan2.addEventListener("click", () => {
    chMan.style.display = "block";
    chMan.src = "images/ch-man2.png";
});

chMan3.addEventListener("click", () => {
    chMan.style.display = "block";
    chMan.src = "images/ch-man3.png";
});

chShirt0.addEventListener("click", () => {
    chShirt.style.display = "block";
    chShirt.src = "images/ch-shirt01.png";
});

chShirt1.addEventListener("click", () => {
    chShirt.style.display = "block";
    chShirt.src = "images/ch-shirt02.png";
});

chShirt2.addEventListener("click", () => {
    chShirt.style.display = "block";
    chShirt.src = "images/ch-shirt03.png";
});

chShirt3.addEventListener("click", () => {
    chShirt.style.display = "block";
    chShirt.src = "images/ch-shirt04.png";
});

chAccessory0.addEventListener("click", () => {
    accessory0.style.display = "block";
    accessory0.style.zIndex = "2";
});

chAccessory1.addEventListener("click", () => {
    accessory1.style.display = "block";
    accessory1.style.zIndex = "1";
});

chAccessory2.addEventListener("click", () => {
    accessory2.style.display = "block";
});

chAccessory3.addEventListener("click", () => {
    accessory3.style.display = "block";
});

btn.addEventListener("click", () => {
    window.location.reload();
});