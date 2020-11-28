/***** jQuery *****/

//$('#main-heading, p')
//    .hide()
//    .fadeIn(2500);


/***** GSAP *****/

gsap.from('nav', {
    duration: 1,
    y: '-100%',
    ease: 'bounce'
})

gsap.from('.nav-list a', {
    duration: 1,
    opacity: 0,
    delay: 1,
    stagger: .30
})

gsap.from('.gsap-heading', {
    duration: 1.75,
    opacity: 0,
    scale: 0,
    delay: 1.75
})

gsap.from('.projects-grid', {
    scrollTrigger: {
        trigger: '.projects-grid',
        toggleActions: 'restart pause resume restart',
    },
    duration: 2.5,
    //    opacity: 0,
    x: '100%',
    delay: .25,
})
