

var projectName = "036_plan-for-2018-and-save";
var lang = "en";


var gulp = require('gulp'),
    del = require('del'),
    replace = require('gulp-string-replace'),
browserSync = require('browser-sync').create();



gulp.task('previewElandww', function() {
    browserSync.init({
        notify: false,
        tunnel: true,

        server: {
            baseDir: "elandww"
        }
    });
});



gulp.task('clean', function() {

    const pathsToDel = [
        './elandww/**/*',
        '!./elandww/master',
        '!./elandww/master/**',
        '!./elandww/transilation',
        '!./elandww/transilation/**',


    ];
    return del(pathsToDel);
});



gulp.task('copyAssets', ['clean'],  function() {
    return gulp.src('./dist/assets/**/*')
        .pipe(gulp.dest('./elandww/_assets/' + projectName));
});


gulp.task('copyHtml', ['clean'],  function() {
    return gulp.src('./dist/index.html')
        .pipe(gulp.dest('./elandww/'+ lang +'/'+ projectName));
});


gulp.task('replace_1', ['clean', 'copyHtml'], function() {
    gulp.src(['./elandww/' + lang + '/'+ projectName + '/index.html'])
        .pipe(replace('assets/scripts/', '../../_assets/'+projectName+ '/scripts/'))
        .pipe(replace('assets/styles/', '../../_assets/'+projectName+ '/styles/'))
        .pipe(replace('assets/images/', '../../_assets/'+projectName+ '/images/'))
        .pipe(gulp.dest('./elandww/'+ lang +'/'+ projectName));
});

gulp.task('replace_2', ['clean', 'copyAssets'], function() {
    gulp.src(["./elandww/_assets/" +projectName + "/styles/**/*.css"])
        .pipe(replace('../../assets/', '../'))
        .pipe(gulp.dest('./elandww/_assets/' +projectName+ '/styles/'))
});



gulp.task('createMaster',['clean', 'copyHtml', 'replace_1', 'replace_2'],  function() {
   return gulp.src(["./elandww/" +lang+ "/index.html"])
       .pipe(gulp.dest('./elandww/master'))
});




gulp.task('elandww', ['clean', 'copyAssets', 'copyHtml', 'replace_1', 'replace_2' ]);