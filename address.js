const address = {
    state : "gujarat",
    city : "ahmedabad",
    pincode : 380000
}
function showaddress() {
    for (let key in address)
    {
        console.log(key, address[key]);
    }
}
showaddress(address)