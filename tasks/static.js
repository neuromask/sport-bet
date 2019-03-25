var gulp = require('gulp');

gulp.task('static', function () {
    gulp.src('src/Fonts/**/*').pipe(gulp.dest('dist/Fonts/'));
    gulp.src('src/*.html').pipe(gulp.dest('dist/'));
});