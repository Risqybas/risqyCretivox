console.log("Script dimuat!"); 


// nanti uabh ini aja gak usah yang lain gua pakai gsap.from
gsap.from(".about-text", {
  y: 500,
  opacity: -10,
  duration: 3,
  ease: "power3.out",
  onStart: () => console.log("Animasi .about-text dimulai!"),
  onComplete: () => console.log("Animasi .about-text selesai!")
});

console.log("GSAP script berjalan!");

window.addEventListener('scroll', function() {
    const homeSection = document.getElementById('home');
    const body = document.body;

    const homeSectionBottom = homeSection.getBoundingClientRect().bottom;

    if (homeSectionBottom <= 0) {
        body.classList.add('dark-mode-sections');
    } else {
        body.classList.remove('dark-mode-sections');
    }
});