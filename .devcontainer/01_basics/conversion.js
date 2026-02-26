let score = 100;

console.log(typeof score);
console.log(typeof(score))

let valueINnumber = Number(score);
console.log(typeof valueINnumber);
console.log(valueINnumber);



let score2 = "100abc";

console.log(typeof score2);
console.log(typeof(score2))

let valueINnumber2 = Number(score2);
console.log(typeof valueINnumber2);
console.log(valueINnumber2); // NaN


let score3 = "ibru";
let valueINnumber3 = Number(score3);
console.log(typeof valueINnumber3);
console.log(valueINnumber3); // NaN

// "33" => 33
// "33abc" => NaN
// "ibru" => NaN
// true => 1