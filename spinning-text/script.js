const words = "Hello There! "; // add more words as needed 

const ANIMATION_DUR = 4000; // ms

// separate each character into its own div
const characters = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerHTML = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DUR / 16) - offset}ms`;
        return div;
    }

    document.getElementById("spiral").append(createElement(0));
    document
        .getElementById("spiral2")
        .append(createElement(-1 * (ANIMATION_DUR / 2)));
})