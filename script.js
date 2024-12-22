// List of possible road trip items to spot
const items = [
    "Red Car", "Cow", "Bridge", "Gas Station", "Highway Sign",
    "Truck", "Mountain", "Lake", "Farm", "Birds",
    "Windmill", "Restaurant", "Rest Area", "Animal Crossing Sign", "Speed Limit Sign",
    "Tree", "Building", "Tunnel", "Bicycle", "Large Billboard"
];

// Function to generate a randomized bingo card
function generateBingoCard() {
    const bingoCard = document.getElementById("bingoCard");
    bingoCard.innerHTML = '';  // Clear any previous card
    let shuffledItems = shuffleArray([...items]);
    
    // Create the bingo card grid
    for (let i = 0; i < 25; i++) {
        const item = shuffledItems[i] || "";
        const div = document.createElement("div");
        div.classList.add("bingo-item");
        div.textContent = item;
        div.onclick = () => toggleCheck(div);
        bingoCard.appendChild(div);
    }
}

// Function to shuffle the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Function to toggle check state on an item
function toggleCheck(item) {
    item.classList.toggle("checked");
}

// Start button functionality
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("startButton").classList.add("hidden");
    generateBingoCard();
    document.getElementById("bingoCard").classList.remove("hidden");
});
