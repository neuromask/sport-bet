var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browser = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');

var normalize = require('node-normalize-scss').includePaths;
var bourbon = require('bourbon').includePaths;

gulp.task('styles:default', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(plumber())
        .pipe(sass({
            includePaths: [bourbon, normalize]
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/Css/'))
        .pipe(browser.stream())
});

gulp.task('styles:prod', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(plumber())
        .pipe(sass({
            includePaths: [bourbon, normalize]
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/Css/'))
        .pipe(browser.stream())
});