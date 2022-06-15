// Язык
import { translate } from './translate.js';
let defLang = '';
const lang = document.querySelector('.header__lang');

const langBox = lang.querySelectorAll('.header__lang-item');
const langEn = langBox[0];
const langRu = langBox[2];
const langUz = langBox[4];
let dtext = document.querySelectorAll('[data-text]');

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
  const { en, ru, uz } = translate;
  langBox.forEach((item) => {
    item.classList.remove('choice__item_active');
  });
  if (str === 'en') {
    langEn.classList.add('choice__item_active');
    localStorage.setItem('defLang', 'en');
  } else if (str === 'ru') {
    langRu.classList.add('choice__item_active');
    localStorage.setItem('defLang', 'ru');
  } else {
    localStorage.setItem('defLang', 'uz');

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

let obj = {};
for (let i = 0; i < dtext.length; i++) {
  obj[i] = dtext[i].innerHTML;
}
console.log(obj);
