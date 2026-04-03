// This file contains information about crops in the game Stardew Valley.
// This is the setup array for the seasons and maybe an additional bit for animal product in the future
const seasons = ["spring", "summer", "fall", "winter", "special"];

// values are in the format: [season, type, base value, growth time in days, regrowth time, fertized growth time (all 6), seed cost, joja cost, Sandy Cost]
const blueJazz = ["Blue Jazz", "Flower", 50, 7, 0, 6, 5, 4, 5, 4, 3, 30, 37, 0];
const carrot = ["Carrot", "Vegetable", 35, 3, 0, 2, 2, 2, 2, 1, 1, 0, 0, 0];
const cauliflower = ["Cauliflower", "Vegetable", 175, 12, 0, 10, 9, 8, 9, 7, 6, 80, 100, 0];
const garlic = ["Garlic", "Vegetable", 60, 4, 0, 3, 3, 2, 3, 2, 2, 40, 0, 0];
const greenBean = ["Green Bean", "Vegetable", 40, 10, 3, 8, 7, 6, 7, 6, 6, 60, 75, 0];
const kale = ["Kale", "Vegetable", 110, 6, 0, 5, 4, 4, 5, 4, 4, 70, 87, 0];
const parsnip = ["Parsnip", "Vegetable", 35, 4, 0, 3, 3, 2, 3, 2, 2, 20, 25, 0];
const potato = ["Potato", "Vegetable", 80, 6, 0, 5, 4, 4, 5, 4, 4, 50, 62, 0];
const rhubarb = ["Rhubarb", "Fruit", 220, 13, 0, 11, 9, 8, 10, 8, 7, 0, 0, 100]; 
const strawberry = ["Strawberry", "Fruit", 120, 8, 4, 7, 6, 5, 6, 5, 4, 100, 0, 0];
const tulip = ["Tulip", "Flower", 30, 6, 0, 5, 4, 4, 4, 3, 3, 20, 25, 0];
const rice = ["Rice", "Vegetable", 30, 8, 0, 7, 6, 5, 6, 5, 4, 40, 0, 0];

const blueberry = ["Blueberry", "Fruit", 50, 13, 4, 11, 9, 8, 10, 8, 7, 80, 0, 0];
const hops = ["Hops", "Vegetable", 25, 11, 1, 9, 8, 7, 8, 6, 6, 60, 75, 0];
const hotPepper = ["Hot Pepper", "Vegetable", 40, 5, 3, 4, 3, 3, 3, 3, 2, 40, 50, 0];
const melon = ["Melon", "Fruit", 250, 12, 0, 10, 9, 8, 9, 7, 6, 80, 100, 0];
const pineapple = ["Pineapple", "Fruit", 300, 14, 7, 12, 10, 9, 11, 9, 7, 0, 0, 0];
const poppy = ["Poppy", "Flower", 140, 7, 0, 6, 5, 4, 5, 4, 3, 100, 125, 0];
const radish = ["Radish", "Vegetable", 90, 6, 0, 5, 4, 4, 4, 3, 3, 40, 50, 0];
const redCabbage = ["Red Cabbage", "Vegetable", 260, 9, 0, 8, 6, 6, 7, 5, 5, 100, 0, 0];
const starfruit = ["Starfruit", "Fruit", 750, 13, 0, 11, 9, 8, 10, 8, 7, 0, 0, 400];
const summerSpangle = ["Summer Spangle", "Flower", 90, 8, 0, 7, 6, 5, 6, 5, 4, 50, 62, 0];
const summerSquash = ["Summer Squash", "Vegetable", 45, 6, 3, 5, 4, 4, 4, 3, 3, 0, 0, 0];
const taroRoot = ["Taro Root", "Vegetable", 100, 10, 0, 9, 7, 6, 8, 6, 5, 0, 0, 0];
const tomato = ["Tomato", "Vegetable", 60, 11, 4, 9, 8, 7, 8, 7, 6, 50, 62, 0];

