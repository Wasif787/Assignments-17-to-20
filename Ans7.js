var A = ["Cake","Apple pie","Cookies","Chips","Patties"];
var userInput = prompt("Welcome Sir!","What u want to eat?");
var productAvailable = false;
for (let i = 0; i < A.length; i++) {
    if (userInput == A[i]) {
        document.write(A[i]+" is available in our bakery at index "+i);
        var productAvailable = true;
        break;
    }
    
}
if(productAvailable == false){
    document.write("We are sorry, "+userInput+" is not available in our bakery.");
}