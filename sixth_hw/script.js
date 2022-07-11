/*1. Получите текущую дату
Напишите функцию JavaScript, чтобы получить текущую дату. Передайте разделитель в качестве аргумента.*/

function curday(a){
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth()+1;
    let yyyy = now.getFullYear();
    return (dd+a+mm+a+yyyy);
}



/*2. Получить название месяца с определенной даты
Напишите функцию JavaScript, чтобы получить название месяца с определенной даты.*/

function getMonthName(curdate){
    monthArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
      return monthArray[curdate.getMonth()];
};



/*3. Сравнение двух дат
Напишите функцию JavaScript для сравнения дат (т.е. больше, меньше или равно).
Пример ввода:
compareDates(new Date('11/14/2021 00:01'), new Date('11/14/2021 00:00'));
Вывод:
"Date1 > Date2"*/

function compareDates(date1, date2) {
    if(date1 > date2) {
        return 'date1 > date2'
    } else if(date1 < date2) {
        return 'date1 < date2'
    } else  {
        return 'date1 = date2'
    }
}



/*4. Проверьте, является ли дата выходным днем
Напишите функцию JavaScript, чтобы проверить, является ли день выходным.
Пример ввода:
checkIsWeekend('Nov 16, 2020');
Вывод:
"не выходной"*/

function checkIsWeekend(someDate) {
    let weekday = new Date(someDate);
    return (weekday.getDay() == 0 || weekday.getDay() == 6) ? "Выходной" : "Не выходной";
}











