var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');

// 排除 node_modules
var excludeNodeModules = '!./node_modules{,/**}';

// 不到万不得已, 再也不要手工给 CSS 写浏览器前缀了
gulp.task('autoprefixer', function() {
    var src = ['**/*.css', '!lib/vendor/**/*.css', excludeNodeModules];
    gulp.src(src)
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'ios 7', 'android 4'],
            remove: false
        }))
        .pipe(gulp.dest('.'));
});

// 图片优化是很重要的
gulp.task('imagemin', function() {
    var src = ['**/*.{jpg,png,gif,svg}', excludeNodeModules];
    gulp.src(src)
        .pipe(imagemin([
            imagemin.jpegtran({
                // progressive: true
            }),
            imagemin.optipng({
                // optimizationLevel: 5
            }),
            imagemin.gifsicle({
                // interlaced: true
            }),
            imagemin.svgo({
                // multipass: true
            })
        ]))
        .pipe(gulp.dest('.'));
});

gulp.task('deploy', ['imagemin', 'autoprefixer']);
