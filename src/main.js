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

const tabs=document.querySelectorAll('.tabs_wrap ul li');
tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        tabs.forEach(element => {
            element.classList.remove('active')
    
          });
          tab.classList.add('active')

    })
});