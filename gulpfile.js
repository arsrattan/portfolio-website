const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

let SCSS_SRC = './src/Assets/scss/**/*.scss';
let SCSS_DEST = './src/Assets/css';

function streamTask() {
    return gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix:'.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
}

exports.default = function() {
    gulp.watch(SCSS_SRC, streamTask);
}
