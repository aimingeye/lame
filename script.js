var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var reset = document.getElementById("reset");
var c1 = "#00d9ff";
var c2 = "#ffe600";

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
// console.log(color1.value);
function setGradient(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value
    +", "
    +color2.value
    +")";

    css.textContent = body.style.background +";";
}
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

reset.addEventListener("click", function(){
    body.style.background = "linear-gradient(to right, "+c1+" , "+ c2+")";
    css.textContent = body.style.background +";";
    color1.value = c1;
    color2.value = c2;
});