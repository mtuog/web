// document.getElementById("red").addEventListener("click", function() {
//     changeColor("red");
// });

document.getElementById("red").addEventListener("click",function () {
    changeColor("red");});
document.getElementById("green").addEventListener("click", function() {
    changeColor("green");
});

document.getElementById("blue").addEventListener("click", function() {
    changeColor("blue");
});

document.getElementById("yellow").addEventListener("click", function() {
    changeColor("yellow");
});

document.getElementById("purple").addEventListener("click", function() {
    changeColor("purple");
});

function changeColor(color) {
    document.body.style.backgroundColor = color;
}
