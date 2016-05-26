'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concatCss("./css/app.css"))
    .pipe(minifyCss("./css/app.css"))
    .pipe(gulp.dest('.'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
});
