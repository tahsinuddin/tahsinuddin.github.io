
"use strict";
const intraceAnimateObserves = document.getElementsByClassName('intrace-animate');

let intraceanimateobserve = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let item = entry.target;
            if(document.querySelector('.intrace-page-preloader') !== null && window.scrollY < 150){
                setTimeout(() => {item.classList.add('intrace-animate-init');}, 300);
            }else{
                item.classList.add('intrace-animate-init');
            }
            //intraceanimateobserve.disconnect();
        }
    });
}, {threshold: 0.5});

for (let itemobserve of intraceAnimateObserves) {
    intraceanimateobserve.observe(itemobserve);
}