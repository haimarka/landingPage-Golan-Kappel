// elements Suddenly seen

let scroll = window.requestAnimationFrame || 
function(callback){window.setTimeout(callback, 1000/60)};

let elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop(){
    elementsToShow.forEach(function(element){
        if(isElementInViewport(element)){
            element.classList.add('is-visible');
        }
        else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}
loop();

function isElementInViewport(el){
    if(typeof jQuery === "function" && el instanceof jQuery){
        el = el[0];
    }
    
let rect = el.getBoundingClientRect();
return(
    (rect.top <= 0 && rect.bottom >=0)
    || 
    (rect.bottom >= (window.innerHeight || document
        .documentElement.clientHeight) && 
        rect.top <= (window.innerHeight || document
            .documentElement.clientHeight))
    || (rect.top >= 0 && rect.bottom <= (window.innerHeight
    || document.documentElement.clientHeight))
    );
}

// smooth slide

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault(); 
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});



/* navigation */

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-navigation-menu')
        })
    }
}
showMenu('navigation-toggle','navigationLinksContainer')


/* go back btn */
const btn = document.getElementById("goBackBtn");
if(btn){
    btn.addEventListener("click", goBack);
}
function goBack() {
    history.back();
}