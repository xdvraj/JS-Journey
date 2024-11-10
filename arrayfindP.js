const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 10];

console.log(numbers.indexOf(5));
console.log(numbers.lastIndexOf(5));
console.log(numbers.includes(5)); // new method to find element 
console.log(numbers.indexOf(5) != -1); // old method to find element
console.log(numbers.indexOf(5,6)); // its used to find element from specific index