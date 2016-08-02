/*
* @Author: liang
* @Date:   2016-07-31 16:20:56
* @Last Modified by:   liang
* @Last Modified time: 2016-08-01 00:31:50
*/

var gulp = require('gulp');

var htmlmin = require('gulp-htmlmin'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin');

//gulp要做的事
//
//--压缩html--
gulp.task('minify-html', function() {
    return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

//--合并压缩css
gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(concat('merge.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

//--压缩图片
gulp.task('minify-pic',function () {
    return gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default',['minify-html','minify-css','minify-pic']); //gulp build 就可以执行这四个任务