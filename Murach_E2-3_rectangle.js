// exercise 2-3 rectangle program

let length = prompt("Enter length of rectangle");
let width = prompt("Enter width of rectangle");

let area = length * width;
let perimeter = (2 * length) + (2 * width);

document.write("<h1>The Area and Perimeter App</h1>");
document.write("Length = " + length + "<br>");
document.write("Width = " + width + "<br><br>");
document.write("Area = " + area + "<br>");
document.write("Perimeter = " + perimeter);