const menu = document.getElementById('mobile-menu');
const menuList = document.querySelector('.mobile-menu-list');
const introPage = document.querySelector('.intro-page');
const times = document.querySelector('.fa-times');
const listitem = document.querySelector('.mobile-menu-list');
menu.addEventListener('click', () => {
  introPage.style.display = 'none';
  menuList.style.display = 'flex';
});
times.addEventListener('click', () => {
  menuList.style.display = 'none';
  introPage.style.display = 'grid';
});
listitem.addEventListener('click', () => {
  menuList.style.display = 'none';
  introPage.style.display = 'grid';
});