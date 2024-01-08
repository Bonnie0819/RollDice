function initialize() {
    inputContainer = document.getElementById("inputform");
    dice = "";
    rolls = "";
    die1 = 0;
    die2 = 0;
    die3 = 0;
    total = 0;
    diceVal = [];

}
//records the data from the form
function recordData() {
    dice = inputContainer.numDice.value;
    rolls = inputContainer.rolls.value;

    inputContainer.numDice.value = "";
    inputContainer.rolls.value = "";

    display();
}
//displays data on the webpage
function display() {
    document.getElementById("dice").innerHTML = "Number of Dice: " + dice;
    document.getElementById("rolls").innerHTML = "Number of Rolls:" + rolls;
}

function roll() {
    for(let i = 0; i < rolls; i++) {
        if(dice === 1) {
            die1= Math.random() *6 + 1;
        }
        if(dice === 2) {
            die1= Math.random() *6 + 1;
            die2= Math.random() *6 + 1;
        }
        if(dice === 3) {
            die1= Math.random() *6 + 1;
            die2= Math.random() *6 + 1;
            die3= Math.random() *6 + 1;
        }
        total = die1 + die2 + die3;
        console.log(die1);
        console.log(die2);
        console.log(die3);
        console.log(total);
    }

}