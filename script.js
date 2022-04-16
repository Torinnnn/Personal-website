const scrollUp= document.querySelector('#scroll-button');

const scrollFunction = function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })

}

scrollUp.addEventListener('click', scrollFunction)