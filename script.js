// Задача 1: Объявите переменную с именем ‘myVar’ и присвойте ей значение 10.
//  Выведите значение ‘myVar’ в div1. 


let myVar_ = 10;
const div1 = document.getElementById('div1');
div1.textContent = myVar_;





//Задача 2: Преобразуйте строку ‘123’ в число. Выведите результат в div2.

let stri = '123';
const integer = parseInt(stri);
const div2 = document.getElementById('div2');
div2.textContent = integer;



// Задача 3: Преобразуйте число 123 в строку. Выведите результат в div3.

let int = 123;
let str = int.toString();
const div3 = document.getElementById('div3');
div3.textContent = str;



// Задача 4: Проверьте, является ли значение переменной ‘myVar’ числом. Выведите результат в div4. 

let myVar = '123';
const div4 = document.getElementById('div4');
if (isNaN(myVar)) {
    div4.textContent = 'myVar не является числом';
} else {
    div4.textContent = 'myVar является числом';
}


// Задача 5 Преобразуйте логическое значение true в строку. Выведите результат в div5. 
const div5 = document.getElementById('div5');
div5.textContent = String(true);


// Задача 6 Преобразуйте строку ‘true’ в логическое значение. Выведите результат в div6. 
const div6 = document.getElementById('div6');
div6.textContent = Boolean('true');


// Задача 7 Создайте объект с именем ‘myObj’, которая содержит поля ‘name’ и ‘age’. Выведите значение ‘myObj’ в div7.
let myObj = {
    name: 'Имя',
    age: 30
};
const div7 = document.getElementById('div7');
div7.textContent = JSON.stringify(myObj);


// Задача 8 Проверьте, является ли значение переменной ‘myVar’ объектом. Выведите результат в div8. 
const div8 = document.getElementById('div8');
if (typeof myVar === 'object' && myVar !== null) {
    div8.textContent = 'myVar является объектом';
} else {
    div8.textContent = 'myVar не является объектом';
}


// Задача 9 Преобразуйте число 123.456 в строку, округлив его до двух знаков после запятой. Выведите результат в div9. 
const div9 = document.getElementById('div9');
div9.textContent = Number(123.456).toFixed(2);


// Задача 10 Преобразуйте ‘123.456’ в число, округлив его до целого значения. Выведите результат в div10.”
const div10 = document.getElementById('div10');
div10.textContent = Math.round('123.456');
