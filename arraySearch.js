const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(elements.includes(6));

function search(array , searchElement) {
    for (let element of array) {
        if (element === searchElement) {
            return true;
        }
    }
    return false;   
};


