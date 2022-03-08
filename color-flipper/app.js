const colors = ["green", "red", "brown", "yellow", "blue", "pink", "purple", "black", "grey", "white"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // Obtenir un random number entre 0 et 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);


    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length) ;
}