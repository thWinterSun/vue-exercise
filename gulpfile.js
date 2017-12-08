
var gulp = require('gulp'),
    jshint = require('gulp-jshint'), // include plug-ins
    uglify = require('gulp-uglify'); //获取uglify模块

// JS hint task
gulp.task('jshint', function() {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
//使用命令行 gulp script启动此命令
gulp.task('script',function(){
    //1、找到文件
    gulp.src('./js/page/*.js')
    //2、压缩文件
    .pipe(uglify())
    //3、另存压缩后的文件
    .pipe(gulp.dest('dist/js'))
});