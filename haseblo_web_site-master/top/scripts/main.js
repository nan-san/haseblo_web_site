document.addEventListener('DOMContentLoaded', () => {
    const swiperContainer = document.querySelector('.swiper-container');
    const hero = new HeroSlider('.swiper-container') 
    const cb = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                hero.start();
            } else {
                hero.stop();
            };
        });
    }
    const io = new IntersectionObserver(cb);
    io.observe(swiperContainer);
})