/* 
  script.js - ZutatenZirkus - Drachenatem | Recipe Website
  Míriam Domínguez Martínez - 18.03.2026

  REFACTORED: Three separate arrays replaced with a single JSON data structure.
  Each ingredient is now a self-contained object with all its data in one place.
*/

/* 
  STEP 1: PORTIONSMENGE
*/

let portionsmenge = 1;

/* 
  STEP 2: JSON DATA STRUCTURE
  Previously three parallel arrays (zutaten, mengen, einheiten).
  Now one clean JSON object — all data for each ingredient lives together.
*/

const zutatenJSON = {
  huhn:    { name: "Huhn",         value: 1,    unit: "Stk." },
  curry:   { name: "Currypulver",  value: 10,   unit: "g"    },
  kokos:   { name: "Kokosmilch",   value: 250,  unit: "ml"   },
  ingwer:  { name: "Ingwer",       value: 2,    unit: "ml"   },
  zwiebel: { name: "Zwiebel",      value: 1,    unit: "Stk." },
  reis:    { name: "Reis",         value: 200,  unit: "g"    },
  zitrone: { name: "Zitronensaft", value: 20,   unit: "ml"   },
  chili:   { name: "Chili",        value: 0.5,  unit: "g"    },
};

// Print all ingredients to the console using the JSON structure
for (const id in zutatenJSON) {
  const z = zutatenJSON[id];
  console.log("Zutat: " + z.name + " – " + z.value + " " + z.unit);
}

/* 
  STEP 3: UPDATE INGREDIENTS
  Reads from zutatenJSON, scales by portionsmenge, updates the DOM.
*/

function updateIngredients() {

  for (const id in zutatenJSON) {

    // Find the matching <td> element on the page by its ID
    const el = document.getElementById(id);

    // Scale the base value by the number of portions
    const scaled = zutatenJSON[id].value * portionsmenge;

    // Format: show whole numbers as-is, decimals rounded to 1 place
    const display = Number.isInteger(scaled) ? scaled : scaled.toFixed(1);

    // Update the cell text, e.g. "400g" or "2 Stk."
    el.textContent = display + " " + zutatenJSON[id].unit;
  }
}

/* 
  STEP 4: LISTEN TO USER INPUT
*/

document.getElementById("portionen").addEventListener("input", function () {

  portionsmenge = parseInt(this.value);

  if (portionsmenge <= 0 || isNaN(portionsmenge)) {
    alert("Bitte gib eine gültige Portionsmenge ein!");
  } else {
    updateIngredients();
  }

});

/* 
  STEP 5: ALLERGEN POPUP
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
