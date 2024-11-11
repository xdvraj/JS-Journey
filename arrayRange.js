const number = arrayrange(1 , 4);
console.log(number);

function arrayrange(min, max) {
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }
    return numbers;
};