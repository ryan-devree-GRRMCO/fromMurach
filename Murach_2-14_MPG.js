// figure 2-14 MPG program

let miles = prompt("Enter miles drive");
miles = parseFloat(miles);
let gallons = prompt("Enter gallons of gas used");
gallons = parseFloat(gallons);
let mpg = miles / gallons;
mpg = parseInt(mpg);
alert("Miles per gallon = " + mpg);