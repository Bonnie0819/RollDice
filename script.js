function initialize() {
    inputContainer = document.getElementById("inputform");
    dice = "";
    rolls = "";
    die1 = 0;
    die2 = 0;
    die3 = 0;
    total = 0;
    die1Val =[];
    die2Val =[];
    die3Val =[];
    totalVal =[];
    t = document.getElementById("frequency");
}
//displays data on the webpage
function display() {
    document.getElementById("dice").innerHTML = "Number of Dice: " + dice;
    document.getElementById("rolls").innerHTML = "Number of Rolls: " + rolls;
}

//records the data from the form
function recordData() {
    dice = inputContainer.numDice.value;
    rolls = inputContainer.rolls.value;

    inputContainer.numDice.value = "";
    inputContainer.rolls.value = "";

    roll(rolls);
}

//simulates dice rolling
function roll(num) {
    document.getElementById("dice").innerHTML = "Number of Dice: " + dice;
    document.getElementById("rolls").innerHTML = "Number of Rolls: " + rolls;
    for(let i = 0; i < num; i++) {
        die1= parseInt(Math.random() *6 + 1);
        die2= parseInt(Math.random() *6 + 1);
        die3= parseInt(Math.random() *6 + 1);
        total = die1 + die2 + die3;

        //pushes the data to an array
        die1Val.push(die1);
        die2Val.push(die2);
        die3Val.push(die3);
        totalVal.push(total);
    }
    table(dice);
}

//generates the table of frequencies
//Used https://www.tutorialspoint.com/How-to-add-rows-to-a-table-using-JavaScript-DOM for help
function table(num) {
    for(let i = num; i <= num*6; i++) {
        let row= t.insertRow(t.rows.length);
        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);

        c1.innerText = i;

        let f = 0;
        for(let j = 0; j < totalVal.length; j++) {
            if(totalVal[j] === i) {
                f++;
            }
        }
        c2.innerText = f;
    }
}
