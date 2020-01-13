let names = ["Grace", "Charles", "Ada"];
names.push("Alan", "Linus");
let removedNames = names.pop();
// console.log(names.join());


let names1 = ["Grace", "Charles", "Ada", "Alan"];
let namesSlice1 = names1.slice(0, 2);
// console.log(names1.join(", "));


let namesConcat1 = names1.concat(namesSlice1);
// console.log(namesConcat1.join());


let names2 = ["Grace", "Charles", "Ada", "Linus"];
// console.log(names2.join());
// console.log(names2.join(", "));
// console.log(names2.toString());


let names3 = ["Grace", "Charles", "Ada", "Alan", "Linus"];
names3.sort();


let comparison = function(x,y) {
    return x-y;
};
let numbers4 = [520, 33, 9, 199];
numbers4.sort(comparison);


let numbers5 = [1, 4, 9, 16];
let squared = numbers5.map(function(value) {
    return value * value;
});
let root = numbers5.map(Math.sqrt);


let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let checkPrime = function(value) {
    let isPrime = true;
    for (let z = 2; z < value; z++) {
        if (value % z === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
};
let prime = numbers6.filter(checkPrime);
console.log(prime);