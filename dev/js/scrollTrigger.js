/* ========================
    Photo Animation
======================== */

const logoTimeline = gsap.timeline();

gsap.set(".photo",{alpha:0, yPercent: 100});

logoTimeline.to(".photo",{duration:0.5, alpha:1, yPercent: 0, stagger:0.25});

ScrollTrigger.create({
    animation: logoTimeline,
    toggleActions: "restart none none none",
    trigger: "#repeats-gallery",
    start: "top 60%",
    end: "bottom 60%",
    // markers: true,
    id: "photo",
});