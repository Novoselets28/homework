// let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
// let sum = arr.reduce(function(previousValue, item) {
//     if(!isNaN(+item)) return previousValue + +item;
//     return previousValue;
// }, 0);

// console.log(sum);

// const arr = ['AngularJS', 'jQuery'];
// arr.unshift('Backbone.js');
// let frameworks = arr.push('ReactJS','Vue.js');
// arr.splice(1,0,'CommonJS');
// let remove = arr.splice(3,1);
// alert(`Это здесь лишнее: ${remove}`);


// Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. Разбейте ее на массив слов, и переставьте слова в порядке 
// ‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива (indexOf, splice ...).
//  Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

// let str = 'Как однажды Жак звонарь сломал фонарь головой';
// let arr = str.split(' ');
// let helper = arr.pop();


// arr.splice(arr.indexOf('звонарь'), 0, arr.splice(arr.indexOf('однажды'), 1),arr.splice(arr.indexOf('сломал'),1), helper.toString())
// str = arr.join(' ');

// alert(str);


// Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей.
//  С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. 
// Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

// const person = {
//     name: 'Jack',
//     lastName: 'Sparrow',
//     position: 'Captain',
// };
// let newOption = prompt('Введите свойтво');

// if(newOption in person) {
//     alert(person[newOption])
// } else {
//     person[newOption] = prompt('Введите значение свойства');
// }

// console.log(person);



// Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями,
//  прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные.
//   Добавьте этот гаджет персоне, созданной ранее.
let user=[];
const phone = {};

phone.brand = prompt("Введите бренд телефона:","");
phone.model = prompt("Введите модель","");
phone.resolution = prompt("Введите расширение","");
phone.color = prompt("Введите цвет телефона","");

user= Object.assign(phone); 
// || user.phone=phone; 
console.log(user);



// Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов,
//  полученное значение добавляйте в конец созданного массива.
//  После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.


let arr = [];

for(let i=0;i<10;i++) {
    let userNumber = prompt('Введите число')
    arr.push(userNumber);
}
let rezu = arr.reduce(function(previousValue, userNumber) {
    if(!isNaN(+userNumber)) 
    return previousValue + +userNumber;
    return previousValue;
}, 0);
alert(rezu)

// let allSymbol = [];
// let sumNumb = 0;
// for (let i = 0; i < 7; i++) {
//     let anyNumnber = +prompt(" Enter any number", "");
//     allSymbol.push(anyNumnber);
// }

// for (let i = 0; i < allSymbol.length; i++) {
//     let result = +allSymbol[i];
//     if (!isNaN(result)) {
//         sumNumb = sumNumb + result;
//     }
// }
// alert(sumNumb);



// Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения - (задача со звездочкой)
// let umnozg = [];
let umnozg = [];
for(let a=0; a < 10; a++){
        for(let b=0; b < 10;b++){
            umnozg[a][b]=`${b+1}x${a+1}=${(a+1)*(b+1)}`;
        }
    }
    console.log(umnozg)

