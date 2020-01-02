window.addEventListener('hashchange', function(){
    navlinks.style.display = 'none';
    setTimeout(function(){
        nav.classList.remove('expanded');
    }, 50)
    isNavbarOpen = false;
});






// navbar feature
var nav = document.querySelector('nav');
var menuBtn = document.querySelector('#menuBtn');
var navlinks = document.querySelector('#navlinks');

var isNavbarOpen = false;

menuBtn.addEventListener('click', function(){
    if(isNavbarOpen){
        navlinks.style.display = 'none';
        setTimeout(function(){
            nav.classList.remove('expanded');
        }, 50)
        isNavbarOpen = false;
    }
    else{
        nav.classList.add('expanded');
        setTimeout(function(){
            navlinks.style.display = 'flex';
        }, 50)
        isNavbarOpen = true;
    }
    
});



window.addEventListener('scroll', function () {
    var scrolledHeight = window.scrollY;
    checkForNavbar(scrolledHeight);
})

function checkForNavbar(scrolled) {
    if (scrolled > 150) {
        nav.classList.add('heightedNav');
    }
    else {
        nav.classList.remove('heightedNav');
    }
}



// TWEEN MAX AND ANIMATIONS PART
var controller = new ScrollMagic.Controller();

var tl = new TimelineMax();
tl.to('#image', 10, {
    width: '100%',
    ease: Power3.easeInOut
})

// create a scene
new ScrollMagic.Scene({
    triggerElement: '#scrolledSection',
    duration: '100%', // the scene should last for a scroll distance of 100px
    triggerHook: 0,
    offset: '0'
})
    .setTween(tl)
    .setPin('#scrolledSection') // pins the element for the the scene's duration
    .addTo(controller);









var tl2 = new TimelineMax();
tl2.fromTo('#breaker h1', 10, {
    y: 100,
    opacity: 0,
    ease: Power3.easeInOut
}, {
        y: 0,
        opacity: 1,
        ease: Power3.easeInOut
    })

// create a scene
new ScrollMagic.Scene({
    triggerElement: '#hero',
    duration: '50%', // the scene should last for a scroll distance of 100px
    triggerHook: 0,
    offset: '100'
})
    .setTween(tl2)
    // .setPin('#breaker') // pins the element for the the scene's duration
    .addTo(controller);












var tl3 = new TimelineMax();
tl3.fromTo('#feature1', 10, {
    y: 50,
    opacity: 0,
    ease: Power3.easeInOut
}, {
        y: 0,
        opacity: 1,
        ease: Power3.easeInOut
    })

// create a scene
new ScrollMagic.Scene({
    triggerElement: '#breaker',
    duration: '300', // the scene should last for a scroll distance of 100px
    triggerHook: 0,
    offset: '-200'
})
    .setTween(tl3)
    // .setPin('#breaker') // pins the element for the the scene's duration
    .addTo(controller);






var tl4 = new TimelineMax();
tl4.fromTo('#feature2', 10, {
    y: 50,
    opacity: 0,
    ease: Power3.easeInOut
}, {
        y: 0,
        opacity: 1,
        ease: Power3.easeInOut
    })

// create a scene
new ScrollMagic.Scene({
    triggerElement: '#feature1',
    duration: '300', // the scene should last for a scroll distance of 100px
    triggerHook: 0,
    offset: '-100'
})
    .setTween(tl4)
    // .setPin('#breaker') // pins the element for the the scene's duration
    .addTo(controller);
