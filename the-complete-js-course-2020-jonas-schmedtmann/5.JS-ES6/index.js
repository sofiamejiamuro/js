var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
    return cur >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));