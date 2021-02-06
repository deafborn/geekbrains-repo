// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

let num = 145;

let transformToObj = (num) => {
    let object = {},
        numarray = String(num).split('');

    if (num <= 999) {
        object.единицы = Number(numarray[2]);
        object.десятки = Number(numarray[1]);
        object.сотни = Number(numarray[0]);
    } else {
        console.log('Число превышает допустимый предел');
    }

    return (object);
};

console.log(transformToObj(613));
console.log(transformToObj(1000));

// 2.

//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

do { //Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (event == -1) {
        break;
    } else {
        ok = isAnswer(works.a0, event);
        if (event === 1) {
            answers.push(works.a00 + works.a1);
        } else {
            answers.push(works.a00 + works.a2);
        }

    }
} while (!ok);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.b0, event);
                if (event === 1) {
                    answers.push(works.b00 + works.b1);
                } else {
                    answers.push(works.b00 + works.b2);
                }
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                dSection();
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.c0, event);
                if (event === 1) {
                    answers.push(works.c00 + works.c1);
                } else {
                    answers.push(works.c00 + works.c2);
                }

            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
            case 2: // Второе действие
                dSection();
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

function dSection() {
    do {
        ok = false;
        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        } else {
            ok = isAnswer(works.d0, event);
            if (event === 1) {
                answers.push(works.d00 + works.d1);
            } else {
                answers.push(works.d00 + works.d2);
            }
        }
    } while (!ok);
}

let lastQuestion = +prompt('Какой вопрос вам напомнить?');

console.log(answers[lastQuestion - 1]);

// 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

var works = {
    a00: 'Что тяжелее?\n',
    a0: 4,
    a1: '1 - Пуд пуха\n',
    a2: '2 - Пуд железа\n',
    a3: '3 - Пуд золота\n',
    a4: '4 - Пуд пудом и будет\n',
};

var event, ok;

do {
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + works.a3 + works.a4 + '-1 - Выход из игры');

    if (event == -1) {
        break;
    } else {
        ok = isAnswer(works.a0, event);
    }

    if (event === 4) {
        alert('Вы знали!');
    } else {
        alert('А вот и нет! Попробуйте снова');
        ok = false;
    }

} while (!ok);

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}