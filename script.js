// List of possible road trip items to spot
const items = [
    "Red Car", "Cow", "Bridge", "Gas Station", "Highway Sign",
    "Truck", "Mountain", "Lake", "Farm", "Birds",
    "Windmill", "Restaurant", "Rest Area", "Animal Crossing Sign", "Speed Limit Sign",
    "Tree", "Building", "Tunnel", "Bicycle", "Large Billboard",
    "School Bus", "Stop Sign", "Dirt Road", "Desert", "Train",
    "Overpass", "Railroad Tracks", "Barn", "Airport", "Hotel",
    "Wind Turbine", "River", "Traffic Light", "Farm Animals", "Cattle",
    "Sunset", "Sunrise", "Palm Tree", "Snow", "Ice", 
    "Bridge Over Water", "Cliff", "Snowplow", "Power Lines", "Lighthouse", 
    "Traffic Jam", "Gas Pump", "Fast Food Sign", "Hotel Sign", "RV",
    "Motorcycle", "Caravan", "Convertible", "Bike Lane", "Rest Stop",
    "Water Tower", "Waterfall", "Cactus", "Campground", "Mountain Peak", 
    "City Skyline", "Windshield Wiper", "Freeway", "Turnpike", "Rain",
    "Wildflowers", "Hiking Trail", "Restroom Sign", "Antique Shop", "Diner", 
    "Farm Stand", "Cemetery", "Construction Zone", "No Parking Sign", "Public Bus",
    "Gas Station Sign", "Bumper Sticker", "Highway Patrol", "Snow Chains", "Billboard Advertisement",
    "Toll Booth", "Road Construction", "Cemetery Sign", "Speed Bump", "Parking Lot", 
    "Snowman", "Fishing Pond", "Campfire", "Trailhead", "Mountain Stream", 
    "Wildlife Crossing", "Motel", "Roadkill", "Field of Flowers", "Tall Grass",
    "Pickup Truck", "Horse", "Sand Dunes", "Cave", "Lookout Point", 
    "Lumber Yard", "Apple Orchard", "Cherry Blossom Tree", "Windmill Field", "Apple Pie Sign", 
    "Rest Area Picnic Table", "Billboard with Animals", "Car Dealership", "Trailer Park", "Tire Shop", 
    "Oil Rig", "Chevron Sign", "Deserted Gas Station", "Seagulls", "Country Road", 
    "Public Park", "Filling Station", "Wooden Fence", "Hailstorm", "Potholes", 
    "Camping Tent", "Park Ranger", "Luggage Rack", "Route 66 Sign", "Canoe", 
    "Orange Grove", "Old Barn", "Barnyard Animals", "Goat", "Pig Pen", 
    "Wind Chimes", "Camping Stove", "Lake Cabin", "Forest Trail", "Pine Trees", 
    "Jet Ski", "Lakeside Bench", "National Park Sign", "Highway Exit", "Gas Station Attendant", 
    "Phone Booth", "Car Tire", "Canoe Rental", "Old Truck", "Ski Resort", 
    "Trail Sign", "Maple Trees", "Timber", "Truck Stop", "Mountain Pass", 
    "Luxury Car", "Fishing Boat", "Grocery Store", "Vegetable Stand", "Hiking Backpack", 
    "Solar Panels", "Barn Door", "Pick-Up Camper", "Vintage Car", "Caravan Park", 
    "Lighthouse Keeper", "Boardwalk", "Volcano", "Farmhouse", "Camping Gear", 
    "Wood Cabin", "Snowmobile", "Horse-Drawn Wagon", "Wild Turkeys", "Highway Sign with Arrow", 
    "Sunflower Field", "Blue Sky", "River Boat", "Cyclist", "Lakeshore", 
    "Mountain Climber", "Treehouse", "Wooden Bridge", "Rocky Road", "Crosswalk", 
    "Antique Car", "Pinecone", "Car Wash", "Country Store", "Rustic Sign", 
    "Weather Vane", "Street Vendor", "Ice Cream Truck", "Plowed Field", "Cattle Drive", 
    "Storm Clouds", "Bicycle Rack", "Water Fountain", "Bridge Overpass", "Rodeo", 
    "Gravel Road", "Snow Tires", "Driving Gloves", "Tourist Bus", "Vintage Road Sign", 
    "Farm Gate", "Stone Wall", "Bicycle Path", "Windmill Farm", "Paved Path", 
    "Motorhome", "Roadside Attraction", "Campfire Smoke", "Rural Mailbox", "Roadside Stand", 
    "Windbreaker Jacket", "Snowplow Truck", "House on Hill", "Gravel Pit", "Nature Preserve", 
    "Wheat Field", "Scenic Overlook", "Oil Change Sign", "Silo", "Family Picnic", 
    "Frozen Lake", "Horseback Riding", "Track and Field", "Route 66 Road", "Mini Mart", 
    "Cornfield", "Freight Train", "Mountain Bike", "Rest Area Coffee Shop", "Summer Camp", 
    "Roller Coaster", "Old Mill", "Lakefront Property", "Farm Market", "Pumpkin Patch", 
    "Mail Truck", "Sunroof", "Gopher", "Motorcycle Helmet", "Adventure Trail", 
    "Tugboat", "Bait Shop", "Foggy Road", "Canoeing", "Salt Flats", 
    "Highway Bridge", "Barnyard", "Beetle Car", "Dune Buggy", "Mountain Range", 
    "Lake View", "Stone Steps", "Country Lane", "Horse Trailer", "Countryside", 
    "Historic Site", "Wagon Wheel", "Farm Equipment", "Picnic Basket", "Cherry Trees", 
    "Rest Area Trash Can", "Windmill on Farm", "Fire Pit", "Country Road Sign", "Greenhouse", 
    "Lumberjack", "Snowfall", "Farmhouse Porch", "Snowmobile Trail", "Fruit Orchard", 
    "Field of Cows", "Butterfly", "Duck Pond", "Old Post Office", "Rustic Cabin", 
    "Climbing Wall", "Horse Stable", "Shooting Star", "Camping Lantern", "Bicycle Helmet", 
    "Roadside Motel", "Mountain Path", "Giant Rock", "Cowboy Hat", "Moonlit Road", 
    "Icy Road", "Rusty Fence", "Pine Forest", "Travel Trailer", "Yurt", 
    "Farmers Market Sign", "Windmill Blade", "Sunset View", "Country Billboard", "Vintage Gas Pump", 
    "City Limits", "Wooden Sign", "Old Church", "Rural Church", "Country Drive", 
    "Historic House", "Rustic Road", "Steamboat", "Roadside Farm Stand", "Goose Crossing", 
    "Bison", "Bicycle Trail", "Train Tracks", "Red Barn", "Lake Dock", 
    "Pond", "Grassy Hill", "Vacation Home", "Wooden Fence Post", "Reindeer", 
    "Wagon Trail", "Picnic Spot", "Stargazing", "Misty Morning", "Bridge Across River"
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
