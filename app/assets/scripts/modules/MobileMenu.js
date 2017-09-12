
class MobileMenu {
    constructor() {
        this.header = $('.header');
        this.menuIcon = $('.header__menu-icon');
        this.menuContent =$('.header__menu-content');
        this.body = $('body');
        this.events();
    }


    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
        this.body.click(this.hideMenu.bind(this));
        this.menuContent.click(this.toggleMenu.bind(this));

    }

    toggleMenu() {
        this.menuContent.toggleClass('header__menu-content--is-visible');
        this.header.toggleClass('header--is-expanded');
        this.menuIcon.toggleClass('header__menu-icon--close-x')
    }

    hideMenu(e) {
        if (!this.header.is(e.target)
            && this.header.has(e.target).length === 0) {
            this.menuContent.removeClass('header__menu-content--is-visible');
            this.header.removeClass('header--is-expanded');
            this.menuIcon.removeClass('header__menu-icon--close-x');
        }

    }
}

export default MobileMenu;
