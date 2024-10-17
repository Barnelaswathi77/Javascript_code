
//const greet=(name)=>{
    //return ("Hello, " + name + "!");
//};
//console.log(greet("swathi"));//






let arr = [2, 1, 4, 5];
let n = 5;

function findmissing(arr, n) {
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  let actual = (n * (n + 1)) / 2;
  return actual - sum;
}

console.log(findmissing(arr, n));