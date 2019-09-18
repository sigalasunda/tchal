// get imput
var str = prompt("Please enter your name", "Harry Potter");
console.log('this is the string ' + str);

//remove what isn't a number
var str2 = str.replace(/\D/g,'');
console.log('this is when the letters get stipped out ' + str2);
//change to array 
var arrg = str2.split('');
console.log('this is the input as an array ' + arrg);
//revers the array
var arrgr = arrg.reverse(); 
console.log('this is a revesed array ', arrgr);

// change to numbers VERY VERY IMPORTANT!!!!!!!!
arrg2 = arrgr.map(Number);
console.log('this is the arry converted to numbers ' + arrg2); // [1, 2, 3]

//double every OTHER number in the array NOTICE THAT 'i' IS EQUAL TO 1 THIS IS IMPORTANT ARRAYS START COUNTING AT 0
function theDoubler(nArray) {
    for (var i = 1; i < nArray.length; i+=2) {
        nArray[i] *= 2;
    }
    return nArray;
}
var alM = theDoubler(arrg2);
console.log('this is the doubled number ' + alM)

//add all numberS in the array together NOTICE THAT YOU HAVE TO LOOP THROUGH THE ARRAY AND SET TO A NEW VAR...THIS IS DONE FOR CLARITY
var numbers = alM;
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];

}
console.log('this is all of the numbers added together - value of: ' + sum)	

// checking if the number is a multipe of 10
var mult = sum % 10;
if (mult === 0){
  console.log('MULTIPLE OF 10')
}else {
	console.log('NOT A MULTIPLE OF 10')
}


	