// object trong js
let student = {}; // object rong
let car = {
  name: 'BMW',
  color: 'white',
  weight: 500,
  start: function() {
    // method of object
    return 'do xang vao de chay';
  },
  stop: function(place) {
    return `toi ${place} roi, xuong xe`
  }
}
// name: key
// bmw : value
// 1 cap key + value: bieu dien thuoc tinh cua object
// 1 cap key + value se cach nhau boi dau ,
// truy cap vao thuoc tinh hay phuong thuc cua object
let nameCar = car.name;
let nameCar2 = car['name'];
console.log(nameCar, nameCar2);
let startCar = car.start();
console.log(startCar);
let stop = car.stop('Cong vien');
console.log(stop);
let cat = {
  name: 'tom',
  age: 2,
  weight: 3,
  color: 'black'
}
// duyet object
for( let i in cat) {
  console.log(i, cat[i]);
}
// ket hop mang voi object
let todoWorks = [
  {
    id: 1,
    name: 'hoc html',
    done: true
  },
  {
    id: 2,
    name: 'hoc css',
    done: true
  },
  {
    id: 3,
    name: 'hoc js',
    done: false
  }
];
let doneWorks = todoWorks.filter( e => e.done === true);
//console.log(doneWorks, todoWorks);
let newTodoWorks = [
  ...todoWorks,
  {
    id: 4,
    name: 'hoc reactjs',
    done: false
  },
  {
    id: 5,
    name: 'hoc nextjs',
    done: false
  }
];
//console.log(newTodoWorks);
let myWorks = newTodoWorks.map( e => {
  return e.done === false ? {...e, done: true} : e;
});
console.log(newTodoWorks, myWorks);

const A = {a: 1, b: 10};
//A = { c: 20}; // loi
A.c = 20;
console.log(A); 
const {a,b,c} = A;
console.log(a,b,c);

function demo() {
  return {name: 'A', age: 10};
}
let {name} = demo();
console.log(name);