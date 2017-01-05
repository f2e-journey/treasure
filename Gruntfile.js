// TODO, 新增一个目录叫做 bootstrap 或者项目模版(project-template), 参考下看看yo叫什么名字
// 在这个目录下面放置一个网站的基础结构, 就是包括上次我做的那个<<静态站点目录(资源)规划>>
// 然后这个脚本就放在那里, 并可以通过这个脚本来构建出网站
var config = {
    staticSite: '../Static'
};

module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    var pkg = grunt.file.readJSON('package.json');
    var distName = pkg.name + '-' + pkg.version;

    var pkgMods = {
        modA: {
            tmp: {
                src: '.build-tmp/mod-a.htm',
                dest: 'mod-a.htm'
            },
            jsFiles: [
                config.staticSite + '/lib/app/component1.js',
                config.staticSite + '/lib/app/component2.js',
                config.staticSite + '/mod-a/main.js'
            ],
            jsDest: config.staticSite + '/mod-a/dist/' + distName + '.min.js',

            cssFiles: [
                config.staticSite + '/mod-a/' + pkg.name + '-common.css',
                config.staticSite + '/mod-a/' + pkg.name + '.css'
            ],
            cssDest: config.staticSite + '/mod-a/' + distName + '.min.css'
        },
        modB: {
            tmp: {
                src: '.build-tmp/mod-b.htm',
                dest: 'mod-b.htm'
            },
            jsFiles: [
                config.staticSite + '/lib/app/component1.js',
                config.staticSite + '/lib/app/component2.js',
                config.staticSite + '/mod-b/main.js',
            ],
            jsDest: config.staticSite + '/mod-b/dist/' + distName + '.min.js',

            cssFiles: [
                config.staticSite + '/mod-b/' + pkg.name + '-common.css',
                config.staticSite + '/mod-b/' + pkg.name + '.css'
            ],
            cssDest: config.staticSite + '/mod-b/' + distName + '.min.css'
        },
    };

    grunt.initConfig({
        pkg: pkg,
        distName: distName,
        banner: '/*! <%=pkg.name%> v<%=pkg.version%> <%=grunt.template.today("yyyy-mm-dd")%> | (c) 2014-<%=grunt.template.today("yyyy")%> a.com */\n',
        config: config,
        clean: {
            options: {
                force: true
            },
            dist: [ // TODO 这里需要改进, 根据 pkgMods 自动清理生成的文件
                '<%= config.staticSite %>/mod-a/dist',
                '<%= config.staticSite %>/mod-a/*.min.css',
                '<%= config.staticSite %>/mod-b/dist',
                '<%= config.staticSite %>/mod-b/*.min.css'
            ]
        },
        uglify: {
            options: {
                banner: '<%=banner%>',
                // beautify: true, // 用于调试
                // mangle: false,
                // compress: false,
                compress: {
                    'drop_console': true
                }
            },
            modA: {
                src: pkgMods.modA.jsFiles,
                dest: pkgMods.modA.jsDest
            },
            modB: {
                src: pkgMods.modB.jsFiles,
                dest: pkgMods.modB.jsDest
            }
        },
        cssmin: { // TODO 需要先通过requirejs的css处理来合并css文件, 再通过cssmin来压缩
            options: {
                banner: '<%=banner%>'
            },
            modA: {
                src: pkgMods.modA.cssFiles,
                dest: pkgMods.modA.cssDest
            },
            modB: {
                src: pkgMods.modB.cssFiles,
                dest: pkgMods.modB.cssDest
            }
        },
        envBuild: {
            dev: {
                options: {
                    data: { // 这里配置模版页面上需要替换的环境变量
                        distName: '<%=distName%>',
                        CLIENT_CDN: 'http://localhost:5207/'
                    },
                    tmp: [{
                        file: pkgMods.modA.tmp,
                        jsFiles: pkgMods.modA.jsFiles,
                        cssFiles: pkgMods.modA.cssFiles
                    }, {
                        file: pkgMods.modB.tmp,
                        jsFiles: pkgMods.modB.jsFiles,
                        cssFiles: pkgMods.modB.cssFiles
                    }]
                }
            },
            test: {
                options: {
                    data: {
                        distName: '<%=distName%>',
                        CLIENT_CDN: 'http://localhost:5207/'
                    },
                    tmp: [{
                        file: pkgMods.modA.tmp
                    }, {
                        file: pkgMods.modB.tmp
                    }]
                }
            },
            stage: {
                options: {
                    data: {
                        distName: '<%=distName%>',
                        CLIENT_CDN: 'http://192.168.198.18/'
                    },
                    tmp: [{
                        file: pkgMods.modA.tmp
                    }, {
                        file: pkgMods.modB.tmp
                    }]
                }
            },
            production: {
                options: {
                    data: {
                        distName: '<%=distName%>',
                        CLIENT_CDN: 'http://a.com/'
                    },
                    tmp: [{
                        file: pkgMods.modA.tmp
                    }, {
                        file: pkgMods.modB.tmp
                    }]
                }
            }
        },
        // 自动雪碧图
        // https://github.com/laoshu133/grunt-css-sprite
        sprite: {
            options: {
                // sprite背景图源文件夹，只有匹配此路径才会处理，默认 images/slice/
                imagepath: 'icon/icon',
                // 雪碧图输出目录，注意，会覆盖之前文件！默认 images/
                spritedest: 'icon/dist/images/',
                // 替换后的背景路径，默认 ../images/
                spritepath: '../images/',
                // 各图片间间距，如果设置为奇数，会强制+1以保证生成的2x图片为偶数宽高，默认 0
                padding: 2,
                // 是否使用 image-set 作为2x图片实现，默认不使用
                useimageset: false,
                // 给雪碧图追加时间戳，默认不追加
                spritestamp: true,
                // 是否以时间戳为文件名生成新的雪碧图文件，如果启用请注意清理之前生成的文件，默认不生成新文件
                // 在大型网站发布时用的到, 这样可以保证所有文件都同步更新,
                // 不会出现样式不同步的问题(sprite.png已经覆盖了, 但css还没有覆盖)
                newsprite: false
            },
            autoSprite: {
                files: [{
                    // 启用动态扩展
                    expand: true,
                    // css文件源的文件夹
                    cwd: 'icon/',
                    // 匹配规则
                    src: '*.css',
                    // 导出css和sprite的路径地址
                    dest: 'icon/dist'
                }]
            }
        }
    });

    // https://github.com/ngbp/ngbp/blob/v0.3.2-release/Gruntfile.js
    // 参考ngbp中的构建脚本, 实现类似 usemin 可根据构建环境动态生成页面上的JS/CSS标签
    // 这样就不需要 processhtml 了
    grunt.registerMultiTask('envBuild', 'Process env template', function() {
        var options = this.options();
        var environment = this.target;

        options.tmp.forEach(function(tmp) {
            var jsFiles = [],
                cssFiles = [];

            // 将文件目录替换成环境相关的URL
            if (tmp.jsFiles) {
                jsFiles = tmp.jsFiles.map(function(jsFile) {
                    return jsFile.replace(config.staticSite + '/', options.data.CLIENT_CDN);
                });
            }
            if (tmp.cssFiles) {
                cssFiles = tmp.cssFiles.map(function(cssFile) {
                    return cssFile.replace(config.staticSite + '/', options.data.CLIENT_CDN);
                });
            }

            grunt.file.copy(tmp.file.src, tmp.file.dest, {
                process: function(contents, path) {
                    return grunt.template.process(contents, {
                        data: {
                            environment: environment,
                            data: options.data,
                            jsFiles: jsFiles,
                            cssFiles: cssFiles
                        }
                    });
                }
            });
        });
    });

    grunt.registerTask('build', function(mode) {
        mode = mode ? mode : 'production';

        var tasks = ['clean', 'uglify', 'cssmin', 'envBuild:' + mode];
        grunt.task.run(tasks);
    });

    grunt.registerTask('default', ['build']);
};
