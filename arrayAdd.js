const numbers = [3,4];
// END 
numbers.push(5);
console.log(numbers);

// START
numbers.unshift(1,2);
console.log(numbers);

//MIDDLE
numbers.splice(2,0,9);
console.log(numbers);