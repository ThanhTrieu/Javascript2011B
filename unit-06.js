// callback trong js
// console.log('A');
// setTimeout(() => {
//   console.log('B');
// }, 0);
// console.log('C');

function hocBai(cb) {
  setTimeout(() => {
    console.log('Dang hoc bai');
    cb();
  },3000)
}
function myCallBack() {
  diNgu();
}

function diNgu() {
  console.log('Di ngu thoi');
}
hocBai(myCallBack);

let myPro = new Promise((resolve, reject) => {
  // resolve: khi nao tien trinh xu ly bat dong do thanh cong
  // reject: khi nao tien trinh xu ly bat dong do that bai
  let x = 10;
  let y = 20;
  setTimeout(() => {
    if( x >  y) {
      resolve(x);
    } else {
      reject(y);
    }
  }, 2000);
});
// then : nhan du lieu tu resolve
// catch: nhan du lieu tu reject
myPro.then(res => {
  console.log(res)
  // tien trinh xu ly bat dong bo da xong
  // xu ly cong viec khac o day
})
.catch(err => console.log(err))
///