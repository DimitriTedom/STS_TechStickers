let wrapper = document.querySelector(".wrapper");
let template = document.querySelector("template");
let button = document.querySelector(".generate-btn");

const names = [
    "Dimitri", "Tafotsi", "SnowDev", "CodeNinja", "BugFixer", "Techie",
    "AI Enthusiast", "FullStackDev", "CloudMaster", "CryptoKing", 
    "OpenSourceFan", "JavaScriptJedi", "PythonPro", "DevOpsGuru", "UXWizard"
];

const colors = [
    "#2ecc71", "#3498db", "#9b59b6", "#e74c3c", "#f1c40f", "#16a085", "#1abc9c",
    "#2c3e50", "#95a5a6", "#34495e", "#ecf0f1", "#e67e22", "#f39c12", "#d35400",
    "#7f8c8d", "#8e44ad", "#2980b9", "#27ae60", "#c0392b", "#bdc3c7", "#ff6b6b",
    "#ffcc00", "#33cccc", "#660066", "#6699ff", "#99ff99", "#990000", "#ff0033",
    "#ff6600", "#0099cc", "#cc3399", "#3333cc", "#339933", "#990066", "#00ffcc",
    "#006666", "#6633cc", "#cc9966", "#66cc66", "#ff9999", "#99ccff", "#9966cc",
    "#66ccff", "#66cc99", "#ff6699", "#336699", "#99cc33", "#cc3333", "#33cc33"
];

function createSticker(name) {
    let div = template.content.querySelector(".container").cloneNode(true);
    let nameDiv = div.querySelector(".name");

    nameDiv.textContent = name;

    div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    div.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
    wrapper.appendChild(div);
}

// Now, lets Generate a random set of stickers
function generateStickers(count = 5) {
    wrapper.innerHTML = ""; // Clear the wrapper
    for (let i = 0; i < count; i++) {
        let randomName = names[Math.floor(Math.random() * names.length)];
        createSticker(randomName);
    }
}

// Initialize with 5 stickers
generateStickers();

// Add event listener for button
button.addEventListener("click", () => generateStickers());
