let myImage = document.getElementById("slideshow");
let images = ["images/landing/715491 (1).webp",
    "images/landing/1107525-food-meat-pizza-sausage-cuisine-dish-salt-cured-meat-italian-food-european-food-pizza-cheese-tarte-flamb-e-sicilian-pizza-pepperoni-italian-sausage.jpg",
    "images/landing/550873-food-fast-food.jpg",
    "images/landing/520223-Hot-Dog-French.jpg",
    "images/landing/456069-food-cheese-tomatoes-pizza.jpg",
    "images/landing/4587540-food-burgers-french-fries.jpg",
    "images/landing/1229282-fried-beef-steak.jpg"];
console.log(myImage);
console.log(images);

let i = 0;

function slideshow() {
    myImage.setAttribute("src", images[i]);


    if (i === images.length - 1) {
        i = 0;
    } else {
        i++;
    }

    setTimeout(() => {

        slideshow();

    }, 2000);
}
slideshow();


let yum = document.getElementById("yum");
let icons = document.getElementsByClassName("icons")[0];
console.log(yum);
console.log(icons);

yum.onclick = function () {
    icons.classList.toggle("hide");
}