
const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './dist'
  });
});

gulp.task('sass', function() {
  return gulp
    .src('./sass/main.scss')
    .pipe(
      sass({
        style: 'compressed'
      })
    )
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task("watch", function() {
  gulp.watch(["sass/*.scss"], ["sass"]);
});

gulp.task('default', ['serve']);