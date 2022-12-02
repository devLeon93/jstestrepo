
// Все эти методы (push,pop,unshift,shift) мутируют оринальный массив т.е изменяет этот масив


const myArr = [45,67,8,21,45,67,14,111,78];

// Метод push - Добавляет элемент в конец массива

myArr.push(469);
//myArr.push(true);


//myArr.forEach((el) => console.log(el + " "));
//console.log(myArr.length);


// Метод pop - Удаляет  элемент с конца массива и возвращает удаленный элемент


//myArr.forEach((el) => console.log(el + " "));
myArr.pop();
const removedElement = myArr.pop();
console.log("Removed Element = ",removedElement);


// Метод unshift - Добавляет элемент в начало массива все остальные элементы сдвинуться соответственно индексы изменяться в массиве

myArr.unshift(-999);
console.log(myArr)


// Метод shift - Удаляет первый элемент массива и возвращает удаленный элемент
myArr.shift();
const removedElement1 = myArr.shift();
console.log("Removed Element = ",removedElement1);

myArr.
    forEach((el) => console.log(el))

/*-----------------------------------------------------------------*/

// Метод forEach - Проходиться (Перебирает и для каждого элемента массива
// он будет вызывать эту el => console.log(el * 2) ) по каждому элементу массива
// Также forEach - не меняет  оригинальный массив

console.log('---------------------------------------------------------------');
myArr.forEach(el => console.log(el * 2));
console.log('---------------------------------------------------------------');


// Метод map - Перебирает все  элементы массива и вызывает колбак функцию определенное кол раз
// зависимо от количества элементов в массиве  также возвращает новый массив. Также Метод map вернет всегда массив той же длины как и оригинальный массив


const myNewArray = myArr.map((el) => el * 3);
console.log("Old Array = ", myArr);
console.log("New Array = ", myNewArray);


