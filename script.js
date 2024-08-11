
let group = document.querySelectorAll(".group")
let hoverTimeout;
let label;

Array.from(group).forEach((e) => {



    e.addEventListener('mouseenter', () => {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            label = e.getElementsByTagName("label")[0];
            hoverTimeout = setTimeout(() => {
                label.style.display = "inline";
            }, 500);
        }
    })

    e.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout)
        label.style.display = "none"
    })

})


let lastScroll=0;
let mobilebuttons= document.querySelector(".mobilebuttons");

window.addEventListener('scroll',()=>{
    const currentScroll=window.pageXOffset || document.documentElement.scrollTop;
    if(currentScroll>lastScroll){
          mobilebuttons.style.opacity=0.4
    }
    else{
        mobilebuttons.style.opacity=1
    }
    mobilebuttons.style.bottom=0
    lastScroll=currentScroll <=0 ? 0:currentScroll;
})


