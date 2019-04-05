const array=[1,9,8,7,10,11,11,13,7];
let largest = array[0];
let small = array[0];

findSmallandLargeNumber();
function findSmallandLargeNumber(){

    for (i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
        if (array[i] < small) {
            small = array[i];
        }

    }
    console.log("Large Number in array: "+largest);
    console.log("Small Number in array : "+small);

}


