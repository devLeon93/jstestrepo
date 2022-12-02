/*console.log("Start")
setTimeout(() => {
    console.log("Go")
}, 2000);


const myF = (a,b) => {
    let c
    a = a + 1
   c = a + b
   return  c
}

console.log(myF(34,78))*/

let myArr = [23, 67, 87, 45, 90, 12, -23];
let min = myArr[0];
let max = myArr[0];
for (let i = 0; i < myArr.length; i++){
    console.log(myArr[i] + " ")

    if(myArr[i] > max){
       max = myArr[i];
    }

    if(myArr[i] < min){
        min = myArr[i];
  }
}
console.log("Min = " + min);
console.log("Max = " + max)