const amaranth = ["Amaranth", "Vegetable", 150, 7, 0, 6, 5, 4, 5, 4, 3, 70, 87, 0];
const artichoke = ["Artichoke", "Vegetable", 160, 8, 0, 7, 6, 5, 6, 5, 4, 30, 0, 0];
const beet = ["Beet", "Vegetable", 100, 6, 0, 5, 4, 4, 4, 3, 3, 0, 0, 20];
const bokChoy = ["Bok Choy", "Vegetable", 80, 4, 0, 3, 3, 2, 3, 2, 2, 50, 62, 0];
const broccoli = ["Broccoli", "Vegetable", 7, 8, 4, 7, 6, 5, 6, 5, 4, 0, 0, 0];
const cranberries = ["Cranberries", "Fruit", 75, 7, 5, 6, 5, 4, 5, 4, 3, 240, 300, 0];
const eggplant = ["Eggplant", "Vegetable", 60, 5, 5, 4, 3, 3, 3, 3, 2, 20, 25, 0];
const fairyRose = ["Fairy Rose", "Flower", 290, 12, 0, 10, 9, 8, 9, 7, 6, 200, 250, 0];
const grape = ["Grape", "Fruit", 80, 10, 3, 8, 7, 6, 7, 6, 6, 60, 75, 0];
const pumpkin = ["Pumpkin", "Vegetable", 320, 13, 0, 11, 9, 8, 10, 8, 6, 100, 125, 0];
const sweetGemBerry = ["Sweet Gem Berry", "Fruit", 3000, 24, 0, 22, 18, 15, 22, 18, 15, 0, 0, -1];
const yam = ["Yam", "Vegetable", 160, 10, 0, 9, 7, 6, 7, 6, 5, 60, 75, 0];

const powdermelon = ["Powdermelon", "Fruit", 60, 7, 0, 6, 5, 4, 5, 4, 3, 0, 0, 0];

const ancientFruit = ["Ancient Fruit", "Fruit", 550, 28, 7, 25, 21, 18, 22, 18, 15, 0, 0, 0];
const cactusFruit = ["Cactus Fruit", "Fruit", 75, 12, 3, 10, 9, 8, 9, 7, 6, 0, 0, 150];
const coffee = ["Coffee Bean", "Fruit", 15, 10, 2, 8, 7, 6, 7, 6, 5, 0, 0, 0];
const corn = ["Corn", "Vegetable", 50, 14, 4, 12, 10, 9, 11, 9, 7, 150, 187, 0];
const sunflower = ["Sunflower", "Flower", 80, 8, 0, 7, 6, 5, 6, 5, 4, 200, 125, 0];
const wheat = ["Wheat", "Vegetable", 25, 4, 0, 3, 3, 2, 3, 2, 2, 10, 12, 0];

let springCrops = [blueJazz, carrot, cauliflower, garlic, greenBean, kale, parsnip, potato, rhubarb, strawberry, tulip, rice];
let summerCrops = [blueberry, hops, hotPepper, melon, pineapple, poppy, radish, redCabbage, starfruit, summerSpangle, summerSquash, taroRoot, tomato];
let fallCrops = [amaranth, artichoke, beet, bokChoy, broccoli, cranberries, eggplant, fairyRose, grape, pumpkin, sweetGemBerry, yam];
let winterCrops = [powdermelon];
let specialCrops = [ancientFruit, cactusFruit, coffee, corn, sunflower, wheat];

// These arrays hold the crop quality percentages for each fertilizer type. The first is normal quality, second silver, third gold, and fourth iridium. The values are in the format: [normal, silver, gold, iridium]
const noFertilizer = [[0.97, 0.02, 0.01, 0],
                      [0.91, 0.06, 0.03, 0],
                      [0.85, 0.1, 0.05, 0],   
                      [0.8, 0.13, 0.07, 0],
                      [0.75, 0.16, 0.09, 0],
                      [0.69, 0.2, 0.11, 0],
                      [0.64, 0.23, 0.13, 0],
                      [0.6, 0.25, 0.15, 0],
                      [0.55, 0.28, 0.17, 0],
                      [0.5, 0.31, 0.19, 0],
                      [0.46, 0.33, 0.21, 0],
                      [0.42, 0.35, 0.23, 0],
                      [0.38, 0.37, 0.25, 0],
                      [0.34, 0.39, 0.27, 0],
                      [0.3, 0.41, 0.29, 0]];

const basicFertilizer = [[0.88, 0.08, 0.04, 0],
                         [0.77, 0.15, 0.08, 0],
                         [0.68, 0.20, 0.12, 0],
                         [0.59, 0.26, 0.15, 0],
                         [0.50, 0.31, 0.19, 0],
                         [0.42, 0.35, 0.23, 0],
                         [0.35, 0.39, 0.26, 0],
                         [0.28, 0.42, 0.30, 0],
                         [0.22, 0.44, 0.34, 0],
                         [0.16, 0.47, 0.37, 0],
                         [0.15, 0.44, 0.41, 0],
                         [0.14, 0.41, 0.45, 0],
                         [0.13, 0.39, 0.48, 0],
                         [0.12, 0.36, 0.52, 0],
                         [0.11, 0.33, 0.56, 0]];

