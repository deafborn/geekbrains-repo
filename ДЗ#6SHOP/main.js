let items = [{
        name: 'Корги',
        price: 60000,

    },
    {
        name: 'Шпиц',
        price: 40000,

    },
    {
        name: 'Хаски',
        price: 90000,

    },
    {
        name: 'Мопс',
        price: 25000,

    }
];


let buttons = document.querySelectorAll('.button');
let totalFront = document.querySelector('.cart_item-total');
let cartItems = document.querySelector('.cart__items');
let i = 0;

for (let button of buttons) {

    button.addEventListener('click', func);
    button.dataset.id = i;
    i++;

}

function func() {
    let id = this.dataset.id;
    let item = items[id];

    let mainDiv = document.querySelector('div[data-id="' + id + '"]');

    if (mainDiv) {
        let quantity = mainDiv.querySelector('.cart_item-qty');
        quantity.textContent++;

    } else {

        let mainDiv = document.createElement('div');
        mainDiv.classList.add('cart__item');
        mainDiv.dataset.id = id;

        cartItems.append(mainDiv);


        mainDiv.innerHTML = `
                <div class="cart_item-title">${item.name}</div>
                <div class="cart_item-qty">1</div>
                <div class="cart_item-price">${item.price}</div>
        `;
    }

    total();

    //  пересчитать тотал
    function total() {
        let items = document.querySelectorAll('.cart__item');
        let sum = 0;

        for (let item of items) {
            let quantity = item.querySelector('.cart_item-qty').textContent;
            let price = item.querySelector('.cart_item-price').textContent;
            sum += quantity * price;
        }
        totalFront.textContent = 'Итого: ' + sum + ' рублей';
    }
}




// function 