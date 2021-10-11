var menu = document.getElementById('mobile-menu');
var menu_list = document.querySelector(".mobile-menu-list");
var intro_page = document.querySelector(".intro-page");
var times = document.querySelector(".fa-times")
menu.addEventListener("click",function(){
    intro_page.style.display = 'none';
    menu_list.style.display ="flex";

});
times.addEventListener("click",function(){
    menu_list.style.display ="none";
    intro_page.style.display ="grid";

});