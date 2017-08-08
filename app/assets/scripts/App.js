import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import  $ from 'jquery';


var mobileMenu = new MobileMenu();

new RevealOnScroll($('.colored-icon-list__item'), '85%');
new RevealOnScroll($('.course-box ul li'), '65%');



