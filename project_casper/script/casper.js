const gnb = document.querySelector('.gnb')
const sub = document.querySelectorAll('.sub')
const header = document.querySelector('header')
for(let i=0; i<sub.length; i++){
    sub[i].style.display = 'none'
    gnb.addEventListener('mouseover', ()=>{
        sub[i].style.display = 'block'
        header.style.height = '300px'
        header.style.transition = '0.3s'
    })
    gnb.addEventListener('mouseout', ()=>{
        sub[i].style.display = 'none'
        header.style.height = '70px'
        header.style.transition = '0.3s'
    })
    }