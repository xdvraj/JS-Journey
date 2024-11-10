const numbers = [1, 2, 3, 4, -1, -3, -5];

const filtered = numbers.filter(function (number) {
    return number > 0;
});
console.log(filtered);

// using arrow function
const filteredx = numbers.filter(number => number > 0);
console.log(filteredx);