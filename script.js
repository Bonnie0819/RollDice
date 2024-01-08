function initialize() {
    inputContainer = document.getElementById("inputform");
    dice = "";
    rolls = "";

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
    console.log(dice);
    console.log(rolls);
    document.getElementById("dice").innerHTML = "Number of Dice: " + dice;
    document.getElementById("rolls").innerHTML = "Number of Rolls:" + rolls;
}