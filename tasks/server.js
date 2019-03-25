var gulp = require('gulp');
var watch = require('gulp-watch');
var browser = require('browser-sync').create();

gulp.task('server', function () {
    browser.init({
        server: {
            baseDir: 'src/'
        }
    })
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['styles:default', browser.reload]);
    gulp.watch('src/JavaScript/*.js', ['scripts:default', browser.reload]);
    gulp.watch('src/Images/**/*', [browser.reload]);
    gulp.watch('src/templates/**/*.njk', ['templates', browser.reload]);
});