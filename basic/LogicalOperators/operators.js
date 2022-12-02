// ! - Оператор отрицания (НЕ) чаще всего используется в условных инструкциях (if else ...) Оператор НЕ всегда дает как результат одно из двух значении true - false

// Ложные значения в JS

let fValue1 = 0;
let fValue2 = null;
let fValue3 = '';
let fValue4 = undefined;
let fValue5 = false;


console.log(Boolean(fValue1));
console.log(Boolean(fValue2));
console.log(Boolean(fValue3));
console.log(Boolean(fValue4));
console.log(Boolean(fValue5));


console.log("*************************************")

/* Примеры с оператором !*/

/*
!10            // false
!0             // true
!'abc'        // false
!''           // true
!true         // false
!undefined    // true

* */
console.log(!10);
console.log(!0);
console.log(!'abc');
console.log(!'');
console.log(!true);
console.log(!undefined);

// Примеры с опретором двойного отрицания !! (отрицания отрицания !!)

/*
!!10            // true
!!0             // false
!!'abc'        // true
!!''           // false
!!true         // true
!!undefined    // false

* */

console.log("------------------------------------------------");

console.log(!!10);
console.log(!!0);
console.log(!!'abc');
console.log(!!'');
console.log(!!true);
console.log(!!undefined);

console.log("---------------------------------------------");

const myObj = {};
console.log(!!myObj);




