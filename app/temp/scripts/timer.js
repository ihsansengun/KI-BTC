
(function($){
    var day_ms = 24 * 60 * 60,
        hour_ms = 60 * 60,
        minute_ms = 60,

        lang = {
            rus : {
                second: ['секунда', 'секунды', 'секунд'],
                minute: ['минута', 'минуты', 'минут'],
                hour: ['час', 'часа', 'часов'],
                day: ['день', 'дня', 'дней'],
            },

            ru: {
                second: ['second', 'секунды'],
                minute: ['minute', 'минуты'],
                hour: ['hour', 'ЧАСЫ'],
                day: ['day', 'ДНИ'],
            },
            en: {
                second: ['second', 'seconds'],
                minute: ['minute', 'minutes'],
                hour: ['hour', 'hours'],
                day: ['day', 'days'],
            },

            kr: {
                second: ['second', '둘째'],
                minute: ['minute', '분'],
                hour: ['hour', '시간'],
                day: ['day', '일'],
            },


            it: {
                second: ['second', 'SECONDI'],
                minute: ['minute', 'MINUTI'],
                hour: ['hour', 'ORE'],
                day: ['day', 'GIORNI'],
            },
            tr: {
                second: ['second', 'saniye'],
                minute: ['minute', 'dakika'],
                hour: ['hour', 'saat'],
                day: ['day', 'gün'],
            },

            ar: {
                second: ['second', 'ثانيا'],
                minute: ['minute', 'اللحظة'],
                hour: ['hour', 'ساعة'],
                day: ['day', 'يوم'],
            },


            es: {
                second: ['second', 'SEGUNDOS'],
                minute: ['minute', 'MINUTOS'],
                hour: ['hour', 'HORAS'],
                day: ['day', 'DÍA'],
            },

            cn: {
                second: ['second', '秒'],
                minute: ['minute', '分钟'],
                hour: ['hour', '小时'],
                day: ['day', '天'],
            },

            tw: {
                second: ['second', '秒'],
                minute: ['minute', '分鐘'],
                hour: ['hour', '小時'],
                day: ['day', '天'],
            },

            ja: {
                second: ['second', '秒'],
                minute: ['minute', '分'],
                hour: ['hour', '時間'],
                day: ['day', '日'],
            },

            de: {
                second: ['second', 'SEKUNDEN'],
                minute: ['minute', 'MINUTEN'],
                hour: ['hour', 'STUNDEN'],
                day: ['day', 'TAGE'],
            },
            br: {
                second: ['second', 'SEGUNDOS'],
                minute: ['minute', 'MINUTOS'],
                hour: ['hour', 'HORAS'],
                day: ['day', 'DIAS'],
            },

            fr: {
                second: ['second', 'SECONDES'],
                minute: ['minute', 'MINUTES'],
                hour: ['hour', 'HEURES'],
                day: ['day', 'JOURS'],
            }

        };
    $.fn.syotimer = function(options){
        // ÑƒÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐ¸ Ð¿Ð¾ ÑƒÐ¼Ð¾Ð»Ñ‡Ð°Ð½Ð¸ÑŽ
        var defaultTimer = {
            year: 2014,
            month: 7,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,

            periodic: false, // true - Ñ‚Ð°Ð¹Ð¼ÐµÑ€ Ð¿ÐµÑ€Ð¸Ð¾Ð´Ð¸Ñ‡Ð½Ñ‹Ð¹
            periodInterval: 7, // (ÐµÑÐ»Ð¸ periodic ÑƒÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½ ÐºÐ°Ðº true) Ð¿ÐµÑ€Ð¸Ð¾Ð´ Ñ‚Ð°Ð¹Ð¼ÐµÑ€Ð°. Ð•Ð´Ð¸Ð½Ð¸Ñ†Ð° Ð¸Ð·Ð¼ÐµÑ€ÐµÐ½Ð¸Ñ ÑƒÐºÐ°Ð·Ñ‹Ð²Ð°ÐµÑ‚ÑÑ Ð² periodType
            periodUnit: 'd', // ÐµÐ´Ð¸Ð½Ð¸Ñ†Ð° Ð¸Ð·Ð¼ÐµÑ€ÐµÐ½Ð¸Ñ Ð¿ÐµÑ€Ð¸Ð¾Ð´Ð° Ñ‚Ð°Ð¹Ð¼ÐµÑ€Ð°

            dayVisible: true, // Ð¿Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°Ñ‚ÑŒ Ð»Ð¸ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð´Ð½ÐµÐ¹, ÐµÑÐ»Ð¸ Ð½ÐµÑ‚, Ñ‚Ð¾ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ñ‡Ð°ÑÐ¾Ð² Ð¼Ð¾Ð¶ÐµÑ‚ Ð¿Ñ€ÐµÐ²Ñ‹ÑˆÐ°Ñ‚ÑŒ 23
            dubleNumbers: true, // Ð¿Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°Ñ‚ÑŒ Ñ‡Ð°ÑÑ‹, Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹ Ð¸ ÑÐµÐºÑƒÐ½Ð´Ñ‹ Ñ Ð²ÐµÐ´ÑƒÑ‰Ð¸Ð¼Ð¸ Ð½Ð¾Ð»ÑÐ¼Ð¸ ( 2Ñ‡Ð°ÑÐ° 5Ð¼Ð¸Ð½ÑƒÑ‚ 4ÑÐµÐºÑƒÐ½Ð´Ñ‹ = 02:05:04)
            effectType: 'none', // ÑÑ„Ñ„ÐµÐºÑ‚ Ð¾Ñ‚ÑÑ‡ÐµÑ‚Ð° Ñ‚Ð°Ð¹Ð¼ÐµÑ€Ð°: 'none' - Ð½ÐµÑ‚ ÑÑ„Ñ„ÐµÐºÑ‚Ð°, 'opacity' - Ð²Ñ‹Ñ†Ð²ÐµÑ‚Ð°Ð½Ð¸Ðµ
            lang: 'en',

            headTitle: '', // Ñ‚ÐµÐºÑÑ‚ Ð½Ð°Ð´ Ñ‚Ð°Ð¹Ð¼ÐµÑ€Ð¾Ð¼ (Ð¼Ð¾Ð¶Ð½Ð¾ Ð² HTML Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ðµ)
            footTitle: '', // Ñ‚ÐµÐºÑÑ‚ Ð¿Ð¾Ð´ Ñ‚Ð°Ð¹Ð¼ÐµÑ€Ð¾Ð¼ (Ð¼Ð¾Ð¶Ð½Ð¾ Ð² HTML Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ðµ)
            afterDeadline: function(timerBlock){
                timerBlock.bodyBlock.html('<p style="font-size: 1.2em;">The countdown is finished!</p>');
            }
        };
        // Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð°Ñ†Ð¸Ñ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð¾Ð² Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ
        var settings = $.extend(defaultTimer, options || {});

        // Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ñ Ð¿Ñ€Ð¾Ñ‡Ð¸Ñ… Ð¿ÐµÑ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ñ…
        var el = this;

        return el.each(function(){
            // Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ñ Ð¿Ð»Ð°Ð³Ð¸Ð½Ð°
            var obj = $(this);
            init(obj,settings);

            (function timeout(){
                $('.second .tab-val',obj).css('opacity',1);
                var  Now = new Date(); // Ñ‚ÐµÐºÑƒÑ‰Ð°Ñ Ð´Ð°Ñ‚Ð°
                var DeadDate = new Date(settings.year, settings.month-1, settings.day, settings.hour, settings.minute, settings.second); // ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»ÑŒÐ½Ð°Ñ Ð´Ð°Ñ‚Ð°

                var different = Math.floor((DeadDate.getTime()-Now.getTime())/1000);
                if ( settings.periodic ){ // ÐµÑÐ»Ð¸ Ð½Ð°Ð´Ð¾ Ð¾Ñ‚ÑÑ‡Ð¸Ñ‚Ñ‹Ð²Ð°Ñ‚ÑŒ Ñ‚Ð°Ð¹Ð¼ÐµÑ€ Ð¿Ð¾ Ð¿ÐµÑ€Ð¸Ð¾Ð´Ñƒ

                    // Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÑÐµÐ¼ ÐµÐ´Ð¸Ð½Ð¸Ñ†Ñƒ Ð¸Ð·Ð¼ÐµÑ€ÐµÐ½Ð¸Ñ Ð¿ÐµÑ€Ð¸Ð¾Ð´Ð° Ñ‚Ð°Ð¹Ð¼ÐµÑ€Ð°
                    switch (settings.periodUnit){
                        case 'd': unit_ms = day_ms; break;
                        case 'h': unit_ms = hour_ms; break;
                        case 'm': unit_ms = minute_ms; break;
                        case 's': unit_ms = 1; break;
                    }

                    differentUnits = Math.abs( Math.ceil( (DeadDate.getTime()-Now.getTime())/(unit_ms*1000) ) ); // ÐºÐ¾Ð»-Ð²Ð¾ Ð¿Ð¾Ð»Ð½Ñ‹Ñ… ÐµÐ´Ð¸Ð½Ð¸Ñ† Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸ Ð¼ÐµÐ¶Ð´Ñƒ Ñ‚ÐµÐºÑƒÑ‰ÐµÐ¹ Ð´Ð°Ñ‚Ð¾Ð¹ Ð¸ Ð´ÐµÐ´Ð»Ð°Ð¹Ð½Ð¾Ð¼

                    if ( different>=0 ){
                        dUnits = differentUnits%settings.periodInterval;
                        dUnits = (dUnits==0)? settings.periodInterval-1 : dUnits-1;
                    } else
                        dUnits = settings.periodInterval-differentUnits%settings.periodInterval;

                    addUnits = different%unit_ms;

                    // fix ÐºÐ¾Ð³Ð´Ð° Ð´ÐµÐ´Ð»Ð°Ð¹Ð½ Ñ€Ð°Ð½ÑŒÑˆÐµ Ñ‚ÐµÐºÑƒÑ‰ÐµÐ¹ Ð´Ð°Ñ‚Ñ‹, Ð²Ð¾Ð·Ð½Ð¸ÐºÐ°ÐµÑ‚ Ð±Ð°Ð³ Ñ Ð½ÐµÐ¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ñ‹Ð¼ Ñ€Ð°ÑÑ‡ÐµÑ‚Ð¾Ð¼ Ð¸Ð½Ñ‚ÐµÑ€Ð²Ð°Ð»Ð° Ð¿Ñ€Ð¸ different Ð¿Ñ€Ð¾Ð¿Ð¾Ñ€Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾Ð¹ periodUnit
                    if ( ( addUnits == 0 ) && ( different < 0 ) )
                        dUnits--;

                    var alls = Math.abs( dUnits * unit_ms + addUnits );

                } else
                    alls = different;

                // ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ ÑÐµÐºÑƒÐ½Ð´ Ð´Ð¾ Ð´ÐµÐ´Ð»Ð°Ð¹Ð½Ð° (alls) Ð¿Ñ€Ð¸ Ð½Ð°Ð»Ð¸Ñ‡Ð¸Ð¸
                if ( alls >= 0 ){
                    var dd = Math.floor(alls/day_ms);

                    alls = alls%day_ms;
                    var dh = Math.floor(alls/hour_ms);

                    alls = alls%hour_ms;
                    var   dm = Math.floor(alls/minute_ms);

                    alls = alls%minute_ms;
                    var ds = Math.floor(alls);

                    if ( settings.dayVisible ){
                        $('.day .tab-val',obj).html(dd);
                        $('.day .tab-metr',obj).html(declOfNum(dd, lang[settings.lang].day, settings.lang));

                        $('.hour .tab-val',obj).html(format2(dh, settings.dubleNumbers));
                        $('.hour .tab-metr',obj).html(declOfNum(dh, lang[settings.lang].hour, settings.lang));
                    } else {
                        dh+=dd*24;
                        $('.hour .tab-val',obj).html(format2(dh, settings.dubleNumbers));
                        $('.hour .tab-metr',obj).html(declOfNum(dh, lang[settings.lang].hour, settings.lang));
                    }

                    $('.minute .tab-val',obj).html(format2(dm, settings.dubleNumbers));
                    $('.minute .tab-metr',obj).html(declOfNum(dm, lang[settings.lang].minute, settings.lang));

                    $('.second .tab-val',obj).html(format2(ds, settings.dubleNumbers));
                    $('.second .tab-metr',obj).html(declOfNum(ds, lang[settings.lang].second, settings.lang));

                    switch ( settings.effectType ){
                        case 'none':
                            setTimeout( function(){
                                timeout();
                            },1000);
                            break;
                        case 'opacity':
                            $('.second .tab-val',obj).animate({opacity: 0.1 }, 1000, 'linear', timeout);
                            break;
                    }

                } else {
                    settings.afterDeadline(obj);
                }

            })();
        });
    };

    function init(elem,options){ // ÑƒÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐ° html Ñ€Ð°Ð·Ð¼ÐµÑ‚ÐºÐ¸ Ð² Ð±Ð»Ð¾ÐºÐµ Ñ Ñ‚Ð°Ð¹Ð¼ÐµÑ€Ð¾Ð¼
        var timer_html='<div class="timer-head-block">'+options.headTitle+'</div>';
        timer_html+='<div class="timer-body-block">';
        if ( options.dayVisible ){
            timer_html+='\
            <div class="table-cell day">\
                <div class="tab-val">0</div>\
                <div class="tab-metr"></div>\
            </div>';
        }
        timer_html+='\
            <div class="table-cell hour">\
                <div class="tab-val">00</div>\
                <div class="tab-metr"></div>\
            </div>\
            <div class="table-cell minute">\
                <div class="tab-val">00</div>\
                <div class="tab-metr"></div>\
            </div>\
            <div class="table-cell second">\
                <div class="tab-val">00</div>\
                <div class="tab-metr"></div>\
            </div>';

        timer_html+='</div>';
        timer_html+='<div class="timer-foot-block">'+options.footTitle+'</div>';

        elem.addClass('timer').html(timer_html);

        var headBlock=$('.timer-head-block',elem);
        var bodyBlock=$('.timer-body-block',elem);
        var footBlock=$('.timer-foot-block',elem);
        var timerBlocks={
            headBlock:headBlock,
            bodyBlock:bodyBlock,
            footBlock:footBlock,
        };
        elem=$.extend(elem, timerBlocks);
    }
    function format2(ANumber, isUse){ // Ñ„Ð¾Ñ€Ð¼Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ Ñ‡Ð¸ÑÐµÐ» Ñ Ð²ÐµÐ´ÑƒÑ‰Ð¸Ð¼Ð¸ Ð½ÑƒÐ»ÑÐ¼Ð¸
        isUse = (isUse=='') ? isUse : true;
        return ( (ANumber<=9) && isUse)? ("0"+ANumber) : (""+ANumber);
    }
    function declOfNum(number, titles, lang){ // ÑƒÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐ° Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾Ð³Ð¾ ÑÐºÐ»Ð¾Ð½ÐµÐ½Ð¸Ñ Ð¿Ð¾ÑÐ»Ðµ Ñ‡Ð¸ÑÐ»Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ñ…
        switch (lang){
            case 'rus':
                cases = [2, 0, 1, 1, 1, 2];
                return titles[ (number%100>4 && number%100<20) ? 2 : cases[(number%10<5) ? number%10 : 5] ];
            case 'en':
                return titles[ ( number == 1 ) ? 0 : 1 ];

            case 'ru':
                return titles[ ( number == 1 ) ? 0 : 1 ];


            case 'kr':
                return titles[ ( number == 1 ) ? 0 : 1 ];

            case 'tr':
                return titles[ ( number == 1 ) ? 0 : 1 ];


            case 'ar':
                return titles[ ( number == 1 ) ? 0 : 1 ];
            case 'es':
                return titles[ ( number == 1 ) ? 0 : 1 ];
            case 'cn':
                return titles[ ( number == 1 ) ? 0 : 1 ];
            case 'tw':
                return titles[ ( number == 1 ) ? 0 : 1 ];
            case 'ja':
                return titles[ ( number == 1 ) ? 0 : 1 ];
            case 'it':
                return titles[ ( number == 1 ) ? 0 : 1 ];
            case 'de':
                return titles[ ( number == 1 ) ? 0 : 1 ];
            case 'br':
                return titles[ ( number == 1 ) ? 0 : 1 ];
            case 'fr':
                return titles[( number == 1 ) ? 0 : 1];
        }
    }
})(jQuery);