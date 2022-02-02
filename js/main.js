window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
    	document.body.classList.add('loaded');
    	document.body.classList.remove('loaded_hiding');
    }, 3000);
}



gsap.to("p", {delay: 5, duration: 2, y: "-10vw", scale: 0.9, opacity: 0, ease: "ease"});
gsap.to(".main__arrow", {delay: 5, duration: 1.5, y: "-10vw", opacity: 0, ease: "ease"});

gsap.from("form", {delay: 6, duration: 2, y: "10vw", opacity: 0, zIndex: 1, ease: "ease"});



