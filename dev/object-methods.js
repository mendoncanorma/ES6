//New function for assigning enumerable properties of one or more 
//source objects onto a destination object.

var destination = { start: 0 };
var source_mid = { interval: 10, duration: 20 };
var source_end = { distance: 40 };

Object.assign(destination, source_mid, source_end);
source_mid.interval = 30;

console.log(destination);
console.log(source_mid.interval);
