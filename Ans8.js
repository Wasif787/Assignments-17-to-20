var A = [24,53,78,91,12];
document.write("Array items: "+A+"<br>");
var max = A[0];
for (let i = 0; i < A.length; i++) {
    
    if (A[i]>max) {
        max = A[i];
        
    }
}
document.write("The largest number is: "+max);