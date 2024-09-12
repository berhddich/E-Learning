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

