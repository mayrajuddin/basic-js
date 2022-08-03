//
/**
 * 1. What is JavaScript?
 * Ans:::
 * JavaScript is a scripting or programming language that allows you to implement complex features on web pages
 * 2. What is Variable?
 * Ans::
 * a variable is a named container for a particular set of bits or type of data (like integer, float, string etc...)
 */
// 3. declare a variable.
var a = 10;
var b = 5;
// 4. types of variable? how can you find out type of variable?
/**
 * 1.primitive data type.
    * Numbers, eg. 123, 120.50 etc.
    * Strings of text e.g. "This text string" etc.
    * Boolean e.g. true or false.
    * undefined
    * null
 
 * 2. Non-primitive data tpye.
    * object

 */
// find typeof variable 
var c = 4;
console.log(typeof c);

/**
 * 5 .how to declare a variable name and What types of names cannot be written as variable names.
 * name should ne meaning ful .
 * Variable and function names written as camelCase
 * There's no limit to the length of the variable name.
 * name ar age number deoya jabe na kintu shes e othoba maje bebohar kora jabe
 * You can't use one of JavaScript's reserved words as a variable name.
 *  variable names are case sensitive.That is, a variable named myName is treated as an entirely different variable than one named myname
 */
// 6. math operations +, -, *, /, %,
a = 4;
b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
// short hand 
var c, d, e, f, g;
var num1 = 10;
var num2 = 30;
var num3 = num1 += 10;
console.log(num3);
c = 30;
d = 10;
console.log(c -= d);
e = 5;
f = 10;
console.log(e *= f);
console.log(e /= 10);
g = '55';
var parseNum = parseInt(g);
console.log(parseNum);
var h = '22.3';
var numFloat = parseFloat(h);
console.log(numFloat);
var i = 123.347000;
var fix = i.toFixed(2);
console.log(fix);
var num5 = 10;
num5++;
console.log(num5)
num6 = 15;
num6--;
console.log('number is ' + num6);