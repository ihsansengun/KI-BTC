
class HideFormElement {
    constructor() {
        this.form = $('.form');
        // this.kalendae = $('.kalendae');
        this.body = $('body');
        this.allInputs = $( ".form select");
        this.hideInitially();
        this.events();

    }

    events() {
          this.form.click(this.toggleForm.bind(this));
    }

    hideInitially() {
          this.allInputs.parent().parent().hide();
    }


    toggleForm(e) {
        this.allInputs.parent().parent().slideDown()

        /*if (!this.form.is(e.target)
            && this.form.has(e.target).length === 0) {
            this.allInputs.parent().parent().slideUp()
            alert(e.target.className)
        }
        else {
            this.allInputs.parent().parent().slideDown()
        }*/

    }
}


export default HideFormElement;




















