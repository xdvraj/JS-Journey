const number = [1, 2, 3, 4, 5];
const output = move(number , 1 , 3);
console.log(output);

function move(array , from , to) {
    const output = [...array];
    const element = output.splice(from , 1)[0];
    output.splice(to , 0 , element);
    return output;
}

