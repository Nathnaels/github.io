const menu = document.querySelector('#mobile-menu')
const menu_link=document.querySelector('.navbar_menu')
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active')
    menu_link.classList.toggle('active')
})