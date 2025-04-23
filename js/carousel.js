class Carousel {
    constructor(element) {
        this.track = element;
        this.items = Array.from(this.track.children);
        this.currentIndex = 0;
        this.itemWidth = this.items[0].offsetWidth;
        
        this.init();
    }

    init() {
        this.setupInitialState();
        this.startAutoPlay();
    }

    setupInitialState() {
        this.items.forEach((item, index) => {
            item.style.left = `${index * 100}%`;
        });
    }

    moveToSlide(index) {
        this.track.style.transform = `translateX(-${index * 100}%)`;
        this.currentIndex = index;
    }

    startAutoPlay() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.items.length;
            this.moveToSlide(this.currentIndex);
        }, 3000);
    }
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    new Carousel(track);
});