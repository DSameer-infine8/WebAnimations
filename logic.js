gsap.from(".ok",{
    opacity:0,
    duration:2,
    y:40,
    delay:1,
    stagger:-1
});

gsap.to(".box",{
    x:300,
    duration:1,
    delay:1,
    rotate:360,
    repeat:-1,  //for infinte give value -1
    yoyo:true,
    borderRadius: "50%"
})
