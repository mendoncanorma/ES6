//Number Truncation
//Truncate a floating point number to its integral part, 
//completely dropping the fractional part.
console.log("---------Number Truncation-------------");
console.log(Math.trunc(39.7)); // 39
console.log(Math.trunc( 0.5)); // 0
console.log(Math.trunc(-0.3)); // -0

console.log("---------Number Type Checking-----------");
//Number Type Checking
//New functions for checking for non-numbers and finite numbers.
console.log(Number.isNaN(45) === false);
console.log(Number.isNaN(NaN) === true);

console.log(Number.isFinite(Infinity) === false);
console.log(Number.isFinite(-Infinity) === false);
console.log(Number.isFinite(NaN) === false);
console.log(Number.isFinite(156) === true);

//Sign Determination
//Now we can determine the sign of a number including 
//special cases of signed zero and non-number
console.log("---------Sign Determination-----------");
console.log(Math.sign(10));  // 1
console.log(Math.sign(0));   // 0
console.log(Math.sign(-0));  // -0
console.log(Math.sign(-10)); // -1
console.log(Math.sign(NaN)); // NaN

//Number Safety Checking
//Checking whether an integer number is in the safe range, i.e., 
//it is correctly represented by JavaScript.
console.log("---------Number Safety Checking-----------");
console.log(Number.isSafeInteger(42) === true); //true
console.log(Number.isSafeInteger(90081992547408822) === false); //true