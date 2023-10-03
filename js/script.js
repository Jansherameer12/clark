// var header=document.getElementById("header");
// var menu = document.getElementById("menu");

// window.onscroll= function(){
//     if(window.pageYOffset >= menu.offsetTop){
//         header.classList.add("sticky");
//     }
//     else{
//         header.classList.remove("sticky");
//     }
// }

let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header ul li a');
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>offset && top<offset + height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header  li a[href*='+id+']').classList.add('active');
            })
        }
    })
}