tl=gsap.timeline()
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  tl.from(".menu-links",{
      scale:0,
      duration:0.1,
  });
}

window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {
      tl.fromTo(".logo", {visibility: "visible", y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.1});
      tl.fromTo(".list li", {visibility: "visible", y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.05});
      tl.fromTo("#profile .section__pic-container", {visibility: "visible", x: -200, opacity: 0, scale: 0, rotate: 45}, {x: 0, opacity: 1, scale: 1, rotate: 0, duration: 1, stagger: 0.1});
      tl.fromTo(".section__text .bio", {visibility: "visible", x: 100, opacity: 0}, {x: 0, opacity: 1, duration: 1, stagger: 0.2});
      tl.fromTo(".section__text .btn-container", {visibility: "visible", opacity: 0}, {opacity: 1, duration: 0.2, stagger: 0.1});
      tl.fromTo("#socials-container img", {visibility: "visible", scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 1, stagger: 0.1});

      // For other animations
      tl.fromTo(".about-section .ab,.ab2,.about-section div", {visibility: "visible", scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 2, stagger: 0.2, scrollTrigger:{trigger:".about-section .ab", scroller:"body", start:"top 90%", scrub: 5}});
      tl.fromTo(".experience-sec .ex1,.experience-sec .ex2,.experience-sec div", {visibility: "visible", scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 2, stagger: 0.7, scrollTrigger:{trigger:".experience-sec .details-container", scroller:"body", end:"top 70%", scrub: 5}});
      tl.fromTo(".project-section .pro1,.project-section .pro2", {visibility: "visible", scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 1, stagger: 0.2, scrollTrigger:{trigger:".project-section .pro1", scroller:"body", scrub: 5}});
      tl.fromTo(".pro-1", {visibility: "visible", x: -300, opacity: 0}, {x: 0, opacity: 1, duration: 2, stagger: 0.7, scrollTrigger:{trigger:".project-section .pro1", scroller:"body", scrub: 5}});
      tl.fromTo(".pro-2", {visibility: "visible", x: 300, opacity: 0}, {x: 0, opacity: 1, duration: 2, stagger: 0.7, scrollTrigger:{trigger:".project-section .pro3", scroller:"body", scrub: 5}});
      tl.fromTo(".pro-3", {visibility: "visible", x: -200, opacity: 0}, {x: 0, opacity: 1, duration: 2, stagger: 0.7, scrollTrigger:{trigger:".pro-3", scroller:"body", scrub: 5, end: "top 20%"}})
      tl.fromTo(".pro-4", {visibility: "visible", x: 200, opacity: 0}, {x: 0, opacity: 1, duration: 2, stagger: 0.7, scrollTrigger:{trigger:".pro-3", scroller:"body", scrub: 5}});
      tl.fromTo(".contact .con1,.contact div", {visibility: "visible", scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 2, stagger: 0.7, scrollTrigger:{trigger:".contact .contact-info-upper-container", scroller:"body", end: "top 70%", scrub: 5}});
    }
  });
};

window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    ScrollTrigger.refresh();
  }, 250);
});
