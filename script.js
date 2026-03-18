/* 
  script.js - ZutatenZirkus - Drachenatem | Recipe Website
   Míriam Domínguez Martínez - 18.03.2026
*/

/* 
  STEP 1: CREATE VARIABLES
*/

let portionsmenge = 1;

// The three arrays
let zutaten   = ["Huhn", "Currypulver", "Kokosmilch", "Ingwer", "Zwiebel", "Reis", "Zitronensaft", "Chili"];
let mengen    = [1, 10, 250, 2, 1, 200, 20, 0.5];
let einheiten = ["Stk.", "g", "ml", "ml", "Stk.", "g", "ml", "g"];

// Print index 0 of each array
console.log(zutaten[0]);   // "Huhn"
console.log(mengen[0]);    // 1
console.log(einheiten[0]); // "Stk."

// Display arrays, print all ingredients to the console

for (let i = 0; i < zutaten.length; i++) {
  console.log("Ingredient: " + zutaten[i] + " – " + mengen[i] + " " + einheiten[i]);
}

/* 
  STEP 2: CALCULATE PORTION AMOUNTS
*/

// Base amount of an ingredient for 1 portion (e.g. 200 grams of rice)
let zutatenMenge = 200;

// Multiply the base amount by the number of portions to get the total
let berechneteMenge = zutatenMenge * portionsmenge;

// Show the result in the browser console with a clear, readable message
console.log("Berechnete Portionsmenge: " + berechneteMenge);

/* 
  STEP 3: CALCULATE INGREDIENTS
*/

const base = {
  huhn:    { value: 1,   unit: "Stk." },
  curry:   { value: 10,  unit: "g"    },
  kokos:   { value: 250, unit: "ml"   },
  ingwer:  { value: 2,   unit: "ml"   },
  zwiebel: { value: 1,   unit: "Stk." },
  reis:    { value: 200, unit: "g"    },
  zitrone: { value: 20,  unit: "ml"   },
  chili:   { value: 0.5, unit: "g"    },
};

/* 
  STEP 4: UPDATE INGREDIENTS
*/

function updateIngredients() {

  // "for...in" goes through each ingredient in the list one by one.
  for (const id in base) {

    // I find the matching element on the page using its id.
    const el = document.getElementById(id);

    // I multiply the base amount by the number of portions.
    const scaled = base[id].value * portionsmenge;

    let display;
    if (Number.isInteger(scaled)) {
      display = scaled;             // whole number, show as-is.
    } else {
      display = scaled.toFixed(1);  // decimal, round to 1 place.
    }

    // Now I update the text inside that cell on the page.
    // It shows the new number + the unit, for example "400g".
    el.textContent = display + base[id].unit;
  }
}

/* 
  STEP 5: LISTEN TO USER INPUT
*/

document.getElementById("portionen").addEventListener("input", function () {

  // Read the value from the input and convert it to a number.
  portionsmenge = parseInt(this.value);

  // Check if portionsmenge is invalid (0 or less)
  if (portionsmenge <= 0) {
    alert("Bitte gib eine gültige Portionsmenge ein!"); // warn the user
  } else {
    updateIngredients(); // only calculate if input is valid
  }

});

/* 
  STEP 6: ALLERGEN POPUP
*/

const overlay    = document.getElementById("allergenOverlay");
const openPopup  = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

// Info-Button klicken → Overlay einblenden
openPopup.addEventListener("click", function () {
  overlay.classList.toggle("active");
});

// Schließen-Button klicken → Overlay ausblenden
closePopup.addEventListener("click", function () {
  overlay.classList.toggle("active");
});

// Klick außerhalb der Box → Overlay ausblenden
overlay.addEventListener("click", function (e) {
  if (e.target === overlay) {
    overlay.classList.toggle("active");
  }
});
