const numbers = [1, 2, 3, 4, 5];
const output = expect(numbers, [3]);
console.log(output);
function expect(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) 
        output.push(element);
  return output;
}
