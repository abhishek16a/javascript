// variable decleration and initilization
const array =[1,9,8,7,10,11,11,13,7]; 
const input=11;
let repeat=0;

// declare Function 
function repeated(){
// for loop start 
for(i=0;i<array.length;i++){
    if(array[i]== input){
        repeat=repeat+1;
    }
}
}
// calling function 
repeated();

console.log("Your given number "+input+ " is repeated "+repet+" times");