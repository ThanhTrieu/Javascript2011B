let p = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve('Y')
  }, 3000)
})

let t = null;
p.then(dt => {
  t = dt
  console.log(t)
  return t
});
console.log(t);