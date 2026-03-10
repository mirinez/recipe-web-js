/* script.js — ZutatenZirkus – Drachenatem | Recipe Website
   Míriam Domínguez Martínez - 10.03.2026
*/

/* SETP 1: CREATE VARIABLES
   Here I'm creating variables to store the data I need for the recipe.
   I also write comments to explain what each part does.
   This way, I can easily understand and change the code later if I want to.
*/

let portionsmenge = 1;


/* SETP 2: SHOW WELCOME MESSAGE
   When the page loads, I want to show a welcome message to the user.
   I use the alert() function to create a pop-up message in the browser.
   I add the variable at the end so it shows the current number.
   The "\n" makes a new line inside the message.
*/

alert("Willkommen bei ZutatenZirkus!\nAktuelle Portionsmenge: " + portionsmenge);

/* SETP 3: CALCULATE INGREDIENTS
   Here I'm saving all the ingredients and their amounts for 1 portion.
   I use "const" because this list never changes.
   Each ingredient has a "value" (the number) and a "unit" (like g, ml, Stk.)
   The names on the left (huhn, curry...) match the id's in the HTML file.
   That way I can find each ingredient on the page later.
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

/* STEP 4: UPDATE INGREDIENTS
   This is the most important part of the code.
   It calculates how much of each ingredient we need based on the number of portions.
   Then it updates the numbers on the page so the user can see them.
   This is a function. A function is like a recipe for the computer:
   I write the steps once, and I can run them again whenever I need.
   This function goes through every ingredient and updates the number on the page depending on how many portions the user selected.
*/

function updateIngredients() {

  // "for...in" goes through each ingredient in the list one by one
  for (const id in base) {

    // I find the matching element on the page using its id
    const el = document.getElementById(id);

    // I multiply the base amount by the number of portions
    const scaled = base[id].value * portionsmenge;

    // If the result has no decimals (like 3.0) I show it as 3
    // If it does have decimals (like 1.5) I round it to 1 decimal
    let display;
    if (Number.isInteger(scaled)) {
      display = scaled;             // whole number, show as-is
    } else {
      display = scaled.toFixed(1);  // decimal, round to 1 place
    }

    // Now I update the text inside that cell on the page
    // It shows the new number + the unit, for example "400g"
    el.textContent = display + base[id].unit;
  }
}

/* STEP 5: LISTEN TO USER INPUT
   Now I want to make the page interactive.
   I want to "listen" to the number input, so when the user changes it, I can update the ingredients automatically.
   This way, the user can see how much of each ingredient they need for any number of portions they want.
   I read the new number from the input field, save it in "portionsmenge", and then call the function above to update all the ingredients.
   The "|| 1" at the end means: if the input is empty, use 1 instead.
*/

document.getElementById("portionen").addEventListener("input", function () {

  // Read the value from the input and convert it to a number
  portionsmenge = parseInt(this.value) || 1;

  // Run the function to recalculate and update all ingredient amounts
  updateIngredients();

});
