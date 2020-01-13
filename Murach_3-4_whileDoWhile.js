// figure 3-4 while and do-while JavaScript

let sumOfNumbers = 0;
let numberOfLoops = 5;
let counter = 1;

while (counter <= numberOfLoops) {
    sumOfNumbers += counter;
    counter ++;
}
alert(sumOfNumbers);


let sumOfNumbers1 = 0;
let numberOfLoops1 = 5;
let counter1 = 1;

do {
    sumOfNumbers1 += counter1;
    counter1 ++;
}
while (counter1 <= numberOfLoops1);
    alert(sumOfNumbers1);


do {
    var investment = prompt("Enter investment amount as xxxxx.xx", 10000);
    investment = parseFloat(investment);
    if(isNaN(investment)) {
        alert("Investment must be a number");
    }
}
while (isNaN(investment));
