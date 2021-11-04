let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let theme = document.querySelector('.header a');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
theme.onclick = () =>{
    header.classList.remove('active');
    menu.classList.remove('fa-times');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
function hideMenu(){
    header.classList.toggle('active');
}