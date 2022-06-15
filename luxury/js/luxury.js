const top = document.querySelector('.topplaces');
const topDir = top.querySelector('.topplaces__dir');
const topDirItems = topDir.querySelectorAll('.topplaces__dir-items');
const world = top.querySelector('.topplaces__world');
const uz = top.querySelector('.topplaces__uz');

// Язык
import { translate } from './translate.js';
let defLang = '';
const lang = document.querySelector('.header__lang');

const langBox = lang.querySelectorAll('.header__lang-item');
const langEn = langBox[0];
const langRu = langBox[2];
const langUz = langBox[4];
let dtext = document.querySelectorAll('[data-text]');
topDir.addEventListener('click', (e) => {
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
  }
});

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
