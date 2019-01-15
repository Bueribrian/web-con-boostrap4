window.onload = ()=>{
    preloader.style.display='none'
    document.body.style.overflowY='scroll'
}
const navbar = document.querySelector('.navbar')
console.log(navbar.offsetTop)
window.addEventListener('scroll',()=>{
    console.log(navbar.offsetTop)
    if(window.pageYOffset > navbar.offsetTop+80){
        navbar.classList.remove('position-absolute')
        navbar.classList.remove('bg-transparent')
        navbar.classList.remove('navbar-transparent')
        navbar.classList.add('fixed-top')
        navbar.classList.add('bg-nb-black')
        console.log(`Window offset = ${window.pageYOffset}
                            navbar.offseTop = ${navbar.offsetTop}`)
    }else{
        navbar.classList.add('position-absolute')
        navbar.classList.add('bg-transparent')
        navbar.classList.add('navbar-transparent')
        navbar.classList.remove('fixed-top')
        navbar.classList.remove('bg-nb-black')
    }
})

const preloader = document.querySelector('.preloader-container')