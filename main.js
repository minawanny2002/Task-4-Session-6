const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');
const header = document.querySelector('.first-nav');
const exit = document.querySelector('.exit');

hamburger.addEventListener('click' , () => {

   header.classList.toggle('hidden');

    mobile_menu.classList.toggle('is-open');
})


exit.addEventListener('click' , () => {

    header.classList.toggle('hidden');
 
     mobile_menu.classList.toggle('is-open');
     
 })