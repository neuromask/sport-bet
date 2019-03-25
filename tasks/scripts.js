var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browser = require('browser-sync').create();

gulp.task('scripts:default', function () {
    return gulp.src([
        'src/JavaScript/jquery.ddslick.min.js',
        'node_modules/slick-carousel/slick/slick.min.js'
    ])
        .pipe(plumber())
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('src/JavaScript/'))
        .pipe(browser.stream());
});

gulp.task('scripts:main', function () {
    return gulp.src('src/JavaScript/main.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('dist/JavaScript/'));
});

gulp.task('scripts:prod', function () {
    return gulp.src([
        'src/JavaScript/jquery.ddslick.min.js',
        'node_modules/slick-carousel/slick/slick.min.js'
    ])
        .pipe(plumber())
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/JavaScript/'))
        .pipe(browser.stream());
});

