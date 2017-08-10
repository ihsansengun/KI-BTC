import JqueryCycle from 'jquery-cycle-2';

class jqueryCycle {
    constructor(el) {

        this.el = el;
        this.addSlider();
    }


    addSlider () {
        this.el.cycle({
            fx: 'scrollHorz',
            slides: '> li',
            next: '.next',
            prev: '.prev',
            log: false,
            timeout: 5000,
            manualSpeed: 800
        });
    }


}

export default jqueryCycle;


