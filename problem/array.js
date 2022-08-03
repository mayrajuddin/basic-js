/**
 * 1.what is the purpose of array?
 * The purpose of an array is to store multiple pieces of data of the same type together.
 * 2.how to declare an array in js.
 * 3. what is index.
 *  in array position of  value.
 */
var arr = ['sting', 22, 22.33, true, false, 'hello'] //declare an array
var arrEle = ['name', 'cycle', 'mobile', 'pen'] // 4. number of an element
console.log(arrEle.length);
arrEle[3] = 'mouse'; //change the element by index 
console.log(arrEle)
var ind = arrEle.indexOf('cycle'); //5. get index num of an ele by the value
console.log(ind);
arrEle.pop(); // remover last element from array
console.log(arrEle);
arrEle.unshift('hello'); // add element first in array 
console.log(arrEle);
arrEle.shift(); // remove first element from array 
console.log(arrEle);

