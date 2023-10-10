for(let i = 1; i <= 64; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.classList.add("button");
    button.addEventListener("click",(event) => countClick(event,i));
    document.querySelector(".container").appendChild(button);
}
var count = 1;
function countClick(event,i) {
    if(count == i) {
        count++;
        // document.querySelector(".button").target.style.display = "hidden";
        event.target.style.visibility = "hidden";
    } else {
        alert("Wrong button");
    }
}