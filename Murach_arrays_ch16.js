//figure 16-1

// let badNames = new Array ("John", "Matt", "Mike", "Schtuker");
// let names = ["Ryan", "Calvin", "Megan", "Adalynn"];
//     console.log(badNames, names);
//     console.log(badNames[3]);
//     console.log(names[1]);
// let modBadNames = new Array (4);
//     console.log(modBadNames);
// modBadNames[0] = "Kohn";
// modBadNames[1] = "Hansen";
// modBadNames[2] = "Jamison";
// modBadNames[3] = "Smith";
//     console.log(modBadNames);
// let newNames = [];
//     console.log(newNames);
// newNames[0] = "Jim";
// newNames[1] = "Joe";
// newNames[2] = "Jack";
// newNames[3] = "Jason";
//     console.log(newNames);


//-------------------------

//figure 16-2

// let numbers = [1, 2, 3, 4];
//     console.log(numbers);
// numbers[numbers.length] = 5;
//     console.log(numbers);
// numbers[6] = 7;
//     console.log(numbers);
// delete numbers[2];
//     console.log(numbers);
// numbers.length = 0;
//     console.log(numbers);
// let newNumbers = [1];
// newNumbers[1000] = 1001;
//     console.log(newNumbers);

//-----------------------------------

// figure 16-3

// let oldNumbers = [];
// for (let i = 0; i < 10; i++) {
//     oldNumbers[i] = i + 1;
// }
//     console.log(oldNumbers);
// let numbersString = "";
// for (let j = 0; j < oldNumbers.length; j++) {
//     numbersString += oldNumbers[j] + " ";
// }
//     console.log(numbersString);
// let totals = [141.95, 212.95, 411, 10.95];
// let sum = 0;
// for (let k = 0; k < totals.length; k++) {
//     sum += totals[k];
// }
// let average = sum / totals.length;
//     console.log(average);
// let totalsString = "";
// for (let l = 0; l < totals.length; l++) {
//     totalsString += totals[l] + "\n";
// }
//     console.log("The totals are:\n" + totalsString + "\n" + 
//                 "Sum: " + sum.toFixed(2) + "\n" + "Average: " + average.toFixed(2));

//--------------------------------------

//figure 16-4

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numbersString = "";
// for (let index in numbers) {
//     numbersString += numbers[index] + " ";
// }
//     console.log(numbersString);
// var names = ["Grace", "Charles", "Ada"];
//     console.log(names);
// names[4] = "Alan";
//     console.log(names);
// names[names.length] = "Linus";
//     console.log(names);
// delete names[1];
//     console.log(names);
// names[names.length] = undefined;
//     console.log(names);
// let namesString1 = "The elements displayed by the for loop:\n\n";
// for (let i = 0; i < names.length; i++) {
//     namesString1 += names[i] + "\n";
// }
// let namesString2 = "The elements displayed by the for-in loop:\n\n";
// for (let i in names) {
//     namesString2 += names[i] + "\n";
// }
//     console.log(namesString1);
//     console.log(namesString2);

//---------------------------------------
