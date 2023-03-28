// Add blob to the body
var blob = document.createElement("div");
blob.classList.add("blob");
document.body.appendChild(blob);

// Update blob position on mouse move
document.addEventListener("mousemove", function(e) {
	blob.style.left = e.clientX + "px";
	blob.style.top = e.clientY + "px";
});