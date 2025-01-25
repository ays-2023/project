// //////////////////////Конструкция if-else, switch-case////////////////////////////////////

// let num = 50;

// if(num < 49){
//     console.log("False");
// }else if(num > 100){
//     console.log("More");
// }else{
//     console.log("True");
// }


// num == 50 ? console.log("True") : console.log("False");


// switch (num) {
//     case num < 49:
//         console.log('Неверно!');
//         break;
//     case num > 100:
//         console.log('Много!');
//         break;
//     case num > 80:
//         console.log('Всё ещё много!');
//         break;
//     case 50:
//         console.log('Верно!');
//         break;
//     default:
//         console.log('Что-то пошло не так!');
//         break;
// }


// ////////////////////////////Циклы//////////////////////////////////////

// let num2 = 50;

// while(num2 <= 55){
//     console.log(num2);
//     num2++;
// }

// do{
//     console.log(num2);
//     num2++;
// }while(num2 <= 55);


// for(let i = 1; i<=5; i++){
//     if(i == 4){
//         break;
//     }

//     if(i == 2){
//         continue;
//     }

//     console.log(i);
// }


//////////////////////////first task///////////////////////////////////////////////

'use strict';


let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

}
start();

    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    
    };
}
chooseExpenses();


function detectDayBudget() {                                            // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();


function detectLevel() {                                                // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}
checkSavings();


function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();
