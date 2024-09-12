// import Swiper bundle with all modules installed
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu')
const closenav=document.getElementById('closenav')
const navlink=document.querySelectorAll('.navlink')
const itmsWrap=document.querySelectorAll('.itms_wrap')
const foods=document.querySelectorAll('.food')
const snacks=document.querySelectorAll('.snack')
const beverages=document.querySelectorAll('.beverage')



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
          const tabval=tab.getAttribute('data-tabs');
          itmsWrap.forEach(item=>{
            item.style.display='none'
          })
          if(tabval=='food')
          {
            foods.forEach(item=>{
                item.style.display='block'
              })
          }
        else  if(tabval=='snack')
            {
                snacks.forEach(item=>{
                  item.style.display='block'
                })
            }
            else if(tabval=='beverage')
                {
                    beverages.forEach(item=>{
                      item.style.display='block'
                    })
                }
                else
                {  itmsWrap.forEach(item=>{
                    item.style.display='block'
                  })

                }

    })
});


const scrollUp=()=>{
  const scrollUpBtn=document.getElementById('scroll-up');
  if(this.scrollY>=250){
    scrollUpBtn.classList.remove('-bottom-1/2');
    scrollUpBtn.classList.add('bottom-4');
  }
  else{
    scrollUpBtn.classList.add('-bottom-1/2');
    scrollUpBtn.classList.remove('bottom-4');
  }
}
window.addEventListener('scroll',scrollUp)
 

const html =document.querySelector('html');
const themeBtn=document.getElementById('theme-toggle');
if(localStorage.getItem('mode')=='dark')
{
  html.classList.add("dark");
  themeBtn.classList.replace('ri-moon-line','ri-sun-line');
  localStorage.setItem('mode','dark');
}
themeBtn.addEventListener('click',(e)=>{
  if(localStorage.getItem('mode')=='light')
  {
    darkMode();

  }
  else{
    lightMode();
  }


})

function darkMode(){
  html.classList.add("dark");
  themeBtn.classList.replace('ri-moon-line','ri-sun-line');
  localStorage.setItem('mode','dark');
};
function lightMode(){
  html.classList.remove("dark");
  themeBtn.classList.replace('ri-sun-line','ri-moon-line');
  localStorage.setItem('mode','light');

}

const activrLink=() =>{
const sections=document.querySelectorAll('section');
const navLinks=document.querySelectorAll('.nav__link');
let current='home';
sections.forEach((section)=>{
  const sectionTop=section.offsetTop;
  if(this.scrollY>= sectionTop-60)
  {
    current=section.getAttribute('id');
  }
})

navLinks.forEach(item=>{
  console.log(item.href)
  console.log(current)

  item.classList.remove('text-secondaryColor');
  if(item.href.includes(current))
  {
    item.classList.add('text-secondaryColor')
  }
  
});

};
window.addEventListener('scroll',activrLink)

const sr=ScrollReveal({
origin:'top',
distance:'60px',
duration:2500,
delay:400

})
sr.reveal('.home__image');
sr.reveal('.home__content',{origin: 'bottom'});
sr.reveal('.category__card',{interval: 300});
sr.reveal('.promo__card-1',{origin: 'left'});
sr.reveal('.promo__card-2',{origin: 'right'});
sr.reveal('.about__img',{origin: 'bottom'});
sr.reveal('.about__content',{origin: 'top'});
sr.reveal('.menu__itms',{origin: 'left'});
sr.reveal('.customer__review',{origin: 'right'});
sr.reveal('.footer');