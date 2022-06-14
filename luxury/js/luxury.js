const top = document.querySelector('.topplaces');
const topDir = top.querySelector('.topplaces__dir');
const topDirItems = topDir.querySelectorAll('.topplaces__dir-items');
const world = top.querySelector('.topplaces__world');
const uz = top.querySelector('.topplaces__uz');

topDir.addEventListener('click', (e) => {
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
  }
});
