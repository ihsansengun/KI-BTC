var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');
lostgrid = require('lost'),
pixelstorem = require('postcss-pixels-to-rem'),
fontawesome = require('postcss-font-awesome');
rtl = require('rtlcss');







gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, fontawesome, hexrgba,lostgrid, autoprefixer ()]))
      .on('error', function(errorInfo) {
          console.log(errorInfo.toString());
          this.emit('end');
      })
      .pipe(gulp.dest('./app/temp/styles'))
});