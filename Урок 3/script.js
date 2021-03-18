const makeGETRequest = (url, callback) => {
    return new Promise((resolve, reject) => {
        var xhr;
        if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) { 
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
            if (xhr.status != 200) {
                    reject(`Ошибка ${xhr.status}: ${xhr.statusText}`)
            } else {
                resolve(callback(xhr.responseText)
                    )
          }
            }
        }
        xhr.open('GET', url);
        xhr.send();
    })
}

// const goods = [{
//     title: 'Shirt',
//     price: 150,
//     img: './images/shirt.png'
//   },
//   {
//     title: 'Socks',
//     price: 50,
//     img: './images/socks.png'
//   },
//   {
//     title: 'Jacket',
//     price: 350,
//     img: './images/jacket..png'
//   },
//   {
//     title: 'Shoes',
//     price: 250,
//     img: './images/shoes.png'
//   },
// ];

class Product {
    constructor(title, price, id, img) {
        this.title = title;
        this.price = price;
        this.id = id;
        this.img = img;

    }
    getCard() {
        return `<div class="goods__item">
        <img src="${this.img}" alt="image" class="goods__item-img">
    <div class="goods__list">
        <h3 class="title">${this.title}</h3>
        <span class="price">${this.price}</span>
        <div class ="to-cart"><button class="button" onclick = "cart.addProduct(${this.id})">В корзину</button>
        </div>
    </div>`;
        
    }
}

class ProductList {
    constructor() {
        this.products = [];
    }
    fetchGoods() {
        const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
        makeGETRequest(`${API_URL}/catalogData.json`, (products) => {
            let p = new Promise((resolve, reject) =>
            resolve(this.products = JSON.parse(products))
            ).then(this.render())
        })
    }

    render() {
        this.products.forEach
            (item => {
                const productsItem = new Product(item.product_name, item.price, item.id_product, item.img);
                document.querySelector('.goods__shop').insertAdjacentHTML('beforeEnd', productsItem.getCard());
            })
    }
}

class Cart{
    constructor(title, price, id, quanity) { 
        this.title = title;
        this.price = price;
        this.id = id;
        this.quanity = quanity;
    }
    getCard() {
        return `<div>${this.title}</div>&nbsp;&nbsp;&nbsp;<div class='cartbox'><span class="plusminusbutton" onclick="cart.delGood(${this.id})"> - </span>${this.quanity} <span class="plusminusbutton" onclick="cart.addProduct(${this.id})"> + </span> &nbsp;&nbsp;&nbsp;</div><br>`
    }
}
class CartList {
    constructor() {
        this.cartGoods = []
    }
    addProduct(id) {
        let newCart = list.products.find(item => item.id_product === id); // !!!!
        let alreadyCart = this.cartGoods.find(item => item.id_product === id);
        if (alreadyCart != undefined) {
            let i = this.cartGoods.findIndex(item => item.id_product === id);
            this.cartGoods[i].quanity += 1;
        }
        else {
            newCart.quanity = 1;
            this.cartGoods.push(newCart);
        }
        this.cartCreate();
        this.summary();
    }
    cartCreate() { 
        document.querySelector('.cart').innerHTML = "";
        this.cartGoods.forEach(item => { 
            const cartView = new Cart(item.product_name, item.price,item.id_product, item.quanity) //!!!!
            document.querySelector('.cart').insertAdjacentHTML('beforeEnd', cartView.getCard());
            })
        }
    delGood(id) {
        let i = this.cartGoods.findIndex(item => item.id_product === id);
        this.cartGoods[i].quanity -= 1;
        if (this.cartGoods[i].quanity <=0) {
            this.cartGoods.splice(i,1);
        }
        this.cartCreate()
        this.summary();
     }
    openCart() {
        if (document.querySelector(".cart").style.visibility === 'visible') {
            document.querySelector(".cart").style.visibility = 'hidden';
        }
        else {
            document.querySelector(".cart").style.visibility = 'visible';
        }
    }
    summary() {
        let sum = 0
        this.cartGoods.forEach
            (item => {
                sum += item.price*item.quanity;
            })
            
        document.querySelector(".cart__total").innerHTML = sum;      
    }
}
const list = new ProductList();
list.fetchGoods();
const cart = new CartList(); 

