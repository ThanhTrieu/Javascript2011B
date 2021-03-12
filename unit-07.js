//generation function
function* idMaker() {
  let index = 1;
  while (true) {
    yield index++;
  }
}
console.log(idMaker());
let ex = idMaker()
console.log(ex.next().value);
console.log(ex.next().value);
console.log(ex.next().value);