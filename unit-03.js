// number js
let n = '10'; // string
n = Number.parseFloat(n); // ep so
let m = 20; // number
let s = n + m;
console.log(s, typeof n);

let check = false;
// false == 0 == '' : ve mat gia tri
// true == 1 : ve mat gia tri
if(check === 0){
  console.log('A');
} else {
  console.log('B');
}
let numberString = '1234b';
if(!isNaN(numberString)){
  console.log('OK');
} else {
  console.log('ERR');
}

let  i = 10;
let j = i/0;
console.log(j, typeof j);
let u = 10;
let  k = 'a';
let t = u / k;
console.log(t, typeof t);
/////////// Chuoi trong JS ///////////////////

let time = '21:03';
let mess = `Bay gio la ${time} sap dc ve roi \n`;
let mess2 = "Bay gio " + time + " sap dc ve roi";
console.log(mess, mess2);

// do dai cua chuoi
let len = time.length;
console.log(len);

let upperString = mess2.toUpperCase();
console.log(mess2, upperString);

let myString = 'dang hoc js';
//let pos = myString.indexOf('js');
let pos = myString.lastIndexOf('js');
console.log(pos);
// tach chuoi
let newMyStr = myString.slice(2,-8);
console.log(newMyStr);
let newMyStr2 = myString.substring(2,-1);
console.log(newMyStr2);
let newMyStr3 = myString.substr(2,8);
console.log(newMyStr3);
let newMyStr4 = myString.replace('js', 'reactjs');
console.log(newMyStr4, myString);

let str1 = 'hello';
let str2 = 'good bye';
let str3 = str1 + str2;
let str4 = str1.concat(str2);
console.log(str1, str2, str3, str4);

function test(a, ...b) {
  //return a + b;
  console.log(a, b);
}
test(1,2,3,4,5,6);
//let s123 = test(1,2,3,4,5,6);
//console.log(s123);
