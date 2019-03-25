var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
    return gulp.src('src/Images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/Images/'))
});