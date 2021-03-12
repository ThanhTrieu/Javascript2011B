class Animals {
  constructor(name = 'Tom', color = 'black', age = 1  ) {
    this.name = name;
    this.color = color;
    this.age = age;
    // this.name : tao ra 1 thuoc tinh co ten la name
    // name: tham so(bien truyen vao)
  }
  eating = (food = '') => {
    return food;
  }
  sleeping(time = '') {
    return time;
  }
}
// ke thua
class Dogs extends Animals {
  constructor(name = 'Jerry', color = 'brown') {
    super(); // trieu goi constructor cua class cha
    this.name = name;
    this.myAge = this.age;
    console.log(this);
  }

  sleeping = (time = '22h') => {
    return time;
  }

  getTimeSleeping() {
    return super.sleeping();
  }
}
let dog = new Dogs();
console.log(dog.name);
let food = dog.eating('bone');
console.log(food);
console.log(dog.myAge);
let time = dog.sleeping();
console.log(time);
let gt = dog.getTimeSleeping();
console.log(gt);