function sum()
{
    let total = 0;
    for ( let value of arguments)
        total += value;
    return total;
}
console.log(sum(1,3,4));