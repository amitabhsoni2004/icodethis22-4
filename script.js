let task = document.querySelector(".task");
let range = document.getElementById("range");
let rangeValue = document.getElementById("rangeValue"); // Grab the span where the value will be displayed

range.addEventListener("change", () => {
    rangeValue.innerHTML = `${range.value}%`; // Update the span with the current value of the slider
});
document.getElementById('range').addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, green -50%, aqua ${value}%, #101445 ${value}%)`;
});

let svg = document.querySelector(".svg");
svg.style.position = "relative";
let a = 0;
let title; // Declaring the 'title' variable outside the event listener to make it accessible

svg.addEventListener("click", () => {
    if (a < 1) {
        title = document.createElement("span");
        title.innerHTML = "More";
        svg.appendChild(title);
        title.style.position = "absolute";
        title.style.display = "flex";
        adjustTitlePosition(); // Adjust the position initially
        
        title.style.borderRadius = "8px";
        title.style.cursor = "pointer";
        title.style.backgroundColor = "#111648";
        title.style.border = "2px solid white";
        title.style.padding = "8px 20px";
        a++;
    } else {
        title.style.display = title.style.display === "none" ? "flex" : "none"; // Toggle the display property
    }

    title.addEventListener("click", () => {
        window.open("https://www.google.com", "_blank"); // Redirecting to Google in a new tab
    });
});

// Event listener to adjust title position when window is resized
window.addEventListener("resize", adjustTitlePosition);

function adjustTitlePosition() {
    if (window.innerWidth >= 767) {
        title.style.top = "-20px";
        title.style.left = "40px";
    } else {
        title.style.top = "-60px";
        title.style.left = "-40px";
    }
}
