'use strict';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.addEventListener("mousemove", function (event) {
    let blob = document.getElementById("blob");
    let x = event.clientX - (blob.clientWidth / 2);
    let y = event.clientY - (blob.clientHeight / 2);
    blob.style.left = x + "px";
    blob.style.top = y + "px";
    blob.style.opacity = 1;
});

// Set the cursor to be in the center of the blob
document.addEventListener("mousemove", function (event) {
    let x = event.clientX - blob.offsetWidth / 2;
    let y = event.clientY - blob.offsetHeight / 2;
    blob.style.left = x + "px";
    blob.style.top = y + "px";
    blob.style.cursor = "none";
    blob.style.opacity = 1;
});
