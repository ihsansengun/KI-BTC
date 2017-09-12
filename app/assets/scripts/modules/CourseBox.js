
class CourseBox {
    constructor() {
        this.btn = $('.course-box ul li');
        this.init();
    }


    init() {
        const allTheContents = $(".course-box__description");

        this.btn.click(function () {
            const contentId = $(this).attr('data-url'),
                  thisTitle = $(this).find('.course-box__title div'),
                  content = $(contentId);
            $(this).after( $(content));
            allTheContents.not(content).slideUp();
            content.slideToggle();

            $(this).toggleClass('down-arrow');
            $('.course-box ul li').not(this).removeClass('down-arrow');
            $(this).find('.course-box__title div').addClass('active');
            $('.course-box__title div').not(thisTitle).removeClass('active');

        });

    };


}

export default CourseBox;
