var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');


gulp.task('modernizr', function() {
    return gulp.src(['./app/assets/styles/**/*.{css,pcss}', './app/assets/scripts/**/*.js'])
        .pipe(modernizr({
            'options': [
                'setClasses'
            ]
        }))
        .pipe(gulp.dest('./app/temp/scripts/'));
});