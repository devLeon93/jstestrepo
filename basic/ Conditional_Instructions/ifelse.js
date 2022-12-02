const person = {
    age: 29,
    isMarried: false
};

if (!person.name) {      // !undefined === true и мы выполняем блок кода
    console.log("Имя не указанно");
    // Другие действия в случае, если свойство "name" у обьекта "person" нету либо оно ложно
}

// If Else  Выполниться либо один либо другой блок кода

/*if (Условие){
    // Блок кода , выполняемый однократно, если Условие правдиво
} else {
    // Блок кода , выполняемый однократно, если Условие ложно
}*/

let val = 10;

if (val < 5) {
    console.log(val += 20);
} else {
    console.log(val -= 20);
}

// If Else IF

/*if (Условие1){
    // Блок кода , выполняемый однократно, если Условие1 правдиво
} else if (Условие2) {
    // Блок кода , выполняемый однократно, если Условие2 правдиво
} else {
    // Блок кода , выполняемый однократно, если предыдущие Условия ложны
}
*/

console.log("*******************************************************")

let someVar1 = 'tre';
let someVar2 = 45;


if(someVar1 < someVar2){
    console.log(`SomeVar1(${someVar1}) < then SomeVar2(${someVar2})`);
} else if (someVar2 > someVar1){
    console.log(`SomeVar2(${someVar2}) > then SomeVar1(${someVar1})`);
} else {
    console.log(`SomeVar1(${someVar1}) not a number`)
}


let num1 = 78;
let num2 = 78;

const myFunction = (a, b) => {
    if (a > b) {
        console.log(` Value ${a} > Value ${b}`)
    } else if (a < b) {
        console.log(` Value ${b} > Value ${a}`)
    } else if (a === b) {
        console.log(` Value ${a} === Value ${b}`)

    } else console.log("Unknown Error")

}

myFunction(num1, num2);

let val1 = false;
console.log(Boolean(!val1));

console.log("---------------------------------------------");


// Предпочтительный вариант IF

/*
if(Условие1){
 // Блок кода , выполняемый однократно, если Условие1 правдиво
}

if(Условие2){
 // Блок кода , выполняемый однократно, если Условие2 правдиво
}

if(Условие3){
 // Блок кода , выполняемый однократно, если Условие3 правдиво
}

* */

const sumPositiveNumbers = (a,b) => {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    if(a <= 0 || b <= 0){
        return  'Numbers are not positive'
    }

    return a +b;
}

sumPositiveNumbers(45,67);


// Switch

let age = 30;


switch (age) {
    case 18:
        console.log(`Вам испольнилось ${age} лет`);
        break;
    case 30:
        console.log(`Вам испольнилось ${age} лет`);
        break;
    case 29:
        console.log(`Вам испольнилось ${age} лет`);
        break;
    default:
        console.log("Unknown Error");
}

const month = 12;

switch (month) {
    case 2:
        console.log("Февраль");
        break;
    case 1:
        console.log("Январь");
        break;
    case 12:
        console.log("Декабрь");
        break;
    default:
        console.log("Это не зимний месяц");
}



