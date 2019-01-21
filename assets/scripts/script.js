window.onload = ()=>{
    preloader.style.display='none'
    document.body.style.overflowY='scroll'
}


const preloader = document.querySelector('.preloader-container')
const navbar = document.querySelector('.navbar')
const navProyectsItems = Array.from(document.querySelectorAll('.nav-proyects-link'))

// Navbar

window.addEventListener('scroll',()=>{

    if(window.pageYOffset > navbar.offsetTop+80){
        navbar.classList.remove('position-absolute')
        navbar.classList.remove('bg-transparent')
        navbar.classList.remove('navbar-transparent')
        navbar.classList.add('fixed-top')
        navbar.classList.add('bg-nb-black')
       
    }else{
        navbar.classList.add('position-absolute')
        navbar.classList.add('bg-transparent')
        navbar.classList.add('navbar-transparent')
        navbar.classList.remove('fixed-top')
        navbar.classList.remove('bg-nb-black')
    }
})
//  /NAVBAR

// Proyects 
// Generador de template
let printHtml = function(data){
    let proyectsContainer = document.querySelector('#proyects-container')
    proyectsContainer.innerHTML=''
    data.map( item =>{
        let template = `
        <div data-aos='fade-in' class="card my-4 mx-2 border-0" style="width: 15rem;">
            <img src="${item.img}" class="card-img-top " alt="...">
            <div class="card-body text-center">
                <h3 class="card-text font-domine font-weight-bold text-dark">${item.title}</h3>
                <p class="card-text text-muted font-sans">${item.desc}</p>
                <a class='btn bg-smoke text-white' px-5 py-2  href='${item.link}' target="_blank">Ir a ver</a>
            </div>
        </div>
        `   
        proyectsContainer.innerHTML += template
    })
       
    }
   
    


// funcion para traer los items del proyects.json

let fetchItems = function(tag){
    fetch('./assets/scripts/proyects.json')
            .then(response =>{ 
                return response.json()
            })
            .then(data =>{ 
                const result = data.filter(item => item.tag === tag);
                printHtml(result)
            })

}

// recorro los items del navbar de proyectos
navProyectsItems.forEach((navItem, index) =>{
    // le agrego el evento click al item al que se vaya a elegir
    navItem.addEventListener('click', function getItems(){
        // remuevo la clase checked a todos los items 
        navProyectsItems.map(item => item.classList.remove('checkItem'))
        // agrego la clase checked solo al item clickeado
        navItem.classList.add('checkItem')
        
        fetchItems(navItem.dataset.tag)
    })
} )




