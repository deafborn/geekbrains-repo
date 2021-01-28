//1.С помощью цикла while вывести все простые числа в промежутке от 0 до 100

let isNotSimple = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
};

num = 2; 

while (num <= 100) {
  if (!isNotSimple(num)) {
    console.log(num);
  }
  num++;
}

//2 + 3 С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

let basket = [
    { 
        name: 'Note20 Ultra',
        price: 80000,
        quantity: 2 
    },
    { 
        name: 'Iphone 12',
        price: 100000,
        quantity: 1 
    },
    { 
        name: 'Blackberry',
        price: 60000,
        quantity: 4 
    },
    { 
        name: 'Nokia 3110',
        price: 400,
        quantity: 2 
    },
];

let countBasketPrice = (arr) => {
    let sum = 0;

    for (let elem of basket) {
        sum += elem.price * elem.quantity;
    }
    return sum;
};

console.log(countBasketPrice(basket));


//4. *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: for(…){// здесь пусто}

for (let i = 0; i < 10; console.log(i++)) {

}

//5. 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

let str = '';

for (let i = 0; i < 20; i++) {
    str += 'x';
    console.log(str);
}

