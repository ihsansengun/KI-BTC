import  $ from 'jquery';
import SmoothScroll from 'jquery-smooth-scroll';


class smoothScroll {
    constructor() {
        this.headerLinks = $('.primary-nav a');
        this.addSmoothScroll();

    }


    addSmoothScroll () {
        this.headerLinks.smoothScroll();
    }


}

export default smoothScroll;