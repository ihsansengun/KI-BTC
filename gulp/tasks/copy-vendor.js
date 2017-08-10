var gulp = require('gulp');

gulp.task('copyScripts', function() {
    return gulp.src('./app/vendor/**/*.js')
        .pipe(gulp.dest('./app/temp/scripts/'));
});