var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks-render');
var plumber = require('gulp-plumber');
var browser = require('browser-sync').create();
var fs = require('fs');

function njkEnv(env) {
    env.addGlobal('partials', 'templates/partials/');
    env.addGlobal('components', 'templates/components/');
    env.addGlobal('layouts', 'templates/layouts/');
    env.addGlobal('core', 'templates/helpers/mixins.njk');
}

gulp.task('templates', function () {
    return gulp.src('src/templates/*.njk')
        .pipe(plumber())
        .pipe(nunjucks({
            data: {
                data: JSON.parse(fs.readFileSync('src/templates/data/data.json').toString())
            },
            path: 'src/',
            ext: '.html',
            manageEnv: njkEnv
        }))
        .pipe(gulp.dest('src/'))
        .on('end', function () {
            browser.stream();
        });
});