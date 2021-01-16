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