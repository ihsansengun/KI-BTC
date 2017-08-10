
class HideFormElement {
    constructor() {
        this.form = $('.form');
        this.body = $('body');
        this.allInputs = $( ".form select");
        this.hideInitially();
        this.events();
    }

    events() {
        this.body.click(this.toggleForm.bind(this))
    }


    hideInitially() {
        this.allInputs.parent().parent().hide();
    }


    toggleForm(e) {

        if (!this.form.is(e.target)
            && this.form.has(e.target).length === 0) {
            this.allInputs.parent().parent().hide();
        }
        else {
            this.allInputs.parent().parent().show();
        }

    }
}

export default HideFormElement;






