const tl = gsap.timeline();

tl.from(".name",{
    y:-10,
    opacity:0,
    duration:0.77,
    delay:1
});

tl.from("h2",{
    y:-10,
    opacity:0,
    duration:0.5,
    stagger:0.5
});

tl.from(".hmm",{
    opacity:0,
    fontSize:0,
    duration:1,
    stagger:0.5
});

tl.from(".show",{
    y:-50,
    opacity:0,
    duration:1.5,
});

tl.from(".project",{
    height:0,
    width: 0,
    duration:1,
})