var gulp = require('gulp');
var rocketPath = '../www/typo3conf/ext/rocket/Resources/Public/';

gulp.task('build', ['cleanDist', 'styles:prod', 'scripts:main', 'scripts:prod', 'images', 'templates', 'static']);

gulp.task('export', ['build'], function () {
   gulp.src('dist/Css/*.css').pipe(gulp.dest(rocketPath + 'Css/'));
   gulp.src('dist/JavaScript/*.js').pipe(gulp.dest(rocketPath + 'JavaScript/'));
   gulp.src('dist/Images/**/*').pipe(gulp.dest(rocketPath + 'Images/'));
   gulp.src('dist/Fonts/**/**/**/*').pipe(gulp.dest(rocketPath + 'Fonts/'));
});