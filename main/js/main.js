const top = document.querySelector('.topplaces');
const topDir = top.querySelector('.topplaces__dir');
const topDirItems = topDir.querySelectorAll('.topplaces__dir-items');
const world = top.querySelector('.topplaces__world');
const worldCard = world.querySelectorAll('.topplaces__card-items');
const uz = top.querySelector('.topplaces__uz');
const prev = top.querySelector('.topplaces__prev');
const next = top.querySelector('.topplaces__next');

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
    } else if (
      e.target.closest('.topplaces__dir-items') &&
      e.target.innerText == 'Uzbekistan'
    ) {
      topDirItems[0].classList.remove('choice__item_active');
      topDirItems[2].classList.add('choice__item_active');
      world.classList.add('topplaces_inactive');
      uz.classList.remove('topplaces_inactive');
    } else if (e.target.closest('.topplaces__prev')) {
      if (i === 3) {
        prev.style.display = 'none';
        changeOrder(i, i - 3);
        console.log('prev i=' + i);
      } else {
        next.style.display = 'block';
        prev.style.display = 'block';
        changeOrder(i, i - 3);
        i -= 3;
        console.log('prev i=' + i);
      }
    } else if (e.target.closest('.topplaces__next')) {
      if (i === 9) {
        next.style.display = 'none';
        changeOrder(i, i + 3);
        console.log('next i=' + i);
      } else {
        prev.style.display = 'block';
        next.style.display = 'block';
        changeOrder(i, i + 3);
        i += 3;
        console.log('next i=' + i);
      }
    }
  });
}
topplaces();

function changeOrderj(i, j) {
  for (let k = 0; k < worldCard.length; k++) {
    if (k < j && k >= i) {
      worldCard[k].style.order = -1;
    } else {
      worldCard[k].style = '';
    }
  }
}
