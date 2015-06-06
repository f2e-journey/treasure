# TODO
2015-5-5
看下还有什么软件是可以在电脑管家里面安装的?
更多的常用网站需要更新, 还有其他团队软件, 需要更新
看是否有遗漏的什么软件

[Ghost博客平台不错, 试试看, 作为wordpress的取代品](https://ghost.org/)


# 个人常用软件(Windows7 x64)
v0.0.1 2015-5-5(还未正式发布版本)

## 个人软件
* [电脑管家](http://guanjia.qq.com/)
    * [QQ](http://im.qq.com/download/)
    * [QQ输入法](http://qq.pinyin.cn/)
    * [QQ影音](http://player.qq.com/)
    * [QQ旋风](http://xf.qq.com/) TODO 现在用的迅雷很老的版本, 可能以后就用这个了, 精简的迅雷老版本感觉太老了, 还是迅雷6, 现在QQ旋风也没有广告, 很好了
    * [WPS](http://www.wps.cn/product/wps2013/)
        
        替代MS-office
    * [Calibre](http://calibre-ebook.com/)
        
        管理/转电子书格式, 例如pdf -> mobi
    * [AutoHotkey](http://www.autohotkey.com/)
        
        a scripting language for desktop automation
* [Rolan](http://www.irolan.com/)
    
    管理所有软件的快捷方式
    > _Cloud\Google\Code\sync-software\Rolan
* [QTTabBar](http://qttabbar.wikidot.com/)
    
    增强文件管理器, 可以打开多个标签页
    > _Cloud\Google\Code\sync-software\QTTabBarConfig.xml
* [Skitch](https://evernote.com/skitch/)
    
    截图/标注
* [f.lux](https://justgetflux.com/)
    
    自动调节屏幕亮度
* [XMind](http://www.xmind.net/)
    
    mind map
    > _Cloud\Tencent\QQMail\xmind-portable


## 前端开发
* [Sublime Text](http://www.sublimetext.com/)
    
    我最称手的兵器
    > _Cloud\Google\Code\sync-software\development\Sublime Text

* [Brackets](http://brackets.io/)
    
    Inline Editors非常爽, 果断列入自己的兵器集
    > _Cloud\Google\Code\sync-software\development\Brackets

* [Chrome](http://portableapps.com/apps/internet/google_chrome_portable)
    > _Cloud\Tencent\QQMail\GoogleChromePortable

* [Node.js](http://nodejs.org/)
    常用模块安装脚本
    > npm ls -depth 0 -g

    > npm install grunt-cli browser-sync f5 harp hexo-cli weinre packageapp -g

    * [BrowserSync](http://www.browsersync.io)
       不仅可以免刷新, 还能同步各个设备上打开页面时的交互, 例如滚动某一个设备上的页面其他设备该页面同时都会滚动到相同位置, 还集成了远程调试(weinre)功能, f5差不多可以退休了.
       > npm install browser-sync -g
       
       > browser-sync start --server --directory --port 4000 --files "**/*.html, **/*.css"
       
       > browser-sync init
       
       > browser-sync start --config bs-config.js

     * [Web开发免刷新](http://getf5.com/)
        支持HTML/CSS/JS自动刷新页面
        > _Cloud\Google\Gmail\f5
        
        PS: 原来使用的nodejs版本的F5(也就是下面这个), 但是自动刷新大概有5秒的延时, 只支持HTML页面的自动刷新, 不支持CSS/JS自动刷新, 不过用作本地静态服务器还是不错D.

     * [F5](https://github.com/island205/f5)
        light static sever which will reload page when there are changes in server side! 
        > npm install f5 -g

* [CssGaga](http://www.99css.com/cssgaga/)
    
    制作 CSS sprite 非常方便, 拖拽图片就能够生成单个图标的CSS样式(包含图片url, 自动填好宽高, 爽吧), 再将这个CSS拖拽一次就能合并所有图片生成 sprite, 并更新CSS样式调整为使用background-position
    > _Cloud\Google\Gmail\CssGaga

* [weinre](http://people.apache.org/~pmuellr/weinre/)
    
    weinre is WEb INspector REmote. A debugger for web pages, like Web Inspector (for WebKit-based browsers), except it's designed to work remotely, and in particular, to allow you debug web pages on a mobile device such as a phone.
    > npm install weinre -g
    
    > C:\Documents and Settings\Administrator\.weinre\server.properties
    
    > boundHost:    -all-
    
    > httpPort:     8081

* [Fiddler](http://www.telerik.com/fiddler)
    
    The free web debugging proxy for any browser, system or platform
    > _Cloud\Google\Gmail\Fiddler2

* [Microsoft Network Monitor](http://www.microsoft.com/en-us/download/details.aspx?id=4865)
    
    Network Monitor 3.4 is the archive versioned tool for network traffic capture and protocol analysis. 

* [Wireshark](https://www.wireshark.org/download.html)
    > _Cloud\Google\Gmail\WiresharkPortable 

* [ngrok](https://ngrok.com/)
    
    Expose a local web server to the internet, ecurely expose a local web server to the internet.
    ngrok lets you expose a locally running web service to the internet. Just tell ngrok which port your web server is running on. 
    > _Cloud\Google\Gmail\ngrok.exe

* [harp](http://harpjs.com/)  
    
    The static web server with built-in preprocessing. Harp serves Jade, Markdown, EJS, CoffeeScript, Sass, LESS and Stylus as HTML, CSS & JavaScript—no configuration necessary.

    需要先安装 git 和 python
    > npm install harp -g
    
    > harp init myproject
    
    > harp server myproject
    
    > harp compile myproject

* [Hexo](http://hexo.io)

    A fast, simple & powerful blog framework, powered by Node.js. 全静态文件来写blog, 支持markdown, 相当于Jekyll或者Octopress, 但这些是ruby平台.
    > npm install hexo-cli -g
    
    > hexo init blog
    
    > cd blog
    
    > npm install
    
    > hexo server

* [nginx](http://nginx.org)

* [Apache](http://httpd.apache.org/)
    
    主要用ab工具做测试
    > ab -n 10 -c 5 http://qq.com/
    
    > abs -n 10 -c 5 https://mp.weixin.qq.com/
    
    > _Cloud\Google\Gmail\apache

* [NW.js](https://github.com/nwjs/nw.js/)
    
    node-webkit is renamed NW.js, You can write native apps in HTML and JavaScript with NW.js. 

* [CasperJS](http://casperjs.org/)
    
    a navigation scripting & testing utility for [PhantomJS](http://phantomjs.org/) and SlimerJS written in Javascript

* [PackageTool](https://github.com/amfe/or.packagetool)

    分析项目中所有的资源依赖, 把在线资源离线化, 将资源引用的url替换为离线化后的资源的相对路径, 简而言之就是可以一下抓出别人的页面, 把所有相关资源全部本地化
    > npm install -g packageapp
    
    > pack index.html

* [IETester](http://www.my-debugbar.com/wiki/IETester/HomePage)

## 工具
* [Grunt](http://gruntjs.com/)
    常用Grunt任务(TODO添加更多常用任务)
    https://github.com/Ensighten/grunt-spritesmith
        sprite: {
            all: {
                src: 'all/imgs/*.jpg',
                dest: 'all/imgs/_spritesheet.png',
                destCss: 'all/imgs/a/sprites.css',
                cssVarMap: function(sprite) {
                    sprite.name = 'xxx-' + sprite.name;
                }
            }
        }
    
* [RailsInstaller](http://railsinstaller.org/)
    
    顺带了[Git](http://www.git-scm.com/)
* [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Photoshop]( https://helpx.adobe.com/creative-suite/kb/cs2-product-downloads.html)

    Adobe提供了免费的老版本[Photoshop CS2](http://download.adobe.com/pub/adobe/magic/creativesuite/CS2_EOL/PHSP/PhSp_CS2_English.exe), 只有英文版
    
    常用PS扩展, 主要是方便切图
    * [Cut&Slice me](http://www.cutandslice.me/)
    * [Ink](http://ink.chrometaphore.com/)
    * [Specctr](https://www.specctr.com/buy)
    * [GuideGuide](http://guideguide.me/)

* [UIDesigner](http://uid.cdc.tencent.com/)
    
    原型设计
* [Justinmind Prototyper](http://www.justinmind.com/)
* [Mark Man](http://getmarkman.com/)
    
    1.40.7是最后一个免费版本(按住ctrl进行自动测量), 需要先安装[AIR]( https://get.adobe.com/air/)环境. 现在版本收费了, 使用会有一些功能限制
    > _Cloud\Google\Gmail\MarkMan_1.40.7.air

* [TortoiseSVN](http://tortoisesvn.net/)
    > _Cloud\Google\Gmail\TortoiseSVN-1.6.8.19260-win32-svn-1.6.11

* [禅道](http://www.zentao.net/)
    
    需求管理, bug跟踪, 版本计划


## 备选项
* [IntelliJ IDEA](https://www.jetbrains.com/idea/)
    
    前端开发最强的IDE了, 功能非常全, 适合团队开发 

* [HBuilder](http://dcloud.io/)
* [NetBeans]( https://netbeans.org/downloads/6.8/index.html)


## 网站
* [GitHub](https://github.com/ufologist)
* [GitBook](https://www.gitbook.com/)


## 杂项
* [Bower](http://bower.io/)
* [Component](http://component.github.io/)
* [Yeoman](http://yeoman.io/)
* [spm](http://spmjs.io/)
* [Genymobile](http://www.genymobile.com/)
* [MongoDB](http://www.mongodb.org/)


## 更多备选工具
* [墨刀](https://modao.io/workspace) 原型设计


## 更多软件
* [Portable software](http://portableapps.com/apps)
* [我最喜欢的软件 Windows 版 - 小众软件](http://love.appinn.com/)
* [善用佳软](http://xbeta.info/)
* [异次元软件世界](http://www.iplaysoft.com/)
* [精品绿色便携软件](http://www.portablesoft.org/)
