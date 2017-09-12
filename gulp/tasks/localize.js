
var projectName = "036_plan-for-2018-and-save";
var lang = "en";


var gulp = require('gulp'),
i18n = require('gulp-i18n-localize');


gulp.task('localize', function () {
    return gulp.src('elandww/master/index.html')
        .pipe(i18n({
            locales: ['fr'],
            localeDir: 'gulp/locales'
        }))
        .pipe(gulp.dest('elandww/transilation'));
});






