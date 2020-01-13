// figure 3-5 JavaScript

let sumOfNumbers = 0;
let numberOfLoops = 5;
for (let counter = 1; counter <= numberOfLoops; counter++) {
    sumOfNumbers += counter;
}
alert(sumOfNumbers);


let investment = 10000;
let annualRate = 7.0;
let years = 10;
let futureValue = investment;

for (var i = 1; i <= years; i++) {
    futureValue += futureValue * annualRate / 100;
}
alert(futureValue);