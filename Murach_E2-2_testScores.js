// Exercise 2-2 test scores program

let entry;
let average;
let total = 0;

entry = prompt("Enter test score");
let score1 = parseInt(entry);
total += score1;

entry = prompt("Enter test score");
let score2 = parseInt(entry);
total += score2;

entry = prompt("Enter test score");
let score3 = parseInt(entry);
total += score3;

average = parseInt(total/3);

document.write("<h1>The Test Scores App</h1>");
document.write("Score 1 = " + score1 + "<br>" + 
    "Score 2 = " + score2 + "<br>" +
    "Score 3 = " + score3 + "<br><br>" +
    "Average score = " + average + "<br><br>");
