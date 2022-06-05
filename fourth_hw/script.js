// Напишите функцию max, которая сравнивает два числа и возвращает большее: 

function max (a,b) {
    if(a>b) {
        return(a);
    } else {
        return(b)
    }
};


// Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:
function min(){
    for(let i = 1, minNumber = arguments[0]; i < arguments.length; i++, minNumber = result) {
        if(arguments[i] < minNumber) {
            result = arguments[i];
        } 
    }
    return minNumber;
}

console.log( min(0, -1, 100, 500, 100500) );


// Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции(методы) массивов:	
// 	•	Отфильтруйте пользователей младше 18 лет
// 	•	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// 	•	Сформируйте новый массив, который содержит только полное имя пользователей


let users = [
    {firstname: 'John', lastname: 'Doe', age: 25, middlename: 'Abraham'},
    {firstname: 'Jane', lastname: 'Doe', age: 20, middlename: 'wifey'},
    {firstname: 'Baby', lastname: 'Doe', age: 15},
    {firstname: 'Jeffrey', lastname: 'Lebowski', age: 32, middlename: 'The Dude'},
    {firstname: 'Walter', lastname: 'Sobchak', age: 35},
    {firstname: 'Bruce', lastname: 'Wayne', age: 25, middlename: 'Batman'},
    {firstname: 'Naruto', lastname: 'Uzumaki', age: 17},
    {firstname: 'Garry', lastname: 'Potter', age: 14, middlename: 'Wizard'},
    {firstname: 'Michael', lastname: 'Phelps', age: 32, middlename: 'The Baltimore bullet'},
    {firstname: 'Panda', lastname: 'Kung-Fu', age: 18}
];

// 1.Отфильтруем пользователей младше 18 лет.;
let teenUser = users.filter(function(user) {
  return user.age < 18;
});
console.log (teenUser);

// 2.Добавим каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname.
users.forEach(function(user) {
    for(let i = 0; i < users.length; i++){
        if(users[i].middlename) {
            users[i].fullName = users[i].firstname + users[i].middlename + users[i].lastname;
        } else {
            users[i].fullName = users[i].firstname + users[i].lastname;
        }
    }
});
console.log(users);

// 3.Сформируем новый массив, который содержит только полное имя пользователей.
let fullNames = users.map(function(user) {
  return user.fullName;
});
console.log(fullNames);



// Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент

let a = [4,5,6];
function funcShift() {
    let b = [];
    for (let i = 1; i < a.length; i++) {
       b[i-1]= a[i]
    }
    a = b;
    return a
}
console.log(funcShift(a))



// Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов./

let arr = [1,2,3];
    function funcPush (arr1,...arguments) {
        for (let i = 0; i < arguments.length; i++) {
            arr1[arr1.length] = arguments[i];
        }
        return arr1;
    }
console.log(funcPush(arr,4,5,6));



// Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, 
// поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

let user = {firstname: 'Tom', age: 10};
        let ass = funcObjassign(user, {firstname: 'John'}, {lastname: 'Doe'});
            function funcObjassign(mainObj,...arguments) {
                let copy = mainObj; 
                for(let i = 0; i < arguments.length; i++) {
                    let obj = arguments[i];
                    for (let prop in obj) { 
                        if (obj.hasOwnProperty(prop)) { 
                            copy[prop] = obj[prop]; 
                        }
                    }
                }
                return copy;
            }
            console.log(user);
            console.log(ass);



//  Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры,
//   если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться,
//    а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. 
//    Параметр author - опциональный, но должна происходить проверка: если параметр не передан,
//     то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате: 
// <имя_автора>, <дата>
// <текст_сообщения>


let date = prompt('Введите дату в формате ГГГГ-ММ-ДД!', '');
        let message = prompt('Ведите текст сообщения!', '');
        let author = prompt('Введите ваше имя', '');
        function setComment (date, message, author) {
            if(date && message){
                if(author){
                    console.log(author,date,message)
                } else{
                    author = 'Anonymous';
                    console.log(author,date,message)
                }
            } else {
                return alert('Данные переданы некорректно!');
            }
        }
        setComment(date, message, author);
        console.log(setComment)

