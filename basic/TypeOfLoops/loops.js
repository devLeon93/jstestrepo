/*
Типы циклов в JS
- for
- for ... in ...
- while
- do ... while
- for ... of ...

Циклы можно использовать для массивов (НО ЭТО НЕ РЕКОМЕНДУЕТСЯ) лучше использовать функции высшего порядка массивов (forEach, map, reduce etc..)
* */
console.log("FOR--------------------------")
for (let i = 0; i < 5; i++){
    console.log(i + " ");
}
console.log("--------------------------")

/* НО если все таки посмотреть как с помощью циклов перебрать массив то пример ниже */

const myArray = ['first', 'second', 'third', 'five'];

for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i] + " ");
}
console.log("FOR EACH----------------------------------------")

/* Тоже самое только через функции высшего порядка а именно forEach этот метод возвращаеет undefined так что нет смысла присваивать его к переменой*/

myArray.forEach((el,index) => {
    console.log(el,index);
});

/* Цикл While позволяет выполнять блок кода пока условие правдиво */

console.log("WHILE -------------------------------------------")

let someVar = 45;
while (someVar < 50){
    console.log("Hello");
    someVar++;
}

/* Do While Цикл - Выполниться хотябы один раз  */

console.log("DO WHILE-------------------------------------")

let i = 0;
do {
    console.log(i);
    i++;
}while (i < 5);


/* For IN Цикл - Используется этот цикл мы можем перебрать все свойства объекта
for (const / let key in Object){
// Действия с каждым свойством объекта
// Значение свойства - Object[key]}
key - свойство в объекте
* */

console.log("FOR IN ----------------------------")

const myObj = {
    name: 'Leonid',
    age: 29,
    isMarried: false,
    phone: '+37378877359'
}

for (const key in myObj){
    console.log(key,myObj[key]);
}

/*For Each для Объектов  Object.keys  -
с помощью вызова метода  keys у Object можно получить все ключи в виде массива а потом через For Each перебрать уже массив */

const carInfo = {
    model: "KIA",
    typeEngine: "Electric",
    year: 2022,
    color: "Dark Pental"
}

/* Object.keys(carInfo) - это часть нам дает массив свойств */

Object.keys(carInfo).forEach(key => {
        console.log(key, carInfo[key]);
    });

/*Можно перебрать значения свойств объекта для этого вызвать метод values у  Object  */

Object.values(carInfo).forEach(value => {
    console.log(value);
})

/*Можно проверить как конверотрует объект в массив Object.keys */

console.log(Object.keys({})); // Получаем массив пустой

console.log(Object.keys({name: 'Leonid', isMarried:false})); // Получаем свойство [ 'name', 'isMarried' ]

console.log(Object.values({name: 'Leonid', isMarried:false})); // Получаем значение [ 'Leonid', false ]

/* For IN Цикл для Массивов - Используется этот цикл мы можем перебрать все элементы массива
for (const / let  key in Object){
// Действия с каждым свойством объекта
// Значение свойства - Object[key]}
key - свойство в объекте
* */

const someArray = [true, 'Leonid', 345, 'abc'];

for (const key in someArray){
    console.log(someArray[key]);
}

/* For of Цикл - Появился в ES6

for (Element of Iterable){
// Действие с определенным элементом
}

Iterable - это любое значение либо переменная по которому можно итерироваться элементы которого можно переберать

* */

const myString = 'Hello';

for (const letter of myString){
    console.log(letter);
}

/*For of - для Массивов */

const someArray4 = [true, 'Leonid', 345, 'abc',654];

for (const el of someArray4){
    console.log(el);
}

/*For of - не для объектов */

const thisObj = {
    x: 10,
    y: true,
    z:'abc'
}

for (const prop of thisObj){
    console.log(prop);
}













