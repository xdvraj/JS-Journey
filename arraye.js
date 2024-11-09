function element(){
    const input = prompt("enter the values");
    const element = prompt("enter the element");
    const array = input.split(",").map(Number);
    for( let i = 0 ; i < array.length ; i++)
        {
            if(element == array[i])
                {
                    console.log(true);
                }
                else
                {
                    console.log(false);
                }
        }
}
element();