 import '../../../temp/scripts/timer';

class timer {
    constructor() {
        this.el = $('#timer');
        this.htmlLang = document.getElementsByTagName("html")[0].getAttribute("lang");
        // console.log(this.htmlLang)


        if (this.htmlLang == 'en' ) {
            this.year = 2017;
            this.month = 9;
            this.day = 30;
            this.hour = 23;
            this.minute = 59;
            this.lang = 'eng';
            this.addTimer();

        } else if (this.htmlLang == 'fr' ) {

            this.year = 2017;
            this.month = 9;
            this.day = 30;
            this.hour = 23;
            this.minute = 59;
            this.lang = 'fr';
            this.addTimer();

        }


    }

    addTimer () {
        this.el.syotimer({
            year: this.year,
            month: this.month,
            day: this.day,
            hour: this.hour,
            minute: this.minute,
            dayVisible: true,
            dubleNumbers: false,
            effectType: 'none',
            periodUnit: 'd',
            periodic: false,
            lang : this.lang,
            afterDeadline: function(){
                // timerBlock.bodyBlock.html('<p style="font-size: 1.2em; color: red">The countdown is finished!</p>');
            }
        });
    }


}

export default timer;