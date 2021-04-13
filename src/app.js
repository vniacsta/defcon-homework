// carousel action
let myCarousel = document.querySelector("#myCarousel");
let carousel = new bootstrap.Carousel(myCarousel);

// shows block after clicking btn
function showAndHideForm() {
    let unveil = document.getElementById("surprise");

    if (unveil.style.display == "none") {
        unveil.style.display = "block";
        window.scrollTo(0, document.body.scrollHeight);
    } else {
        unveil.style.display = "none";
    }
}