const qualityFertilizer = [[0.78, 0.14, 0.08, 0],
                           [0.64, 0.23, 0.13, 0],
                           [0.52, 0.30, 0.18, 0],
                           [0.40, 0.36, 0.24, 0],
                           [0.30, 0.41, 0.29, 0],
                           [0.21, 0.45, 0.34, 0],
                           [0.15, 0.45, 0.40, 0],
                           [0.14, 0.41, 0.45, 0],
                           [0.13, 0.37, 0.50, 0],
                           [0.11, 0.33, 0.56, 0],
                           [0.1, 0.29, 0.61, 0],
                           [0.09, 0.25, 0.66, 0],
                           [0.07, 0.21, 0.72, 0],
                           [0.06, 0.17, 0.77, 0],
                           [0.04, 0.13, 0.82, 0]];

const deluxeFertilizer = [[0, 0.84, 0.1, 0.06],
                          [0, 0.75, 0.16, 0.09],
                          [0, 0.66, 0.22, 0.13],
                          [0, 0.57, 0.27, 0.16],
                          [0, 0.49, 0.31, 0.2],
                          [0, 0.42, 0.35, 0.23],
                          [0, 0.35, 0.39, 0.27],
                          [0, 0.28, 0.42, 0.30],
                          [0, 0.22, 0.45, 0.34],
                          [0, 0.16, 0.47, 0.37],
                          [0, 0.11, 0.48, 0.41],
                          [0, 0.07, 0.49, 0.44],
                          [0, 0.03, 0.5, 0.47],
                          [0, 0, 0.49, 0.51],
                          [0, 0, 0.46, 0.55]];

function initializer() {
    

    let seasonSelect = document.getElementById("seasonSelect");
    for (var i = 0; i < seasons.length; i++) {
        let option = document.createElement("option");
        option.value = seasons[i];
        option.text = seasons[i].charAt(0).toUpperCase() + seasons[i].slice(1);
        seasonSelect.appendChild(option);
    }

    seasonSelectChanged(); 
    farmingLevelChanged();

    seasonSelect.addEventListener("change", function() {
        seasonSelectChanged();
    });

    let cropSelect = document.getElementById("cropSelect");
    cropSelect.addEventListener("change", function() {
        cropSelectChanged();
    });

    let farmingLevel = document.getElementById("farmingLevelNumber");
    farmingLevel.addEventListener("change", function() {
        farmingLevelChanged();
    });
}

function seasonSelectChanged() {
    let seasonSelect = document.getElementById("seasonSelect");
    let cropSelect = document.getElementById("cropSelect");
    let cropList = [];

    for (var i = cropSelect.options.length - 1; i >= 0; i--) {
        cropSelect.remove(i);
    }

    if (seasonSelect.value === "spring") {
        cropList = springCrops;
    } else if (seasonSelect.value === "summer") {
        cropList = summerCrops;
    } else if (seasonSelect.value === "fall") {
        cropList = fallCrops;
    } else if (seasonSelect.value === "winter") {
        cropList = winterCrops;
    } else if (seasonSelect.value === "special") {
        cropList = specialCrops;
    }

    for (var i = 0; i < cropList.length; i++) {
        let option = document.createElement("option");
        option.value = cropList[i][0];
        option.text = cropList[i][0];
        cropSelect.appendChild(option);
    }

    cropSelectChanged();
}

