# 个人常用软件(Windows7 x64)

## 个人软件
* [电脑管家](http://guanjia.qq.com/)
    * [QQ](http://im.qq.com/download/)
    * [QQ输入法](http://qq.pinyin.cn/)
    * [QTTabBar](http://qttabbar.wikidot.com/)
           增强文件管理器, 打开多标签
    * [WPS](http://www.wps.cn/product/wps2013/)
           office, 替代MS-office
    * [Calibre](http://calibre-ebook.com/)
          管理/转电子书格式, 例如pdf -> mobi
    * [AutoHotkey](http://www.autohotkey.com/)
          a scripting language for desktop automation
* [Skitch](https://evernote.com/skitch/)
* [f.lux](https://justgetflux.com/)
* [XMind](http://www.xmind.net/)
      _Cloud\Tencent\QQMail\xmind-portable


## 前端开发
[Sublime Text](http://www.sublimetext.com/)

我最称手的兵器
> _Cloud\Google\Code\sync-software\development\Sublime Text


[BrowserSync](http://www.browsersync.io)

不仅可以免刷新, 还能同步各个设备上打开页面时的交互, 例如scroll的时候同时都scroll, 还集成了远程调试(weinre)功能
f5差不多可以退休了.
> npm install -g browser-sync

> browser-sync start --server --directory --port 4000 --files "**/*.html, **/*.css"

> browser-sync init 

> browser-sync start --config bs-config.js 


[Web开发免刷新](http://getf5.com/)

支持HTML/CSS/JS自动刷新页面
> _Cloud\Google\Gmail\f5

PS: 原来使用的nodejs版本的F5(也就是下面这个), 但是自动刷新大概有5秒的延时, 只支持HTML页面的自动刷新, 不支持CSS/JS自动刷新, 不过用作本地静态服务器还是不错D.

[F5](https://github.com/island205/f5)

light static sever which will reload page when there are changes in server side! 
> npm install -g f5


[Chrome](http://portableapps.com/apps/internet/google_chrome_portable)
> _Cloud\Tencent\QQMail\GoogleChromePortable


[IETester](http://www.my-debugbar.com/wiki/IETester/HomePage)


[ImageMagick](http://www.imagemagick.org/)

ImageMagick is a software suite to create, edit, compose, or convert bitmap images.

用于制作CSS sprite
> montage -background transparent -tile 2x5 -geometry +10+10 *.png *.gif *.jpg sprite.png

> _Cloud\Google\Gmail\ImageMagick


[weinre](http://people.apache.org/~pmuellr/weinre/)

weinre is WEb INspector REmote. A debugger for web pages, like FireBug (for FireFox) and Web Inspector (for WebKit-based browsers), except it's designed to work remotely, and in particular, to allow you debug web pages on a mobile device such as a phone.
> npm -g install weinre

> C:\Documents and Settings\Administrator\.weinre\server.properties

> boundHost:    -all-

> httpPort:     8081


[Fiddler](http://www.telerik.com/fiddler)

The free web debugging proxy for any browser, system or platform
> _Cloud\Google\Gmail\Fiddler2


[Microsoft Network Monitor](http://www.microsoft.com/en-us/download/details.aspx?id=4865)

Network Monitor 3.4 is the archive versioned tool for network traffic capture and protocol analysis. 


[WiresharkPortable]
> _Cloud\Google\Gmail\WiresharkPortable 


[ngrok](https://ngrok.com/)

Expose a local web server to the internet, ecurely expose a local web server to the internet.
ngrok lets you expose a locally running web service to the internet. Just tell ngrok which port your web server is running on. 
> _Cloud\Google\Gmail\ngrok.exe

[harp](  http://harpjs.com/)  

The static web server with built-in preprocessing. Harp serves Jade, Markdown, EJS, CoffeeScript, Sass, LESS and Stylus as HTML, CSS & JavaScript—no configuration necessary.

需要先安装 git 和 python
> npm install -g harp

> harp init myproject

> harp server myproject

> harp compile myproject

[Apache](http://httpd.apache.org/)

[NW.js](https://github.com/nwjs/nw.js/)

node-webkit is renamed NW.js, You can write native apps in HTML and JavaScript with NW.js. 

[CasperJS](http://casperjs.org/)

a navigation scripting & testing utility for [PhantomJS](http://phantomjs.org/) and SlimerJS written in Javascript


## 工具
[Node.js](http://nodejs.org/)

[Grunt](http://gruntjs.com/)

[RailsInstaller](http://railsinstaller.org/) 顺带了[Git](http://www.git-scm.com/)

[JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) 

[Photoshop]( https://helpx.adobe.com/creative-suite/kb/cs2-product-downloads.html)
Adobe提供了免费的老版本[Photoshop CS2](http://download.adobe.com/pub/adobe/magic/creativesuite/CS2_EOL/PHSP/PhSp_CS2_English.exe), 只有英文版 
* [Cut&Slice me](http://www.cutandslice.me/)
* [Ink](http://ink.chrometaphore.com/)
* [Specctr](https://www.specctr.com/buy)
* [GuideGuide](http://guideguide.me/)

[UIDesigner](http://uid.cdc.tencent.com/)
原型设计

[Justinmind Prototyper](http://www.justinmind.com/)

[Mark Man](http://getmarkman.com/)

1.40.7是最后一个免费版本(按住ctrl进行自动测量), 需要先安装[AIR]( https://get.adobe.com/air/)环境. 现在版本收费了, 使用会有一些功能限制
> _Cloud\Google\Gmail\MarkMan_1.40.7.air

[TortoiseSVN](http://tortoisesvn.net/)
> _Cloud\Google\Gmail\TortoiseSVN-1.6.8.19260-win32-svn-1.6.11

[禅道](http://www.zentao.net/) 需求管理, bug跟踪, 版本计划


## 安装脚本
> npm ls -depth 0 -g

> npm install browser-sync f5 grunt-cli harp weinre -g



## 备选项
[IntelliJ IDEA](https://www.jetbrains.com/idea/)
前端开发最强的IDE了, 功能非常全, 适合团队开发 

[HBuilder](http://dcloud.io/)

[NetBeans]( https://netbeans.org/downloads/6.8/index.html)


## 网站
[github](https://github.com/ufologist)


## 杂项
[Bower](http://bower.io/)

[component](http://component.github.io/)

[Yeoman](http://yeoman.io/)

[spm](http://spmjs.io/)

[Genymobile](http://www.genymobile.com/)

[MongoDB](http://www.mongodb.org/)


## 更多备选工具
原型设计
[墨刀](https://modao.io/workspace)
