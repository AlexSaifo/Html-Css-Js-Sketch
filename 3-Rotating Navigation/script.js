const open =document.getElementById('open');
const close =document.getElementById('close');
const container = document.querySelector('.container');


open.addEventListener('click',()=> {
    document.body.style.position = 'fixed';
    container.classList.add('show-nav');
});

close.addEventListener('click',()=> {
    document.body.style.position = 'static';
    container.classList.remove('show-nav');
});

