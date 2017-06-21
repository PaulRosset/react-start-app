const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifyCss = require('gulp-minify-css');
const name = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src(['./client/scss/style.scss'])
        .pipe(sass())
        .pipe(uglifyCss())
        .pipe(name({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/style/'))
});

gulp.task('dev', ['sass'], function () {
    gulp.watch('./client/scss/src/*.scss', ['sass']);
    gulp.watch('./dist/css/*.css', ['sass']);
});