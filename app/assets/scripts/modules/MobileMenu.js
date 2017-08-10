
class MobileMenu {
    constructor() {
        this.header = $('.header');
        this.menuIcon = $('.header__menu-icon');
        this.menuContent =$('.header__menu-content');
        this.events();
    }


    events() {
        this.menuIcon.click(this.toggleMenu.bind(this))
    }

    toggleMenu() {
        this.menuContent.toggleClass('header__menu-content--is-visible');
        this.header.toggleClass('header--is-expanded');
        this.menuIcon.toggleClass('header__menu-icon--close-x')
    }
}

export default MobileMenu;
