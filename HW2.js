// ----------------------------------------------------------------------Задача № 1------------------------------------------------------------------------------//

var a = 1,
    b = 1,
    c, d;

c = ++a;
alert(c); // 2

// Потому что сначала a увеличивается на единицу(а = 2), это значение присваивается c и после этого срабатывает алерт.

d = b++;
alert(d); // 1

// Потому сначала d становится равным единице, затем срабатывает алерт, затем b увеличивается на единицу, b = 2.

c = (2 + ++a);
alert(c); // 5

// Сначала выполнятся действия в скобках, при этом а становится равен 3, потом результат присвоится c, затем алерт отдаст 5.

d = (2 + b++);
alert(d); // 4

// Сначала 2 + 2 = 4, затем алерт 4, затем b = 3

alert(a); // 3
alert(b); // 3

// Описано выше.


// ------------------------------------------------------------------------------Задача №2------------------------------------------------------------//

// Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);

console.log(x);

// x = 5 => x = 1 + ( 2 * 2) = 1 + 4 = 5

// ------------------------------------------------------------------------------Задача №3------------------------------------------------------------//


// Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

let a = 5;
let b = 12;

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}

// ------------------------------------------------------------------------------Задача №4------------------------------------------------------------//

// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let a = +prompt('Пожалуйста, введите число от 0 до 15', '');

switch (a) {
    case 1:
        console.log(arr.slice(1));
        break;
    case 2:
        console.log(arr.slice(2));
        break;
    case 3:
        console.log(arr.slice(3));
        break;
    case 4:
        console.log(arr.slice(4));
        break;
    case 5:
        console.log(arr.slice(5));
        break;
    case 6:
        console.log(arr.slice(6));
        break;
    case 7:
        console.log(arr.slice(7));
        break;
    case 8:
        console.log(arr.slice(8));
        break;
    case 9:
        console.log(arr.slice(9));
        break;
    case 10:
        console.log(arr.slice(10));
        break;
    case 11:
        console.log(arr.slice(11));
        break;
    case 12:
        console.log(arr.slice(12));
        break;
    case 13:
        console.log(arr.slice(13));
        break;
    case 14:
        console.log(arr.slice(14));
        break;
    case 15:
        console.log(arr.slice(15));
        break;

}

На самом деле несколько не понял условия.Понятно, что задача на свитч, но здесь уже надо стараться сделать хуже, а это непросто.Можно все проще сделать в одно действие:

    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let a = +prompt('Пожалуйста, введите число от 0 до 15', '');
console.log(arr.slice(a));

// ------------------------------------------------------------------------------Задача №5------------------------------------------------------------//

// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

//------------#1-----------//

function addition(a, b) {
    return a + b;

}

let result = addition(3, 5);

console.log(result);

//------------#2-----------//

function subtraction(a, b) {
    return a - b;

}

let result = subtraction(3, 5);

console.log(result);

//------------#3-----------//

function division(a, b) {
    return a / b;

}

let result = Math.round(division(3, 5));

console.log(result);

//------------#4-----------//

function multiplication(a, b) {
    return a * b;

}

let result = multiplication(3, 5);

console.log(result);

// ------------------------------------------------------------------------------Задача №6------------------------------------------------------------//

// 6. Реализовать функцию с тремя параметрами: , где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(a, b, operation) {
    switch (operation) {
        case '+':
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case '/':
            return division(a, b);
        case '*':
            return multiplication(a, b);
    }
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;

}

function division(a, b) {
    return a / b;

}

function multiplication(a, b) {
    return a * b;
}

result = mathOperation(1, 2, '*');
console.log(result);

// ------------------------------------------------------------------------------Задача №7------------------------------------------------------------//


// 7. * Сравнить null и 0. Попробуйте объяснить результат.

Null - с позиции программирования, это действительно ничто.Если ноль - это вполне себе число, которое, например, можно присвоить переменной, то Null - это пустота.Это хорошо иллюстрирует алерт - если в нем нажать "отмена", то он вернет Null - т.е.абсолютное ничто.При этом, еслли ввести 0 и нажать ок, то получим вполне себе числовое значение, с которым можно работать.

// ------------------------------------------------------------------------------Задача №8------------------------------------------------------------//

// 8 *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return pow * power(val, pow - 1)
    }
}

result = power(2, 6);
console.log(result);