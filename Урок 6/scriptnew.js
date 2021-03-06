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
                    reject(document.querySelector('.goods-list').innerHTML = `Ошибка ${xhr.status}: ${xhr.statusText}`)
                }
                else {
                    resolve(callback(xhr.responseText)
                    )
                }
            }
        }
        xhr.open('GET', url);
        xhr.send();
    })
}
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


Vue.component('search', {
    data: function () {
        return {
            title: '',
        };
    },
    props: [
        'goods',
    ],
    template: `
    <div>
    <input type="text" class="search" v-model="title">
    <button class="search-button" type="button" v-on:click="search()">Поиск</button>
    </div>
    `,
    methods: {
        search() {
            let cancel = document.querySelectorAll(".goods-item");
            cancel.forEach(item => { item.style.border = "1px solid black" })
            console.log(this.title);
            let regexp = new RegExp("^" + this.title + "+", 'i')
            this.goods.forEach(item => {
                if (regexp.test(item.product_name) == true) {
                    let red = document.querySelector("." + this.goods.pop.name + item.id_product);
                    red.style.border = "1px solid red";
                }
            })
        }
    }

})

Vue.component('cart', {
    data: function () {
        return {
            emptyCart: 'Корзина пуста',
        };
    },
    props: [
        'sum',
        'cart_goods',
        'add-good',
        'del-good',
    ],
    template: `
    <div class="cart">
                <h3>Корзина</h3>
                <hr>
                <div class="cart-list">
                    <h4 v-if="cartGoods.length == 0">{{emptyCart}} </h4>
                    <div goods__item v-for="item in cartGoods">
                        <p>{{item.product_name}}&nbsp;&nbsp;
                            <span class='plusminusbutton' v-on:click="addProduct(item.id_product)">+</span>&nbsp;&nbsp;
                            <span>{{item.quantity}}</span>&nbsp;&nbsp;
                            <span class='plusminusbutton' v-on:click="delGood(item.id_product)">-</span>
                        </p>
                    </div>
                </div>
            </div>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hi',
        noData: 'No data',
        emptyCart: 'В корзине нет товаров',
        goods: [],
        cartGoods: [],
        sum: 0,
        title: '',
    },
    
    methods: {
        addProduct(id) {
            let newInCart = this.goods.find(item => item.id_product === id); 
            let exInCart = this.cartGoods.find(item => item.id_product === id);
            if (exInCart != undefined) {
                let i = this.cartGoods.findIndex(item => item.id_product === id);
                this.cartGoods[i].quantity += 1;
               
            }
            else {
                newInCart.quantity = 1;
                this.cartGoods.push(newInCart);
            }

            this.result();
     
        },

        // cartCreate() { 
        //     document.querySelector('.cart').innerHTML = "";
        //     this.cartGoods.forEach(item => { 
        //         const cartView = new Cart(item.product_name, item.price,item.id_product, item.quantity) //!!!!
        //         document.querySelector('.cart').insertAdjacentHTML('beforeEnd', cartView.getCard());
        //         })
        //     },

        delGood(id) {
            let i = this.cartGoods.findIndex(item => item.id_product === id);
            this.cartGoods[i].quantity -= 1;
            if (this.cartGoods[i].quantity <=0) {
                this.cartGoods.splice(i,1);
            }
            this.result();
            
         },

        openCart() {
            if (document.querySelector(".cart").style.visibility === 'visible') {
                document.querySelector(".cart").style.visibility = 'hidden';
            }
            else {
                document.querySelector(".cart").style.visibility = 'visible';
            }
        },

        result() {
            let sum = 0
            this.cartGoods.forEach
                (item => sum += item.price*item.quantity)

                document.querySelector(".cart__total").innerHTML = sum;      
    
        },

        
    }
})

makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
    app.goods = JSON.parse(goods)
});






