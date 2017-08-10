
class CourseBox {
    constructor() {
        this.btn = $('.course-box ul li');
        this.init();
    }


    init() {

        var allTheContents = $(".course-box__description");

        this.btn.click(function () {
            var contentId = $(this).attr('data-url'),
            content = $(contentId);
            $(this).after( $(content));
            allTheContents.not(content).slideUp();
            content.slideToggle();

            $(this).toggleClass('down-arrow');
            $('.course-box ul li').not(this).removeClass('down-arrow');






        });
    };



}

export default CourseBox;
