// JavaScript for 2-15 test score average

let entry;
let average;
let total = 0;

entry = prompt("Enter test score");
entry = parseInt(entry);
let score1 = entry;
total = total + score1;

entry = prompt("Enter test score");
entry = parseInt(entry);
let score2 = entry;
total = total + score2;

entry = prompt("Enter test score");
entry = parseInt(entry);
let score3 = entry;
total = total + score3;

average = parseInt(total/3);

document.write("<h1>The Test Scores App</h1>");
document.write("Score 1 = " + score1 + "<br>" + 
    "Score 2 = " + score2 + "<br>" +
    "Score 3 = " + score3 + "<br><br>" +
    "Average score = " + average + "<br><br>");
