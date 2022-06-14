//Слайдер
const top = document.querySelector('.topplaces');
const topDir = top.querySelector('.topplaces__dir');
const topDirItems = topDir.querySelectorAll('.topplaces__dir-items');
const world = top.querySelector('.topplaces__world');
const worldCard = world.querySelectorAll('.topplaces__card-items');
const uz = top.querySelector('.topplaces__uz');
const uzCard = uz.querySelectorAll('.topplaces__card-items');
const prev = top.querySelector('.topplaces__prev');
const next = top.querySelector('.topplaces__next');
// Язык
import { translate } from './translate.js';
let defLang = '';
const lang = document.querySelector('.header__lang');

const langBox = lang.querySelectorAll('.header__lang-item');
const langEn = langBox[0];
const langRu = langBox[2];
const langUz = langBox[4];
let dtext = document.querySelectorAll('[data-text]');

//Topplaces слайдер
function topplaces() {
  let i = 3;
  top.addEventListener('click', (e) => {
    if (
      (e.target.closest('.topplaces__dir-items') &&
        e.target.innerText == 'World') ||
      e.target.innerText == 'Мир' ||
      e.target.innerText == 'Dunyo'
    ) {
      topDirItems[0].classList.add('choice__item_active');
      topDirItems[2].classList.remove('choice__item_active');
      world.classList.remove('topplaces_inactive');
      uz.classList.add('topplaces_inactive');
      resetOrder();
      i = 3;
    } else if (
      (e.target.closest('.topplaces__dir-items') &&
        e.target.innerText == 'Uzbekistan') ||
      e.target.innerText == 'Узбекистан' ||
      e.target.innerText == 'O`zbekiston'
    ) {
      topDirItems[0].classList.remove('choice__item_active');
      topDirItems[2].classList.add('choice__item_active');
      world.classList.add('topplaces_inactive');
      uz.classList.remove('topplaces_inactive');
      resetOrder();
      i = 3;
    } else if (e.target.closest('.topplaces__prev')) {
      if (i === 6) {
        prev.style.display = 'none';
        changeOrder(0, 3);
        i = 3;
      } else {
        next.style.display = 'block';
        prev.style.display = 'block';
        changeOrder(i - 6, i - 3);
        i -= 3;
      }
    } else if (e.target.closest('.topplaces__next')) {
      if (i === 9) {
        next.style.display = 'none';
        changeOrder(i, i + 3);
        i = 12;
      } else {
        prev.style.display = 'block';
        next.style.display = 'block';
        changeOrder(i, i + 3);
        i += 3;
      }
    }
  });
  function changeOrder(i, j) {
    for (let k = 0; k < worldCard.length; k++) {
      if (k < j && k >= i) {
        uzCard[k].style.order = -1;
        worldCard[k].style.order = -1;
      } else {
        worldCard[k].style = '';
        uzCard[k].style = '';
      }
    }
  }
  function resetOrder() {
    changeOrder(0, 3);
    prev.style.display = 'none';
    next.style.display = 'block';
  }
}
topplaces();

//Cмена языка
document.addEventListener('DOMContentLoaded', function () {
  defLang = localStorage.getItem('defLang');
  langClick(defLang);
});
function changeLang() {
  lang.addEventListener('click', (e) => {
    if (e.target.innerHTML === 'En') {
      langClick('en');
    } else if (e.target.innerHTML === 'Ru') {
      langClick('ru');
    } else if (e.target.innerHTML === 'Uz') {
      langClick('uz');
    }
  });
}
changeLang();

function langClick(str) {
  const name = document.querySelector('.contact__name');
  const phone = document.querySelector('.contact__phone');
  const button = document.querySelector('.contact_btn');
  const { en, ru, uz } = translate;
  langBox.forEach((item) => {
    item.classList.remove('choice__item_active');
  });
  if (str === 'en') {
    langEn.classList.add('choice__item_active');
    localStorage.setItem('defLang', 'en');
    name.placeholder = 'Name';
    phone.placeholder = 'Phone';
    button.value = 'Call me back';
  } else if (str === 'ru') {
    langRu.classList.add('choice__item_active');
    localStorage.setItem('defLang', 'ru');
    name.placeholder = 'Имя';
    phone.placeholder = 'Номер';
    button.value = 'Отправить';
  } else {
    localStorage.setItem('defLang', 'uz');
    name.placeholder = 'Ism';
    phone.placeholder = 'Telefon';
    button.value = 'Tasdiqlash';
    langUz.classList.add('choice__item_active');
  }
  for (let i = 0; i < dtext.length; i++) {
    str === 'en'
      ? (dtext[i].innerHTML = en[i])
      : str === 'ru'
      ? (dtext[i].innerHTML = ru[i])
      : (dtext[i].innerHTML = uz[i]);
  }
}
// let obj = {};
// for (let i = 0; i < dtext.length; i++) {
//   dtext[i].innerHTML = ru[i];
// }
// console.log(obj);

// langRu.addEventListener('click', function () {
//   localStorage.setItem('defLang', 'ru');
// });
// langEn.addEventListener('click', function () {
//   localStorage.setItem('defLang', 'en');
// });
