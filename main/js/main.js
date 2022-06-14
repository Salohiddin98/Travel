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
let defLang = '';
let langEn = document.querySelector('.nav__lang-en');
let langRu = document.querySelector('.nav__lang-ru');
let dtext = document.querySelectorAll('[data-text]');

//Topplaces слайдер
function topplaces() {
  let i = 3;
  top.addEventListener('click', (e) => {
    if (
      e.target.closest('.topplaces__dir-items') &&
      e.target.innerText == 'World'
    ) {
      topDirItems[0].classList.add('choice__item_active');
      topDirItems[2].classList.remove('choice__item_active');
      world.classList.remove('topplaces_inactive');
      uz.classList.add('topplaces_inactive');
      resetOrder();
      i = 3;
    } else if (
      e.target.closest('.topplaces__dir-items') &&
      e.target.innerText == 'Uzbekistan'
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
function changeLang() {
  const { en, ru } = i18Obj;
  let darr = [];
  dtext.forEach((item) => {
    darr.push(item.dataset.text);
  });
  document.addEventListener('DOMContentLoaded', function () {
    defLang = localStorage.getItem('defLang');
    if (defLang === 'en') {
      changeEn();
    } else {
      changeRu();
    }
  });

  langRu.addEventListener('click', function () {
    localStorage.setItem('defLang', 'ru');
    changeRu();
  });
  langEn.addEventListener('click', function () {
    localStorage.setItem('defLang', 'en');
    changeEn();
  });
  function changeRu() {
    langRu.classList.add('lang-active');
    langEn.classList.remove('lang-active');
    for (let i = 0; i < darr.length; i++) {
      dtext[i].innerHTML = ru[darr[i]];
    }
  }
  function changeEn() {
    langEn.classList.add('lang-active');
    langRu.classList.remove('lang-active');
    for (let i = 0; i < darr.length; i++) {
      dtext[i].innerHTML = en[darr[i]];
    }
  }
}
changeLang();
