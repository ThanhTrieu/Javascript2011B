class Student {
  // khai bao thuoc tinh
  msv = 123;
  name = 'Van Teo';

  constructor(address = 'Ha Noi') {
    // ham khoi tao - no se tu dong chay dau tien khi khoi tao doi tuong cua class
    // khoi tao thuoc tinh
    this.age = 20;
    this.email = 'vanteo@gmail.com';
    this.add = address;
  }
  getAddress = () => {
    return this.add;
  }

  // khai bao phuong thuc
  diHoc() {
    return `${this.name} ngu quen ko di hoc`;
  }
  choiGame = () => {
    console.log(this);
    return `sinh vien ${this.msv} di choi game`;
  }

  static gotoSleep(timeAm = '00') {
    return `di ngu luc ${timeAm}`;
  }
}
// khoi tao doi tuong cua class Student
let stck = new Student('Hai Duong');
let stit = new Student('Quang Ninh');

let timeSleep = Student.gotoSleep('01');
console.log(timeSleep);

// truy cap vao thuoc tinh trong class
console.log(stck.name);
console.log(stck.age);
let playGame = stit.choiGame();
console.log(playGame);
let add = stit.getAddress();
console.log(add);