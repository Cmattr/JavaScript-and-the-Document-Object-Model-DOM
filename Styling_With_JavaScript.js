function highlight() {
    document.getElementById("box").classList.add("highlighted");
}

function changeColor() {
    document.getElementById("box2").classList.add("colorChange");
}

function changeColorBack() {
    document.getElementById("box2").classList.add("colorChange2");
}

function changeBackgroundColor() {
    document.getElementById("box3").classList.add("changeBackground");
}

function changePageColor(event) {
    event.preventDefault(); 
    document.body.classList.add("changePageBackground");
}