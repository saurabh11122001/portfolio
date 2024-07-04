
tl=gsap.timeline()
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  tl.from(".menu-links",{
      scale:0,
      duration:0.1,

  })
}

window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);
  // page 1
  ScrollTrigger.matchMedia({
    // Large and medium screens
    "(min-width: 768px)": function() {
      tl.from(".logo",{
        y:100,
        duration:1,
        opacity:0,
        stagger:0.1
      })
      tl.from(".list li",{
        y:100,
        duration:1,
        opacity:0,
        stagger:0.05,
      })
      tl.from("#profile .section__pic-container",{
        x:-200,
        opacity:0,
        scale:0,
        rotate:45,
        duration:1,
        stagger:0.1
      })
      tl.from(".section__text .bio",{
        x:100,
        opacity:0,
        duration:1,
        stagger:0.2
      })
      tl.from(".section__text .btn-container",{
        opacity:0,
        duration:0.2,
        stagger:0.1
      })
      tl.from("#socials-container img",{
        scale:0,
        opacity:0,
        duration:1,
        stagger:0.1
      })
    
      //page 2
    
      tl.from(".about-section .ab,.ab2,.about-section div",{
        scale:0,
        duration:2,
        opacity: 0,
        stagger:0.2,
        scrollTrigger:{
          trigger:".about-section .ab",
          scroller:"body",
          start:"top 90%",
          scrub:5
        }
      })
      tl.from(".experience-sec .ex1,.experience-sec .ex2,.experience-sec div",{
        scale:0,
        duration:2,
        opacity: 0,
        stagger:0.7,
        
        scrollTrigger:{
          trigger:".experience-sec .details-container",
          scroller:"body",
          end:"top 70%",
          scrub:5
        }
      })
    
    
    
      //project animation
      tl.from(".project-section .pro1,.project-section .pro2",{
        scale:0,
        duration:1,
        opacity: 0,
        stagger:0.2,
        
        scrollTrigger:{
          trigger:".project-section .pro1",
          scroller:"body",
          scrub:5
        }
      })
      tl.from(".project-section .pro-1",{
        x:-300,
        duration:2,
        opacity: 0,
        stagger:0.7,
        
        scrollTrigger:{
          trigger:".project-section .pro1",
          scroller:"body",
          scrub:5
        }
      })
      tl.from(".project-section .pro-2",{
        x:300,
        duration:2,
        opacity: 0,
        stagger:0.7,
        
        scrollTrigger:{
          trigger:".project-section .pro1",
          scroller:"body",
          scrub:5
        }
      })
    
      tl.from(".contact .con1,.contact .con1,.contact div",{
        scale:0,
        duration:2,
        opacity: 0,
        stagger:0.7,
        
        scrollTrigger:{
          trigger:".contact .contact-info-upper-container",
          scroller:"body",
          end:"top 70%",
          scrub:5
        }
      })
    
    
    
    
    

    }
  })
      
}
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    // Reinitialize animations
    ScrollTrigger.refresh();
  }, 250);
});