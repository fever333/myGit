// console.log('hello world...');

// let age = 25;
// age = 19
// const user = 'John'

// console.log(age);
// console.log(user);

// let a = "string" //(строка);
// let b = null //(значение не известно);
// let c = undefined //(значение не присвоенно);
// let d = true/false // (boolean значения/логика);
// let z = symbol //(для перебора объектов);
// let h = {} // (объекты);

// console.log(typeof undefined)
// console.log(typeof 0);
// console.log(typeof 10n);
// console.log(typeof true);
// console.log(typeof 'foo');
// console.log(typeof Symbol('id'));
// console.log(typeof Math);
// console.log(typeof null)
// console.log(typeof alert())

// let a
// console.log(a)

// alert('Пример')
// const ages = prompt('Введите возраст')
// const gender = confirm('Ваш пол?')

// console.log("ages",ages)
// console.log("gender", gender);

// let value = true
// console.log(typeof value)
// console.log(value)
// value = String(value);
// console.log(value, typeof value)
// console.log(value)

// let str = '123'
// console.log(typeof str);
// console.log(str);

// let num = Number(str);
// console.log(num, typeof num)

// let age = Number('Любая строка вместо числа')
// console.log(age)

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean('Привет!'))
// console.log(Boolean(''))

console.log('1' + 2); // ( '1' + 2 бинарный знак)
console.log(2 + "1");
console.log(2 + 2 + "1");
console.log(2 + 2 + +'1'); // (+'1' унарный )
console.log(+'7' + 5)

// вычитание 
console.log(6 - "2")
//умножение
console.log('6' * "2")
// Деление
console.log('6'/ '2');

// Взятие остатка от деления 

console.log(5 % 2);
console.log(7 % 2)


// возведение в степеь

console.log(2 ** 2)

let counter = 2 
counter++;
console.log('counter++', counter);
counter--;
console.log('counter--', counter)

let counters = 1;
let a = ++counter;
console.log('ПОСТфиксая форма',counters++);
console.log('ПРЕфиксная форма',++counters)