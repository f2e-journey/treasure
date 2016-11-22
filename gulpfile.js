var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');

var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-uglify');

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

// 将基本上每个页面都需要使用的第三方库打包
gulp.task('vendor', function() {
    var dist = 'lib/vendor/_dist';
    var version = '1.0.0';

    gulp.src([
        'lib/vendor/art-template.js',
        'lib/vendor/zepto/zepto.js',
        'lib/vendor/sui/sm.js',
        'lib/vendor/sui/sm-extend.js',
        'lib/vendor/backend-api.js',
        'lib/vendor/lazyload.min.js',
        'lib/vendor/jweixin-1.1.0.js'
    ]).pipe(concat('vendor-' + version + '.min.js'))
      .pipe(jsmin())
      .pipe(gulp.dest(dist));

    gulp.src([
        'lib/vendor/sui/sm.css',
        'lib/vendor/sui/sm-extend.css'
    ]).pipe(concat('vendor-' + version + '.min.css'))
      .pipe(cssmin())
      .pipe(gulp.dest(dist));
});

gulp.task('deploy', ['imagemin', 'autoprefixer']);
