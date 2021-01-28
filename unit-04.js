// symbol data type js
// truyen vao 1 description
let id = Symbol('id-code');
console.log(id);
let name = Symbol('name-code');
let id2 = Symbol('id-code');
 if(id == name || id === name) {
  console.log('OK');
 } else {
  console.log('No');
 }
 console.log(id.description);

 let b = Symbol('test');
 let a = Symbol.for('test');
 let c = Symbol.for('test');
 if(c == a ||c === a){
    console.log('Y');
 } else {
   console.log('N');
 }
 /**************** Array JS  ***************/
let arrFruits = new Array('cam', 'quyt', 'mit', 'dua');
let arrFruits2 = ['cam', 'quyt', 'mit', 'dua', 1, 2, 5];
console.log(arrFruits, arrFruits2);
let arrNumber = [1,2,3, [100,200], 5, 6, [1,2,3]];
let arrNumber2 = new Array(1,2,3, Array(100,200), 5, 6, Array(1,2,3));
// kiem tra so luong phan tu trong mang
let count = arrFruits2.length;
console.log(count);
// truy cap vao 1 phan tu trong mang
// cu phap: nameArray[key]; // key : vi tri(chi so) cua phan tu nam trong mang (bat dau dem tu 0)
console.log(arrFruits[3]);
console.log(arrNumber[3][1]);
console.log(arrNumber2[6][2]);

let numbers = [1,2,3,4,5,6,7,8,9,10];
// duyet qua tat ca cac phan tu trong mang
let limit = numbers.length;
for(let i = 0; i < limit; i++) {
  console.log(numbers[i]);
}
numbers.forEach(function(e, i, a){
  // e : gia tri phan tu
  // i: vi tri cua phan tu
  // a: mang ban dau
  console.log(`value: ${e} - key: ${i}`);
});
for(let j of numbers) {
  console.log(j);
}

let numbers2 = [1,2,3,4,5,6,7,8,9,10];
// them 100 vao cuoi mang
numbers2.push(100);
console.log(numbers2);
// xoa phan tu cuoi cung cua mang va tra ve phan tu (thay doi car mang)
let lastEl = numbers2.pop();
console.log(lastEl, numbers2);
// them lai dung phan tu vua xoa vao dau mang
numbers2.unshift(lastEl);
console.log(numbers2);

// xoa phan tu dau mang
let firstEl = numbers2.shift();
console.log(firstEl, numbers2);

let pos = numbers2.indexOf(firstEl, 3);
let pos2 = numbers2.lastIndexOf(10, 3);
console.log(pos, pos2);

let numbers3 = [1,2,3,4,5,6,7,8,9,10];
let newArr = numbers3.slice(3,6);
// [4,5,6]
console.log(numbers3, newArr);
numbers3.splice(3,3, 100,200,300);
console.log(numbers3);
// chuyen array ve chuoi
let string = numbers3.join();
console.log(string, typeof string);
let string2 = numbers3.toString();
console.log(string2, typeof string2);
// chuyen chuoi ve array
let myArray = string2.split(',');
console.log(myArray);
// kiem tra xem co phai la Array
if(Array.isArray(myArray)){
  console.log('OKKKK');
} else {
  console.log('Nooooo');
}
let randomNumber = [100,6,10,1,5,2,4,3,99];
// randomNumber.sort((b, a) => a - b);
// console.log(randomNumber);
let s = randomNumber.find( function(e) {
  return e % 3 === 0;
});
console.log(s);
let s2 = randomNumber.filter( e => e % 3 === 0);
console.log(s2);

function demo(arr, n) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % n === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
let s3 = demo(randomNumber, 3);
let category = ['home', 'contact', 'about'];
let menu = `
  <ul>
    ${category.map(item => (`
      <li>
        <a>${item}</a>
      </li>
    `))}
  </ul>
`;
console.log(menu);

let randomNumber2 = [100,6,10,1,5,2,4,3,99];
let condition = e => e % 3 === 0;
let condition2 = (val, current) => val + current;
let kq = randomNumber2.filter(condition)
                      .reduce(condition2);
console.log(kq);

let 

= [1,2,3,4,5,6,7,8,9];
//Spread Operator
let others = [100,200, ...params];
console.log(others, params);