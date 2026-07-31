//  Js Series beginer to industry level

const myArr = [1,2,3,4,5,6];
const meHeroes =["shaktimaan" , "devnaag"];
const myArr2 = new Array(2,3,43,32);
// console.log(myArr2[2]);
// array method ;
// myArr.push(7);
// myArr.pop();

// unshift method isme jb humlog element ko array me sirf kartey hai to start me hi shift ho jata hai;
// myArr.unshift(9)
// shift method ye bhi pop ki jaisa work karta hai but ye first index se remove karta hai,
// myArr.shift();
// includes used for value available in number or not ;
// console.log(myArr.includes(9));
// indexOf used for check the element index in array
// console.log(myArr.indexOf(20));
// console.log(myArr);

// convert Array into String using join method;
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// {Slice and splice difference and concept}

// slice in array remove the element where the parameter call ;
// console.log(" A " , myArr);
// const myNum = myArr.slice(1 ,4);
// console.log(myNum);
console.log("B " ,myArr);

// Splice array in js ;
const myNum2 = myArr.splice(4,5);
// splice karne se hum jitna array ko chahte hai remove kardete hai 
console.log("C " ,myArr);
console.log(myNum2);