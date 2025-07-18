// gsap.from(".ok",{
//     opacity:0,
//     duration:2,
//     y:40,
//     delay:1,
//     stagger:-1
// });

// gsap.to(".box",{
//     x:300,
//     duration:1,
//     delay:1,
//     rotate:360,
//     repeat:-1,  //for infinte give value -1
//     yoyo:true,
//     borderRadius: "50%"
// })

const btn = document.querySelector(".extend");
const imgs = document.querySelectorAll("#okks");
const topic2 = document.querySelector(".topic2");
const roadbox= document.querySelector(".roadbox");
const sub = document.querySelector("h3");

    let isExtended = false;

btn.addEventListener("click", () => {
      imgs.forEach(img => {
        img.style.padding = isExtended ? "50px 0" : "250px 0";
        topic2.style.top = isExtended ? "180px" : "380px";
        roadbox.style.display = isExtended ? "none" : "";
        sub.style.display = isExtended ? "none" : "";
      });
      isExtended = !isExtended;
    });