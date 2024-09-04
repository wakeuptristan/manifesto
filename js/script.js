// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation for header
gsap.from("header h1", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "header",
        start: "top 80%",
    }
});

gsap.from("header p", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "header",
        start: "top 70%",
    }
});

gsap.from(".button", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "header",
        start: "top 60%",
    }
});

// Animation for hero section
gsap.from(".hero-image", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero",
        start: "top 80%",
    }
});

gsap.from(".hero h2", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero",
        start: "top 70%",
    }
});

gsap.from(".hero p", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero",
        start: "top 60%",
    }
});
