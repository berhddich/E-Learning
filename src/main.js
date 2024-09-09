const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu')
const closenav=document.getElementById('closenav')
const navlink=document.querySelectorAll('.navlink')

navlink.forEach(link=>{
link.addEventListener('click',()=>{
    mobileMenu.classList.add('hidden');

})

})

hamburger.addEventListener('click',()=>{
    mobileMenu.classList.remove('hidden');
})

closenav.addEventListener('click',()=>{
    mobileMenu.classList.add('hidden');
})