/* Деструктуризация объектов - Деструктуризация (destructuring assignment) –
это особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.
 */

const userProfile = {
    name: 'Leonid',
    age: 29,
    email: 'leonidbars93@gmail.com',
    city: 'Ungheni'
}

const {name, age} = userProfile;
const {email, city} = userProfile;

console.log("age = ", age);
console.log("email = ", email);
console.log("name = ", name);
console.log("city = ", city);


const animal = {
    breed: "Sheppard",
    color: "Gray",
    paws: 4,
    tail: 1,
    nickname: "Loki"
};

const {breed, paws, tail} = animal;
const {nickname, color} = animal;


console.log(breed, paws, tail);
console.log(nickname, color);


// Деструктуризация массивов


const myColors = ['Green', 'Gray', 'Black', 'Purple'];

const [color1, color2] = myColors;
const [color3, color4] = myColors;

console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);


const fruits = ['Apple', 'Banana'];

const [fruitOne, fruitTwo] = fruits;

console.log(fruitOne);
console.log(fruitTwo);


// первый и второй элементы не нужны
let [, , title] = "Юлий Цезарь Император Рима".split(" ");

console.log(title) // Император


// Деструкткризация в Функциях

const carInfo = {
    model: "KIA",
    typeEngine: "Electric",
    year: 2022,
    color: "Dark Pental"
}

// Деструктуризация в Функциях

const userCarInfo = ({model,year}) => {
    if(!model){
        return `Car ${model} has no model`
    }
     return ` My Car is ${model} Year production =  ${year} `
}

console.log(userCarInfo(carInfo));










