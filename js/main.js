const openNav = document.querySelector('.hum-btn');
const closeNav = document.querySelector('.close-btn');
const nav = document.querySelector('.mobile-nav');
const menus = document.querySelectorAll('#menu');
const dropdowns = document.querySelectorAll('.submenu');

openNav.addEventListener('click', ()=> {
    nav.classList.add('open-nav')
    openNav.style.display = 'none';
    closeNav.style.display = 'block';
})

closeNav.addEventListener('click', ()=> {
    nav.classList.remove('open-nav')
    openNav.style.display = 'block';
    closeNav.style.display = 'none';
})


menus.forEach((menu, index) => {
  menu.addEventListener('click', () => {
    dropdowns[index].classList.toggle('active');
  });
  menu.addEventListener('focusout', () => {
    dropdowns[index].classList.remove('active');
  });
});



