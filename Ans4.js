var tableNumber = +prompt("Table Generator","Enter table number");
document.write("Multiplication table of: "+tableNumber+"<br>");
var lengthoftable = +prompt("Table Generator","Enter length of table");
document.write("Length: "+lengthoftable+"<br><br>")

for (let i = 1; i <= lengthoftable; i++) {
    var multiplyResult = tableNumber*i;
    
    document.write(tableNumber+" x "+i+"= "+multiplyResult+"<br>");
    
}