function cropSelectChanged() {
    let selectedSeason = document.getElementById("seasonSelect").value;
    let croplist = [];
    let element;

    if (selectedSeason === "spring") {
        croplist = springCrops;
    } else if (selectedSeason === "summer") {
        croplist = summerCrops;
    } else if (selectedSeason === "fall") {
        croplist = fallCrops;
    } else if (selectedSeason === "winter") {
        croplist = winterCrops;
    } else if (selectedSeason === "special") {
        croplist = specialCrops;
    }

    let selectedCropName = document.getElementById("cropSelect").value;
    let selectedCrop = null;

    for (var i = 0; i < croplist.length; i++) {
        if (croplist[i][0] === selectedCropName) {
            selectedCrop = croplist[i];
            break;
        }
    }

    let cropName = selectedCrop[0];
    let cropType = selectedCrop[1];
    let baseValue = selectedCrop[2];
    let growthTime = selectedCrop[3];
    let regrowthTime = selectedCrop[4];
    
    let pierreCost = selectedCrop[11];
    let jojaCost = selectedCrop[12];
    let sandyCost = selectedCrop[13];

    if (cropName === "Blue Jazz") {
        cropName = "Jazz";
    } else if (cropName === "Green Bean") {
        cropName = "Bean";
    } else if (cropName === "Ancient Fruit") {
        cropName = "Ancient";
    } else if (cropName === "Coffee Bean") {
        cropName = "Coffee";
    } else if (cropName === "Hot Pepper") {
        cropName = "Pepper";
    } else if (cropName === "Red Cabbage") {
        cropName = "Cabbage";
    } else if (cropName === "Summer Spangle") {
        cropName = "Spangle";
    } else if (cropName === "Summer Squash") {
        cropName = "Squash";
    } else if (cropName === "Bok Choy") {
        cropName = "BokChoy";
    } else if (cropName === "Fairy Rose") {
        cropName = "FairyRose";
    } else if (cropName === "Cactus Fruit") {
        cropName = "Cactus";
    } else if (cropName === "Taro Root") {
        cropName = "Taro";
    } else if (cropName === "Sweet Gem Berry") {
        cropName = "SweetGem";
    }

    if (regrowthTime > 0) {
        document.getElementById("regrows").checked = true;
        document.getElementById("regrowthtime").textContent = regrowthTime + " days";
    } else {
        document.getElementById("regrows").checked = false;
        document.getElementById("regrowthtime").textContent = "";
    }

    element = document.getElementById("seedImage");
    element.innerHTML = `<img src="images/Seed_${cropName}.png" alt="${cropName} Seed">`;

    element = document.getElementById("pierreCost");

    if (pierreCost === 0) {
        element.textContent = "Not Sold";
    } else {
        element.textContent = pierreCost + "g";
    }

    element = document.getElementById("jojaCost");
    if (jojaCost === 0) {
        element.textContent = "Not Sold";
    } else {
        element.textContent = jojaCost + "g";
    }

    element = document.getElementById("sandyCost");
    if (sandyCost === 0) {
        element.textContent = "Not Sold";
        document.getElementById("sandyIcon").innerHTML = '<img src="images/Sandy_Icon.png" alt="Sandy Cost">';
    } else if (sandyCost === -1) {
        element.textContent = "600 - 1000g";
        document.getElementById("sandyIcon").innerHTML = '<img src="images/Cart_Icon.png" alt="Sandy Cost">';
    } else {
        element.textContent = sandyCost + "g";
        document.getElementById("sandyIcon").innerHTML = '<img src="images/Sandy_Icon.png" alt="Sandy Cost">';
    }

    element = document.getElementById("normal");
    element.innerHTML = `<img src="images/Crop_${cropName}.png" alt="Base Value">`;

    element = document.getElementById("normalPrice");
    element.textContent = baseValue + "g";

    element = document.getElementById("silverPrice");
    element.textContent = Math.floor(baseValue * 1.25) + "g";

    element = document.getElementById("goldPrice");
    element.textContent = Math.floor(baseValue * 1.5) + "g";

    element = document.getElementById("iridiumPrice");
    element.textContent = Math.floor(baseValue * 2) + "g";

    element = document.getElementById("tillerNormal");
    element.textContent = Math.floor(baseValue * 1.1) + "g";

    element = document.getElementById("tillerSilver");
    element.textContent = Math.floor(baseValue * 1.1 * 1.25) + "g";

    element = document.getElementById("tillerGold");
    element.textContent = Math.floor(baseValue * 1.1 * 1.5) + "g";

    element = document.getElementById("tillerIridium");
    element.textContent = Math.floor(baseValue * 1.1 * 2) + "g";

    artisanPriceUpdate();
    farmingLevelChanged();
}

