window.onload = ()=>{
    preloader.style.display='none'
    
}
const navbar = document.querySelector('.navbar')
window.addEventListener('scroll',()=>{
    console.log(window.pageYOffset)
    if(window.pageYOffset > navbar.offsetTop+50){
        navbar.classList.remove('position-absolute')
        navbar.classList.remove('bg-transparent')
        navbar.classList.remove('navbar-transparent')
        navbar.classList.add('fixed-top')
        navbar.classList.add('bg-nb-black')
       
        console.log('fixed')
    }else{
        navbar.classList.add('position-absolute')
        navbar.classList.add('bg-transparent')
        navbar.classList.add('navbar-transparent')
        navbar.classList.remove('fixed-top')
        navbar.classList.remove('bg-nb-black')
        
        console.log('no-fixed')
    }
})

const preloader = document.querySelector('.preloader-container')