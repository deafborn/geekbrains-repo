const goods = [{
    title: 'Shirt',
    price: 150,
    img: './images/shirt.png'
  },
  {
    title: 'Socks',
    price: 50,
    img: './images/socks.png'
  },
  {
    title: 'Jacket',
    price: 350,
    img: './images/jacket..png'
  },
  {
    title: 'Shoes',
    price: 250,
    img: './images/shoes.png'
  },
];

function product(item, img) {
  return `<div class="goods__item">
                <img src="${img}" alt="image" class="goods__item-img">
            <div class="goods__list">
                <h3 class="title">${item.title}</h3>
                <span class="price">${item.price}</span>
                <button class="button">В корзину</button>
                </div>
            </div>`;
}

(function fillWithProducts(prodArr) {
  document.querySelector('.goods__shop').insertAdjacentHTML('beforeend', prodArr.map(item => product(item, item.img)).join(''));
}(goods));