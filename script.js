let firstNumber;
firstNumber = 5;
let secondNumber = firstNumber * 3;
let thirdNumber = firstNumber + secondNumber;
console.log(firstNumber, secondNumber, thirdNumber);

let firstName = prompt('Имя', '')
let lastName = prompt('Фамилия', '')
alert(`What\'s up ${firstName} ${lastName}`)

let x = prompt('Первое число:','');
let y = prompt('Второе число','');
alert(+x * +y);
alert(+x / +y);
alert(+x + +y);
alert(+x - +y)

let hours = prompt('Количество рабочих часов:', '');
let workDay = prompt('Количество рабочих дней','');
let rate = prompt('Рейт за час','');
let sallary = (+hours * +workDay * +rate)

let a = +prompt('Введите число:','');
alert(isFinite(a));

let f = +prompt('Введите число:','');
if( f%2 == 0) {
    alert("Это чётное число");
} else {
    alert("Это число нечётное")
}

let num1 = Math.round((Math.random() * 100));
let num2 = +prompt('Введите число:','');
if(num1<num2) {
    alert('num1 меньше num2')
}
else {
    alert('num1 больше num2')
}
alert(num1);
alert(num2)

let str = prompt('Введите "Мне нравится изучать Front-end":','');
let str2 = prompt('Что именно нравится изучать?','');
str.includes("html");
let strNew = str.slice(0,20);
let result = strNew.concat(str2);
alert(result)