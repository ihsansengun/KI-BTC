import SmoothScroll from 'jquery-smooth-scroll';

class smoothScroll {
    constructor() {
        this.headerLinks = $('.primary-nav a, .btn');
        this.addSmoothScroll();
    }

    addSmoothScroll () {
        this.headerLinks.smoothScroll({
            offset: -70
        });
    }
}


export default smoothScroll;