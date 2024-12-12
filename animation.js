// animations.js

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create a GSAP Timeline
const tl = gsap.timeline();


// ScrollTrigger Animations for Sections
gsap.utils.toArray("section").forEach((section, i) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});
