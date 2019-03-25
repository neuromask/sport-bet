var gulp = require('gulp');
var del = require('del');

gulp.task('cleanDist', function () {
   del.sync('dist');
});