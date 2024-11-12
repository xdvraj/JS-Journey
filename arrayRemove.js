const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// END
const last = numbers.pop();
console.log(last);

// START
const first = numbers.shift();
console.log(first);

// middle 
 numbers.splice(2, 2);
console.log(numbers);