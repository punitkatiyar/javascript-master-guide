console.log("Welocme to datatype");
/*
string =combination of characterand numaric ['',"",``]
number [integer=10,float=10.568] [ 100 ]
boolen
undefine
null
array
object
function
*/
let myData1 = 'Welcome to string  type 1';
let myData2 = "Welcome to string  type 2";
let myData3 = `Welcome to string  type 3`;
console.log(myData3);
console.log(typeof (myData1));
// case
let myName = "Punit";
let city = "Delhi";
console.log(myData1 + " " + myData2);
console.log(myData1 + " " + myName);
console.log("My Name Is" + " " + myName + " " + "My City Is" + " " + city);
console.log("myName city");
console.log('myName city');
console.log(`my name is ${myName} my city is ${city}`);

// number

let num1 = 101;
let num2 = 20;
console.log(num1);
console.log("num1");
console.log('num1');
console.log(typeof (num1));
// (+,-,*,/,%)
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(100 + num1 / 2 * num2);

// boolen if and else switch
let study = true;
let sleep = false;
console.log(study);
console.log(typeof (sleep));
// ex 1
let number1 = "10";
if (number1 === 10) {
    console.log("Hello");
}
else {
    console.log("Byeee");
}

// undefine //empty /null 
let ducat;
console.log(ducat);
//let ducat1 = NULL;
let ducat2 = "";
console.clear();

// array

//let card = 10,20, 30, 40, 50;
let card = "10,20,30,40,50";
let arr = Array(10, 20, 30, 40, 50);
let arr1 = [10, 20, 30, 40, 50];
let arr2 = new Array(10, 20, 30, 40, 50);
console.log(arr2[0] + arr2[1]);

// object
let h1 = {
    data: "Punit",
    data1: "Katiyar",
    data2: "Full stack"
};
console.log(h1.data);













