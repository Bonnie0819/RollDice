function initialize() {
    inputContainer = document.getElementById("inputform");
    t = document.getElementById("frequency");

    dice = "";
    rolls = "";
    die1 = 0;
    die2 = 0;
    die3 = 0;
    total = 0;
    mean = 0;
    median = 0;
    mode = 0;
    double = 0;
    triple = 0;

    die1Val =[];
    die2Val =[];
    die3Val =[];
    totalVal =[];
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
    clear();        //clears the data from previous dice roll
    document.getElementById("dice").innerHTML = "Number of Dice: " + dice;
    document.getElementById("rolls").innerHTML = "Number of Rolls: " + rolls;

    if(dice === '1') {
        for(let i = 0; i < num; i++) {
            die1= parseInt(Math.random() *6 + 1);
            total = die1;

            //pushes the data to an array
            die1Val.push(die1);
            totalVal.push(total);
        }
    }    
    if(dice === '2') {
        for(let i = 0; i < num; i++) {
            die1= parseInt(Math.random() *6 + 1);
            die2= parseInt(Math.random() *6 + 1);
            total = die1 + die2;

            //pushes the data to an array
            die1Val.push(die1);
            die2Val.push(die2);
            totalVal.push(total);
        }
    }
    if(dice === '3') {
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
    }
        
    table(dice);
    threeM();
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


//generates mean, median and mode
function threeM() {
    //generates the mean
    for(let i = 0; i < totalVal.length; i++) {
        mean += totalVal[i];
    }
    mean /= totalVal.length;
    document.getElementById("mean").innerHTML = "Mean: " + mean;
    console.log(mean);

    //generates the median
    //orders the total values of the dice rolls from least to greatest
    for(let i = 0; i < totalVal.length; i++ ) {
        for( j = i+1 ; j< totalVal.length;j++)
        {
            if(totalVal[i] > totalVal[j])
            {
                temp = totalVal[i];
                totalVal[i] = totalVal[j];
                totalVal[j] = temp;
            }
        }
    }

    if(totalVal.length % 2 === 0) {
        median  = (totalVal[totalVal.length/2] + totalVal[totalVal.length/2 - 1])/2
    } else {
        median = totalVal[parseInt(totalVal.length/2)];
    }
    document.getElementById("median").innerHTML = "Median: " + median;

    //generates the mode
    mode = totalVal[0];
    temp = 1;
    temp2 = 1;
    for(let i = 1; i < totalVal.length; i++) {
        if(totalVal[i-1] === totalVal[i]){
            temp++;
        }
        else {
            temp = 1;
        }
        if(temp >= temp2){
            mode = totalVal[i];
            temp2 = temp;
        }
    }

    console.log(mode);
    document.getElementById("mode").innerHTML = "Mode: " + mode;
}

//clears the arrays + table
function clear() {
    die1Val = [];
    die2Val = [];
    die3Val = [];
    totalVal = [];

    for(let i = t.rows.length -1; i > 0; i--) {
        t.deleteRow(i);
    }
}
