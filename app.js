    
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 1.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

const hamburger = document.querySelector('.menu-btn__burger');
const menulinks = document.querySelector('.menu-links');
const links = document.querySelectorAll('.menu-links li');

const menuBtn = document.querySelector('.menu-btn');
let menuBtnOpen = false;
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("open");
  menulinks.classList.toggle("open");
})