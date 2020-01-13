// exercise 2-1 MPG program

let miles = prompt("Enter miles drive");
    miles = parseFloat(miles);
let gallons = prompt("Enter gallons of gas used");
    gallons = parseFloat(gallons);
let mpg = miles / gallons;
    mpg = parseInt(mpg);
document.write("Miles per gallon = " + mpg);