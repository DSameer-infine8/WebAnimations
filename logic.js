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
    scrollTrigger:{
        trigger:".show",
        scroller: "body",
        start:"top 50%",
        end:"bottom 50%",
        scrub:1,
    }
});

tl.from(".project",{
    scale: 0,
    duration:1,
    scrollTrigger:{
        trigger:".show",
        scroller: "body",
        start:"top 50%",
        end:"bottom 50%",
        scrub:1,
    }
})

gsap.to("#page2 h1", {
    transform:"translateX(-130%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller: "body",
        start:"top 0%",
        end:"bottom -100%",
        scrub:2,
        pin:true

    }
})

//SVG Starts

let finalPath = `M 10 180 Q 500 180 990 180`;
let path;

let svg = document.querySelector(".svg");


svg.addEventListener("mousemove", (e) => {
    const rect = svg.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;
    const relativeX = e.clientX - rect.left;

    path = `M 10 180 Q ${relativeX} ${relativeY} 990 180`;

    gsap.to("svg path", {
        attr: { d: path },
        duration:0.1,
        ease: "power2.inOut",
    });
});

svg.addEventListener("mouseleave", (e) => {


    gsap.to("svg path", {
        attr: { d: finalPath },
        duration:1.5,
        ease: "elastic.out(1,0.2)"
    });
});
