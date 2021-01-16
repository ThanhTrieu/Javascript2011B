// dinh nghia ham trong js
function sumNumber(a, b = 10) {
  return a + b;
  // return tra ket qua ve cho ham - thoat khoi ham
}
// su dung ham
let sum = sumNumber(1, 2);
console.log(sum);

let kiemTraChanLe = function(n) {
  if(n % 2 === 0){
    return true;
  }
  return false;
}
let myNumber = 101;
if(kiemTraChanLe(myNumber)){
  console.log('so chan');
} else {
  console.log('so le');
}
// viet ham kiem tra tu 30- 70 co bao nhieu SNT
function kiemTraSoNT(n) {
  if(n <= 1){
    return false;
  }
  if(n == 2){
    return true;
  }
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i == 0){
      return false;
    }
  }
  return true;
}
function demSoNT(i, j) {
  let count = 0;
  for( let k = i; k <= j; k++) {
    if(kiemTraSoNT(k)){
      count++;
    }
  }
  return count;
}
let c = demSoNT(1,10);
console.log(c);
// arrow function

let tinhGiaiThua = (n) => {
  let gt = 1;
  for(let i = 1; i <= n; i++) {
    gt *= i;
  }
  return gt;
}
let gt = tinhGiaiThua(4);
console.log(gt);

let test = (a, b) => a > b ? a : b
console.log(test(1,2));
let example = (a, b) => {
  return a > b ? a : b;
}