function artisanPriceUpdate() {
    let selectedSeason = document.getElementById("seasonSelect").value;
    let croplist = [];
    let element;

    if (selectedSeason === "spring") {
        croplist = springCrops;
    } else if (selectedSeason === "summer") {
        croplist = summerCrops;
    } else if (selectedSeason === "fall") {
        croplist = fallCrops;
    } else if (selectedSeason === "winter") {
        croplist = winterCrops;
    } else if (selectedSeason === "special") {
        croplist = specialCrops;
    }

    let selectedCropName = document.getElementById("cropSelect").value;
    let selectedCrop = null;

    for (var i = 0; i < croplist.length; i++) {
        if (croplist[i][0] === selectedCropName) {
            selectedCrop = croplist[i];
            break;
        }
    }

    let crop = selectedCrop[0];
    let cropType = selectedCrop[1];
    let baseValue = selectedCrop[2];

    if (crop === "Wheat") {

        element = document.getElementById("kegNormalPrice");
        document.getElementById("kegNormal").innerHTML = `<img src="images/Icon_Beer.png" alt="keg" style="width:48px;">`;
        element.textContent = Math.floor(200) + "g";

        element = document.getElementById("kegArtisanPrice");
        element.textContent = Math.floor(200 * 1.4) + "g";

        element = document.getElementById("beeNormalPrice");
        element.textContent = "N/A";

        element = document.getElementById("jarNormalPrice");
        document.getElementById("jarNormal").innerHTML = `<img src="images/Icon_Pickles.png" alt="Jar" style="width:48px;">`;
        element.textContent = Math.floor(50 + baseValue * 1.5) + "g";

        element = document.getElementById("jarArtisanPrice");
        element.textContent = Math.floor((50 + baseValue * 1.5) * 1.4) + "g";

        element = document.getElementById("beeArtisanPrice");
        element.textContent = "N/A";

    } else if (crop === "Rice") {
        element = document.getElementById("kegNormalPrice");
        document.getElementById("kegNormal").innerHTML = `<img src="images/Icon_Vinegar.png" alt="keg" style="width:48px;">`;
        element.textContent = Math.floor(100) + "g";

        element = document.getElementById("kegArtisanPrice");
        element.textContent = Math.floor(100) + "g";

        element = document.getElementById("beeNormalPrice");
        element.textContent = "N/A";

        element = document.getElementById("jarNormalPrice");
        element.textContent = "N/A";

        element = document.getElementById("jarArtisanPrice");
        element.textContent = "N/A";

        element = document.getElementById("beeArtisanPrice");
        element.textContent = "N/A";

    } else if (crop === "Coffee Bean") {
        element = document.getElementById("kegNormalPrice");
        document.getElementById("kegNormal").innerHTML = `<img src="images/Icon_Coffee.png" alt="keg" style="width:48px;">`;
        element.textContent = Math.floor(150) + "g";

        element = document.getElementById("kegArtisanPrice");
        element.textContent = Math.floor(150) + "g";

        element = document.getElementById("beeNormalPrice");
        element.textContent = "N/A";

        element = document.getElementById("jarNormalPrice");
        element.textContent = "N/A";

        element = document.getElementById("jarArtisanPrice");
        element.textContent = "N/A";

        element = document.getElementById("beeArtisanPrice");
        element.textContent = "N/A";

    } else if (crop === "Hops") {
        element = document.getElementById("kegNormalPrice");
        document.getElementById("kegNormal").innerHTML = `<img src="images/Icon_Pale_Ale.png" alt="keg" style="width:48px;">`;
        element.textContent = Math.floor(300) + "g";

        element = document.getElementById("kegArtisanPrice");
        element.textContent = Math.floor(300 * 1.4) + "g";

        element = document.getElementById("beeNormalPrice");
        element.textContent = "N/A";

        element = document.getElementById("jarNormalPrice");
        document.getElementById("jarNormal").innerHTML = `<img src="images/Icon_Pickles.png" alt="Jar" style="width:48px;">`;
        element.textContent = Math.floor(50 + baseValue * 2) + "g";

        element = document.getElementById("jarArtisanPrice");
        element.textContent = Math.floor((50 + baseValue * 2) * 1.4) + "g";

        element = document.getElementById("beeArtisanPrice");
        element.textContent = "N/A";

    } else if (cropType === "Vegetable") {
        element = document.getElementById("kegNormalPrice");
        document.getElementById("kegNormal").innerHTML = `<img src="images/Icon_Juice.png" alt="keg" style="width:48px;">`;
        element.textContent = Math.floor(baseValue * 2.25) + "g";

        element = document.getElementById("kegArtisanPrice");
        element.textContent = Math.floor(baseValue * 2.25 * 1.4) + "g";

        element = document.getElementById("beeNormalPrice");
        element.textContent = "N/A";

        element = document.getElementById("jarNormalPrice");
        document.getElementById("jarNormal").innerHTML = `<img src="images/Icon_Pickles.png" alt="Jar" style="width:48px;">`;
        element.textContent = Math.floor(50 + baseValue * 2) + "g";

        element = document.getElementById("jarArtisanPrice");
        element.textContent = Math.floor((50 + baseValue * 2) * 1.4) + "g";

        element = document.getElementById("beeArtisanPrice");
        element.textContent = "N/A";

    } else if (cropType === "Fruit") {
        element = document.getElementById("kegNormalPrice");
        document.getElementById("kegNormal").innerHTML = `<img src="images/Icon_Wine.png" alt="keg" style="width:48px;">`;
        element.textContent = Math.floor(baseValue * 3) + "g";

        element = document.getElementById("kegArtisanPrice");
        element.textContent = Math.floor(baseValue * 3 * 1.4) + "g";

        element = document.getElementById("beeNormalPrice");
        element.textContent = "N/A";

        element = document.getElementById("jarNormalPrice");
        document.getElementById("jarNormal").innerHTML = `<img src="images/Icon_Jelly.png" alt="Jar" style="width:48px;">`;
        element.textContent = Math.floor(50 + baseValue * 2) + "g";

        element = document.getElementById("jarArtisanPrice");
        element.textContent = Math.floor((50 + baseValue * 2) * 1.4) + "g";

        element = document.getElementById("beeArtisanPrice");
        element.textContent = "N/A";

    } else if (cropType === "Flower") {
        element = document.getElementById("kegNormalPrice");
        document.getElementById("kegNormal").innerHTML = `<img src="images/Icon_Mead.png" alt="keg" style="width:48px;">`;
        element.textContent = Math.floor(300) + "g";

        element = document.getElementById("kegArtisanPrice");
        element.textContent = Math.floor(300 * 1.4) + "g";

        element = document.getElementById("beeNormalPrice");
        element.textContent = Math.floor(100 + (baseValue * 2)) + "g";

        element = document.getElementById("jarNormalPrice");
        element.textContent = "N/A";

        element = document.getElementById("jarArtisanPrice");
        element.textContent = "N/A";

        element = document.getElementById("beeArtisanPrice");
        element.textContent = Math.floor((100 + (baseValue * 2)) * 1.4) + "g";
    }
}

