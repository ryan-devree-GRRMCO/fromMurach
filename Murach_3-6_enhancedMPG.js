//DO-WHILE LOOPS, IF/ELSE STATEMENTS

let again = "y";
do {
    let miles = prompt("Enter miles driven");
        miles = parseFloat(miles);
    let gallons = prompt("Enter gallons of gas used");
        gallons = parseFloat(gallons);
    if (!isNaN(miles) && miles > 0
        && !isNaN(gallons) && gallons > 0) {
            let mpg = miles/gallons;
            mpg = parseInt(mpg);
            alert("Miles per gallon = " + mpg);
    } else {
        alert("One or both entries are invalid");
    }
    again = prompt("Repeat entries?", "y");
}
while (again == "y");

document.write("<h1>Thanks for using the Miles Per Gallon application!</h1><br><br>");