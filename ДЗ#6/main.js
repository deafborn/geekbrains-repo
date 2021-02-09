//Вставляем котиков в нижний див
let links = document.querySelectorAll('.header__links'),
bottomImg = document.querySelector('.bg-image');


for (let link of links) {
    link.addEventListener('click', func);
}

function func(e) {
     bottomImg.src = this.href;
     e.preventDefault();
}

//крутим котиков 

document.querySelector('#leftArrow').addEventListener('click', minus);
document.querySelector('#rightArrow').addEventListener('click', plus);
let i = 1;

function plus() {
    if (i < 3) {
    bottomImg.src='./img/kotiki_full_' + (i + 1) + '.jpg'
    i++;
    }
}

function minus() {
    if (i > 1) {
    bottomImg.src='./img/kotiki_full_' + (i - 1) + '.jpg'
    i--;
    }
}

