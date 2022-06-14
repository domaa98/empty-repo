let btnUp = document.getElementById('btn-up');

window.onscroll = ()=>{
    if(scrollY >=200){
        btnUp.style.display = 'block';
    }
    else{
        btnUp.style.display = 'none';
    }
}

btnUp.onclick = () =>{
    scrollTo(0,0)
}

let barsBtn = document.getElementById('bars');
let navbar = document.querySelector('.navbar .navcontent .navlist');




barsBtn.onclick = () =>{
    navbar.classList.toggle('open');
}

 