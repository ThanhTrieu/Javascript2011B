// console.log('Hello word');
// comment tren 1 dong
/*
comment tren nhieu dong
*/
let number = 10;
let string = 'hello';
var checking = false;
// kiem tra kieu du lieu cua bien
console.log(typeof number, typeof string, typeof checking);
var myName; // undefined
console.log(typeof(myName));
let myAge; // undefined
console.log(typeof myAge);
// phan biet tu khoa khai bao var va let
var n = 10;
var n = 20;
console.log(n);
let m = 10;
//let m = 20; // sai - vi bien da ton tai
console.log(m);
// pham vi hoat dong
let x = 10;
if(true){
  let x = 20;
  if( x < 30) {
    let x = 30;
    console.log(x);
  }
  console.log(x);
}
console.log(x);
// tu khoa let ko ton tai con tro this tro vao chinh bien do - tu khoa var thi co
// tu khoa const
const PI = 3.14;
console.log(typeof PI, PI);
// PI = 3.15; // sai ko dc thay doi truc tiep gia tri

let condition = 10;
if(condition <= 9){
  // do something
  console.log('Hi you');
} else if(condition == 10) {
  console.log('good bye');
} else if(condition == 7) {
  console.log('good night');
} else {
  console.log('good morning');
}
/// lenh gi do
switch(condition) {
  case 9:
    // do something
    break;
  case 8:
    // do something
    break;
  default:
    // do something
    break;
}
// vong lap 
for(let i = 0; i < 10; i++) {
  console.log(i);
}
let j = 1;
while( j < 10) {
  console.log(j);
  j++;
}
let k = 1;
do {
  console.log(k);
  k++;
} while( k < 10);

let u = 10;
let v = 20;
let h = (u % v > v % u) ? (u/v < v/u ? u : v) : v - u;
console.log(h);
if(u % v > v % u){
  if(u/v < v/u){
    h = u;
  } else {
    h = v;
  }
} else {
  h = v - u;
}

let q = 10;
let r = 9;
let t = (++q) - (++r) + (--q) + (--r) - (r--) + (q++);
//        11  -   10   +  10  +   9   -  9    + 10
console.log(t);
// 21
// 18
// 20
// t *= 10; // t = t * 10;