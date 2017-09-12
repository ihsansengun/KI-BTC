 import '../../../temp/scripts/timer';

class timer {
    constructor() {
        this.el = $('#timer');
        this.htmlLang = document.getElementsByTagName("html")[0].getAttribute("lang");

        this._month = 9;
        this._day = 30;

        // if you need to extend the time add a new case
        switch (this.htmlLang) {
            case 'th':
                this.year = 2017;
                this.month = this._month;
                this.day = this._day;
                this.hour = 23;
                this.minute = 59;
                this.lang = 'en';
                this.addTimer();

                break;

            case 'es-VE':
                
                this.year = 2017;
                this.month = this._month;
                this.day = this._day;
                this.hour = 23;
                this.minute = 59;
                this.lang = 'es';
                this.addTimer();

                break;

            case 'es-CO':

                this.year = 2017;
                this.month = this._month;
                this.day = this._day;
                this.hour = 23;
                this.minute = 59;
                this.lang = 'es';
                this.addTimer();

                break;

            case 'es-MX':

                this.year = 2017;
                this.month = this._month;
                this.day = this._day;
                this.hour = 23;
                this.minute = 59;
                this.lang = 'es';
                this.addTimer();

                break;

            // counter for latam- it's using es-AR to avoid (spanish) lang conflict
            case 'es-AR':
                this._month = 9;
                this._day = 15;

                this.year = 2017;
                this.month = this._month;
                this.day = this._day;
                this.hour = 23;
                this.minute = 59;
                this.lang = 'es';
                this.addTimer();

                break;

            case 'pt-BR':

                this.year = 2017;
                this.month = this._month;
                this.day = this._day;
                this.hour = 23;
                this.minute = 59;
                this.lang = 'br';
                this.addTimer();

                break;

            default:
                this.year = 2017;
                this.month = this._month;
                this.day = this._day;
                this.hour = 23;
                this.minute = 59;
                this.lang = this.htmlLang;
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