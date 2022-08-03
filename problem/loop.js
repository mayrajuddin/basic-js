/**
 * 1. display 10 time 'aj amr mon balo nei'
 */
var i = 1;
while (i <= 10) {
    // console.log(i + " " + "aj amr mon balo nei");
    i++;
}
// 2. display numbers between 58 to 98

var num = 58;
while (num <= 98) {
    // console.log(num);
    num++;
}
// 3. show all even numbers from 412 to 456 .

var evenNum = 412;
while (evenNum <= 456) {
    // console.log(evenNum);
    evenNum += 2;
}
// 4. show all odd numbers from 581 to 623 .
var oddNum = 581;
while (oddNum <= 623) {
    // console.log(oddNum);
    oddNum += 2;
}
// 6. display all element of an array using for loop .
var whatILearn = ['variable', 'types fo variable', 'primitive data type', 'non-primitive data type', 'parseInt', 'parseFloat', 'toFixed', 'find index num ', 'array lenght', 'shift', 'unshift', 'pop', 'push', 'loop',
    'while', 'for loop'];

for (var i = 0; i < whatILearn.length; i++) {
    // console.log(whatILearn[i]);
}

var someNum = 30; // run a loop from 30 to 66 this will stop if the value is 44 .
while (someNum < 66) {
    // console.log(someNum)
    someNum++
    if (someNum > 44) {
        break;
    }
}
// write some books price and display the price if the price is lower then 200
var booksPrice = [50, 120, 160, 140, 150, 180, 200, 220, 250, 280, 300, 198, 195];

for (var i = 0; i < booksPrice.length; i++) {
    if (booksPrice[i] >= 200) {

        console.log(booksPrice[i])
    }
}
// var booksPrice = [50, 120, 160, 140, 150, 180, 200, 220, 250, 280, 300, 198, 195];

// for (var i = 0; i < booksPrice.length; i++) {
//     if (booksPrice[i] <= 200) {
//         console.log(booksPrice[i])
//     }
// }