function farmingLevelChanged() {
    let element = document.getElementById("farmingLevelNumber");
    let level = parseInt(element.value);
    let calculation;
    let days;

    let selectedSeason = document.getElementById("seasonSelect").value;
    let croplist = [];

    if (selectedSeason === "spring") {
        croplist = springCrops;
    } else if (selectedSeason === "summer") {
        croplist = summerCrops;
    } else if (selectedSeason === "fall") {
        croplist = fallCrops;
    } else if (selectedSeason === "winter") {
        croplist = winterCrops;
    } else if (selectedSeason === "special") {
        croplist = specialCrops;
    }

    let selectedCropName = document.getElementById("cropSelect").value;
    let selectedCrop = null;

    for (var i = 0; i < croplist.length; i++) {
        if (croplist[i][0] === selectedCropName) {
            selectedCrop = croplist[i];
            break;
        }
    }

    let cropName = selectedCrop[0];
    let cropType = selectedCrop[1];
    let baseValue = selectedCrop[2];
    let growthTime = selectedCrop[3];
    let regrowthTime = selectedCrop[4];
    let speedTime = selectedCrop[5];
    let deluxeSpeedTime = selectedCrop[6];
    let hyperSpeedTime = selectedCrop[7];
    let speedAgTime = selectedCrop[8];
    let deluxeSpeedAgTime = selectedCrop[9];
    let hyperSpeedAgTime = selectedCrop[10];    
    let pierreCost = selectedCrop[11];
    let jojaCost = selectedCrop[12];
    let sandyCost = selectedCrop[13];

    if (cropName === "Blue Jazz") {
        cropName = "Jazz";
    } else if (cropName === "Green Bean") {
        cropName = "Bean";
    } else if (cropName === "Ancient Fruit") {
        cropName = "Ancient";
    } else if (cropName === "Coffee Bean") {
        cropName = "Coffee";
    } else if (cropName === "Hot Pepper") {
        cropName = "Pepper";
    } else if (cropName === "Red Cabbage") {
        cropName = "Cabbage";
    } else if (cropName === "Summer Spangle") {
        cropName = "Spangle";
    } else if (cropName === "Summer Squash") {
        cropName = "Squash";
    } else if (cropName === "Bok Choy") {
        cropName = "BokChoy";
    } else if (cropName === "Fairy Rose") {
        cropName = "FairyRose";
    } else if (cropName === "Cactus Fruit") {
        cropName = "Cactus";
    } else if (cropName === "Taro Root") {
        cropName = "Taro";
    } else if (cropName === "Sweet Gem Berry") {
        cropName = "SweetGem";
    }

    document.getElementById("farmLevelText").textContent = "Farm Level " + level;

    let noFertilizerChance = noFertilizer[level];
    let basicFertilizerChance = basicFertilizer[level];
    let qualityFertilizerChance = qualityFertilizer[level];
    let deluxeFertilizerChance = deluxeFertilizer[level];

    if (regrowthTime === 0) {
        element = document.getElementById("noFertilizerProfit");
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3])) / growthTime;
        element.textContent = calculation.toFixed(2) + "g";
        document.getElementById("noFertilizerTillerProfit").textContent = (calculation * 1.1).toFixed(2) + "g"; 

        element = document.getElementById("basicFertilizerProfit");
        calculation = ((baseValue * basicFertilizerChance[0]) + (baseValue * 1.25 * basicFertilizerChance[1]) + (baseValue * 1.5 * basicFertilizerChance[2]) + (baseValue * 2 * basicFertilizerChance[3])) / growthTime;
        element.textContent = calculation.toFixed(2) + "g";
        document.getElementById("basicFertilizerTillerProfit").textContent = (calculation * 1.1).toFixed(2) + "g";


        element = document.getElementById("qualityFertilizerProfit");
        calculation = ((baseValue * qualityFertilizerChance[0]) + (baseValue * 1.25 * qualityFertilizerChance[1]) + (baseValue * 1.5 * qualityFertilizerChance[2]) + (baseValue * 2 * qualityFertilizerChance[3])) / growthTime;
        element.textContent = calculation.toFixed(2) + "g";
        document.getElementById("qualityFertilizerTillerProfit").textContent = (calculation * 1.1).toFixed(2) + "g";

        element = document.getElementById("deluxeFertilizerProfit");
        calculation = ((baseValue * deluxeFertilizerChance[0]) + (baseValue * 1.25 * deluxeFertilizerChance[1]) + (baseValue * 1.5 * deluxeFertilizerChance[2]) + (baseValue * 2 * deluxeFertilizerChance[3])) / growthTime;
        element.textContent = calculation.toFixed(2) + "g";
        document.getElementById("deluxeFertilizerTillerProfit").textContent = (calculation * 1.1).toFixed(2) + "g";

        element = document.getElementById("speedProfit");
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3])) / speedTime;
        element.textContent = calculation.toFixed(2) + "g";
        document.getElementById("speedTillerProfit").textContent = (calculation * 1.1).toFixed(2) + "g";

        element = document.getElementById("speedDeluxeProfit");
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3])) / deluxeSpeedTime;
        element.textContent = calculation.toFixed(2) + "g";
        document.getElementById("speedDeluxeTillerProfit").textContent = (calculation * 1.1).toFixed(2) + "g";

        element = document.getElementById("speedHyperProfit");
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3])) / hyperSpeedTime;
        element.textContent = calculation.toFixed(2) + "g";
        document.getElementById("speedHyperTillerProfit").textContent = (calculation * 1.1).toFixed(2) + "g";

        element = document.getElementById("noFertilizerAgriculturistProfit");
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3])) / speedTime;
        element.textContent = (calculation * 1.1).toFixed(2) + "g";

        element = document.getElementById("basicFertilizerAgriculturistProfit");
        calculation = ((baseValue * basicFertilizerChance[0]) + (baseValue * 1.25 * basicFertilizerChance[1]) + (baseValue * 1.5 * basicFertilizerChance[2]) + (baseValue * 2 * basicFertilizerChance[3])) / speedTime;
        element.textContent = (calculation * 1.1).toFixed(2) + "g";

        element = document.getElementById("qualityFertilizerAgriculturistProfit");
        calculation = ((baseValue * qualityFertilizerChance[0]) + (baseValue * 1.25 * qualityFertilizerChance[1]) + (baseValue * 1.5 * qualityFertilizerChance[2]) + (baseValue * 2 * qualityFertilizerChance[3])) / speedTime;
        element.textContent = (calculation * 1.1).toFixed(2) + "g";

        element = document.getElementById("deluxeFertilizerAgriculturistProfit");
        calculation = ((baseValue * deluxeFertilizerChance[0]) + (baseValue * 1.25 * deluxeFertilizerChance[1]) + (baseValue * 1.5 * deluxeFertilizerChance[2]) + (baseValue * 2 * deluxeFertilizerChance[3])) / speedTime;
        element.textContent = (calculation * 1.1).toFixed(2) + "g";

        element = document.getElementById("speedAgriculturistProfit");
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3])) / speedAgTime;
        element.textContent = (calculation * 1.1).toFixed(2) + "g";
        
        element = document.getElementById("speedDeluxeAgriculturistProfit");
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3])) / deluxeSpeedAgTime;
        element.textContent = (calculation * 1.1).toFixed(2) + "g";

        element = document.getElementById("speedHyperAgriculturistProfit");
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3])) / hyperSpeedAgTime;
        element.textContent = (calculation * 1.1).toFixed(2) + "g";
    } else {
        let daymax = 28;

        if (selectedCrop[0] === "Ancient Fruit") {
                daymax = 84;
        } else if (selectedCrop[0] === "Coffee Bean") {
                daymax = 56;
        } else if (selectedCrop[0] === "Cactus Fruit") {
                 daymax = 112;
        } else if (selectedCrop[0] === "Corn") {
                 daymax = 56;
        }

        element = document.getElementById("noFertilizerProfit");
        days = growthTime + regrowthTime;
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation / daymax).toFixed(2) + "g";
        document.getElementById("noFertilizerTillerProfit").textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";

        element = document.getElementById("basicFertilizerProfit");
        days = growthTime + regrowthTime;
        calculation = ((baseValue * basicFertilizerChance[0]) + (baseValue * 1.25 * basicFertilizerChance[1]) + (baseValue * 1.5 * basicFertilizerChance[2]) + (baseValue * 2 * basicFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * basicFertilizerChance[0]) + (baseValue * 1.25 * basicFertilizerChance[1]) + (baseValue * 1.5 * basicFertilizerChance[2]) + (baseValue * 2 * basicFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation / daymax).toFixed(2) + "g";
        document.getElementById("basicFertilizerTillerProfit").textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";

        element = document.getElementById("qualityFertilizerProfit");
        days = growthTime + regrowthTime;
        calculation = ((baseValue * qualityFertilizerChance[0]) + (baseValue * 1.25 * qualityFertilizerChance[1]) + (baseValue * 1.5 * qualityFertilizerChance[2]) + (baseValue * 2 * qualityFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * qualityFertilizerChance[0]) + (baseValue * 1.25 * qualityFertilizerChance[1]) + (baseValue * 1.5 * qualityFertilizerChance[2]) + (baseValue * 2 * qualityFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation / daymax).toFixed(2) + "g";
        document.getElementById("qualityFertilizerTillerProfit").textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";

        element = document.getElementById("deluxeFertilizerProfit");
        days = growthTime + regrowthTime;
        calculation = ((baseValue * deluxeFertilizerChance[0]) + (baseValue * 1.25 * deluxeFertilizerChance[1]) + (baseValue * 1.5 * deluxeFertilizerChance[2]) + (baseValue * 2 * deluxeFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * deluxeFertilizerChance[0]) + (baseValue * 1.25 * deluxeFertilizerChance[1]) + (baseValue * 1.5 * deluxeFertilizerChance[2]) + (baseValue * 2 * deluxeFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation / daymax).toFixed(2) + "g";
        document.getElementById("deluxeFertilizerTillerProfit").textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";

        element = document.getElementById("speedProfit");
        days = speedTime + regrowthTime;
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation / daymax).toFixed(2) + "g";
        document.getElementById("speedTillerProfit").textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";

        element = document.getElementById("speedDeluxeProfit");
        days = deluxeSpeedTime + regrowthTime;
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation / daymax).toFixed(2) + "g";
        document.getElementById("speedDeluxeTillerProfit").textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";

        element = document.getElementById("speedHyperProfit");
        days = hyperSpeedTime + regrowthTime;
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation / daymax).toFixed(2) + "g";
        document.getElementById("speedHyperTillerProfit").textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";
        
        element = document.getElementById("noFertilizerAgriculturistProfit");
        days = speedTime + regrowthTime;
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";

        element = document.getElementById("basicFertilizerAgriculturistProfit");
        days = speedTime + regrowthTime;
        calculation = ((baseValue * basicFertilizerChance[0]) + (baseValue * 1.25 * basicFertilizerChance[1]) + (baseValue * 1.5 * basicFertilizerChance[2]) + (baseValue * 2 * basicFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * basicFertilizerChance[0]) + (baseValue * 1.25 * basicFertilizerChance[1]) + (baseValue * 1.5 * basicFertilizerChance[2]) + (baseValue * 2 * basicFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";

        element = document.getElementById("qualityFertilizerAgriculturistProfit");
        days = speedTime + regrowthTime;
        calculation = ((baseValue * qualityFertilizerChance[0]) + (baseValue * 1.25 * qualityFertilizerChance[1]) + (baseValue * 1.5 * qualityFertilizerChance[2]) + (baseValue * 2 * qualityFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * qualityFertilizerChance[0]) + (baseValue * 1.25 * qualityFertilizerChance[1]) + (baseValue * 1.5 * qualityFertilizerChance[2]) + (baseValue * 2 * qualityFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";

        element = document.getElementById("deluxeFertilizerAgriculturistProfit");
        days = speedTime + regrowthTime;
        calculation = ((baseValue * deluxeFertilizerChance[0]) + (baseValue * 1.25 * deluxeFertilizerChance[1]) + (baseValue * 1.5 * deluxeFertilizerChance[2]) + (baseValue * 2 * deluxeFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * deluxeFertilizerChance[0]) + (baseValue * 1.25 * deluxeFertilizerChance[1]) + (baseValue * 1.5 * deluxeFertilizerChance[2]) + (baseValue * 2 * deluxeFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";

        element = document.getElementById("speedAgriculturistProfit");
        days = speedAgTime + regrowthTime;
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";
        
        element = document.getElementById("speedDeluxeAgriculturistProfit");
        days = deluxeSpeedAgTime + regrowthTime;
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";

        element = document.getElementById("speedHyperAgriculturistProfit");
        days = hyperSpeedAgTime + regrowthTime;
        calculation = ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));

        while (days < daymax) {
            calculation += ((baseValue * noFertilizerChance[0]) + (baseValue * 1.25 * noFertilizerChance[1]) + (baseValue * 1.5 * noFertilizerChance[2]) + (baseValue * 2 * noFertilizerChance[3]));
            days += regrowthTime;
        }
        element.textContent = (calculation * 1.1 / daymax).toFixed(2) + "g";
    }
}