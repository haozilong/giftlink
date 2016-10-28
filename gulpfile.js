//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    cleanCSS = require('gulp-clean-css'),
    watch = require('gulp-watch'),
    webpack = require("webpack"),
    webpackConfig = require('./webpack.config.js');
var online = process.argv.indexOf('-online') >= 0 ? true : false;

gulp.task("css", function () {
    gulp.src("./css/*.css")
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("./dest/css/"));
});

gulp.task('testLess', function () {
    gulp.src('./css/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        //.pipe(cssmin()) //压缩css
        .pipe(gulp.dest('./dest/css/')); //将会在src/css下生成index.css
    if (!online) {
        return watch('./css/**/*', function () {
            console.log('sytle file change.......');
            gulp.src('./css/*.less')
                .pipe(less())
                //.pipe(cssmin()) //压缩css
                .pipe(gulp.dest('./dest/css'));
        });
    }
});

gulp.task("image", function () {
    gulp.src("./images/**/*")
        .pipe(gulp.dest("./dest/images/"));
});
gulp.task("html", function () {
    gulp.src("./html/**/*")
        .pipe(gulp.dest("./dest/html/"));
    if (!online) {
        return watch('./html/**/*', function () {
            console.log('html file change.......');
            gulp.src('./html/**/*')
                .pipe(gulp.dest('./dest/html'));
        });
    }
});
gulp.task("webpack", function () {
    webpack(webpackConfig, function (err, stats) {
        console.log('js file concat');
    });
});

gulp.task('default', ['testLess', 'image', 'html']); //'css',,'webpack' 

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径