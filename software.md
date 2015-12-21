# TODO
2015-5-5
看下还有什么软件是可以在电脑管家里面安装的?
看是否有遗漏的什么软件
还差mactype没有放进来

更多的常用网站需要更新, 还有其他团队软件, 需要更新


[Ghost博客平台不错, 试试看, 作为wordpress的取代品](https://ghost.org/)


[MEAN](http://mean.io/)
The Friendly & Fun Javascript Fullstack for your next web application


# 个人常用软件(Windows7 x64)
从2010年5月13号开始构思出一套属于自己的"云端"工作空间, 主要是想整理出自己最常用的绿色软件和习惯配置, 期间不断优化调整完善使用至今, 事实证明这套"云端"工作空间是高效且值得信赖的, 可以以最快的速度在一台新电脑上搭建出自己熟悉的工作环境, 也算是自己多年来对各种软件的总结.

原来这套系统主要托管在Google Code上, 但是由于Google Code要关闭了, 因此不得不转移到Github上来, 到时候会将commint log都备份过来, 只能这样了


v0.0.1 2015-5-5(还未正式发布版本)

## 个人软件
* [电脑管家](http://guanjia.qq.com/)
    * [驱动精灵](http://www.drivergenius.com/)
    * [QQ](http://im.qq.com/download/)
    * [QQ输入法](http://qq.pinyin.cn/)
    * [QQ影音](http://player.qq.com/)
    * [QQ旋风](http://xf.qq.com/) TODO 现在用的迅雷很老的版本, 可能以后就用这个了, 精简的迅雷老版本感觉太老了, 还是迅雷6, 现在QQ旋风也没有广告, 很好了
    * [QQ浏览器](http://browser.qq.com/)
    * [WPS](http://www.wps.cn/product/wps2013/)
        
        替代MS-office
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
* [Calibre](http://calibre-ebook.com/)
    
    管理/转电子书格式, 例如pdf -> mobi
    > _Cloud\Google\Gmail\Calibre Portable

## 前端开发
* [Sublime Text](http://www.sublimetext.com/)
    
    我最称手的兵器
    > _Cloud\Google\Code\sync-software\development\Sublime Text

* [Brackets](http://brackets.io/)
    
    Inline Editors非常爽, 果断列入自己的兵器集
    > _Cloud\Google\Code\sync-software\development\Brackets

* [Chrome](http://portableapps.com/apps/internet/google_chrome_portable)
    > _Cloud\Tencent\QQMail\GoogleChromePortable

* [CssGaga](http://www.99css.com/cssgaga/)
    
    制作 CSS sprite 非常方便, 拖拽图片就能够生成单个图标的CSS样式(包含图片url, 自动填好宽高, 爽吧), 再将这个CSS拖拽一次就能合并所有图片生成 sprite, 并更新CSS样式调整为使用background-position
    > _Cloud\Google\Gmail\CssGaga

* [Node.js](http://nodejs.org/)
    
    常用模块安装脚本
    > npm ls -depth 0 -g

    > npm install grunt-cli browser-sync f5 harp hexo-cli weinre packageapp flex-combo anyproxy supervisor node-inspector sails nodeppt -g
    
    * [Grunt](http://gruntjs.com/)
       
       JavaScript Task Runner 常用Grunt任务(TODO添加更多常用任务, 写到外面的grunt文件中)

    * [BrowserSync](http://www.browsersync.io)
       
       不仅可以免刷新, 还能同步各个设备上打开页面时的交互, 例如滚动某一个设备上的页面其他设备该页面同时都会滚动到相同位置, 还集成了远程调试(weinre)功能, f5差不多可以退休了.
       > browser-sync start --server --directory --port 4000 --files "**/*.html, **/*.css"
       
       > browser-sync init
       
       > browser-sync start --config bs-config.js

    * [Web开发免刷新](http://getf5.com/)
       
       支持HTML/CSS/JS自动刷新页面
       > _Cloud\Google\Gmail\f5
        
       PS: 原来使用的nodejs版本的F5(也就是下面这个), 但是自动刷新大概有5秒的延时, 只支持HTML页面的自动刷新, 不支持CSS/JS自动刷新, 不过用作本地静态服务器还是不错D.

    * [F5](https://github.com/island205/f5)
       
       light static sever which will reload page when there are changes in server side! 

    * [Flex Combo](https://github.com/wayfind/flex-combo)
       
       Combo技术是在服务端提供合并多个文件请求在一个响应中的技术, Flex Combo是在开发环境模拟实现了此功能的服务器，目的是方便前端开发调试。约等于一个支持Combo语法，只能访问js、css、iconfont等静态资源的Web服务器
      
    * [AnyProxy](https://github.com/alibaba/anyproxy)
       
       A fully configurable proxy in NodeJS, which can handle HTTPS requests perfectly

    * [weinre](http://people.apache.org/~pmuellr/weinre/)
    
       weinre is WEb INspector REmote. A debugger for web pages, like Web Inspector (for WebKit-based browsers), except it's designed to work remotely, and in particular, to allow you debug web pages on a mobile device such as a phone. 如果是临时使用一下, 可以用百度Clouda+提供的在线服务[clouda+weinre](http://weinre123.duapp.com/)
       > C:\Documents and Settings\Administrator\.weinre\server.properties
    
       > boundHost:    -all-
    
       > httpPort:     8081

    * [Harp](http://harpjs.com/)  
    
       The static web server with built-in preprocessing. Harp serves Jade, Markdown, EJS, CoffeeScript, Sass, LESS and Stylus as HTML, CSS & JavaScript—no configuration necessary.

       需要先安装 git 和 python
       > harp init myproject
    
       > harp server myproject
    
       > harp compile myproject

    * [Hexo](http://hexo.io)

       A fast, simple & powerful blog framework, powered by Node.js. 全静态文件来写blog, 支持markdown, 相当于Jekyll或者Octopress, 但这些是ruby平台.
       > hexo init blog
    
       > cd blog
    
       > npm install
    
       > hexo server

    * [PackageTool](https://github.com/amfe/or.packagetool)

       分析项目中所有的资源依赖, 把在线资源离线化, 将资源引用的url替换为离线化后的资源的相对路径, 简而言之就是可以一下抓出别人的页面, 把所有相关资源全部本地化
       > pack index.html

    * [supervisor](https://github.com/petruisfan/node-supervisor)

       Node Supervisor is used to restart programs when they crash.

    * [node-inspector](https://github.com/node-inspector/node-inspector#advanced-use)

       Node Inspector is a debugger interface for Node.js applications that uses the Blink Developer Tools (formerly WebKit Web Inspector). 联合使用 node-inspector + supervisor 堪称 nodejs 领域的F5!
       > node-inspector
       
       > supervisor --debug-brk debugme.js
       
       > Visit http://127.0.0.1:8080/
    * [Sails](http://sailsjs.org/)
    
       Sails is a lightweight framework that sits on top of Express. Sails makes it easy to build custom, enterprise-grade Node.js apps. It is designed to emulate the familiar MVC pattern of frameworks like Ruby on Rails.
       > sails new sails-demo
       
       > cd sails-demo
       
       > sails lift
    * [nodePPT](https://github.com/ksky521/nodePPT)
    
      用 ```markdown``` 写PPT可以导出 pdf 或者 html(网页上即可查看 PPT)
      ```markdown
      [slide]
      # 标题
      ## 副标题
      ```

* [Photoshop]( https://helpx.adobe.com/creative-suite/kb/cs2-product-downloads.html)

    Adobe提供了免费的老版本[Photoshop CS2](http://download.adobe.com/pub/adobe/magic/creativesuite/CS2_EOL/PHSP/PhSp_CS2_English.exe), 只有英文版
    
    常用PS扩展, 主要是方便切图, 如果没有扩展插件的情况下, 一般通过复制图层或者切片工具(在裁剪工具下面)来切图, 切片工具配合参考线比较适合整块整块地切(例如那些类似图片拼接的页面), 或者试一试[直接将 PSD 转换成页面的工具](https://github.com/zswang/h5psd)
    * [Cutterman](http://www.cutterman.cn/cutterman/feature)
    * [Cut&Slice me](http://www.cutandslice.me/)
    * [LayerCraft](http://lab.rayps.com/lc/)
    * [Ink](http://ink.chrometaphore.com/)
    * [Specctr](https://www.specctr.com/buy)
    * [GuideGuide](http://guideguide.me/)
    * [Layrs Control](http://madebyvadim.com/layrs/)

* [Fiddler](http://www.telerik.com/fiddler)
    
    The free web debugging proxy for any browser, system or platform
    > _Cloud\Google\Gmail\Fiddler2

* [ngrok](https://ngrok.com/)
    
    I want to expose a local server behind a NAT or firewall to the internet.
    ngrok lets you expose a locally running web service to the internet. Just tell ngrok which port your web server is running on.
    > ngrok http 3000 -subdomain myapp
    
    > _Cloud\Google\Gmail\ngrok.exe

* [nginx](http://nginx.org)
    
    HTTP服务器, 主要用做反向代理和负载均衡
    > nginx
    
    > nginx -t
    
    > nginx -s reload
    
    > nginx -s stop

    > _Cloud\Google\Code\sync-software\nginx

* [Apache](http://httpd.apache.org/)
    
    主要用ab工具做测试
    > ab -n 10 -c 5 http://qq.com/
    
    > abs -n 10 -c 5 https://mp.weixin.qq.com/
    
    > _Cloud\Google\Gmail\apache

* [NW.js](https://github.com/nwjs/nw.js/)
    
    node-webkit is renamed NW.js, You can write native apps in HTML and JavaScript with NW.js. 

* [CasperJS](http://casperjs.org/)
    
    a navigation scripting & testing utility for [PhantomJS](http://phantomjs.org/) and SlimerJS written in Javascript.
    另外可选的还有[Nightmare](https://github.com/segmentio/nightmare)


## 工具
* [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [RailsInstaller](http://railsinstaller.org/)
    
    顺带了[Git](http://www.git-scm.com/)
* [Python](https://www.python.org/downloads/)
* [TortoiseSVN](http://tortoisesvn.net/)
    > _Cloud\Google\Gmail\TortoiseSVN-1.6.8.19260-win32-svn-1.6.11

* [Microsoft Network Monitor](http://www.microsoft.com/en-us/download/details.aspx?id=4865)
    
    Network Monitor 3.4 is the archive versioned tool for network traffic capture and protocol analysis. 

* [Wireshark](https://www.wireshark.org/download.html)
    > _Cloud\Google\Gmail\WiresharkPortable

* [UIDesigner](http://uid.cdc.tencent.com/)
    
    原型设计
* [Justinmind Prototyper](http://www.justinmind.com/)
* [PxCook像素大厨](http://www.fancynode.com.cn/pxcook/home)
    
    不再为标注切图而烦恼, 可用来替代MarkMan
    > _Cloud\Google\Gmail\PxCook
* [Mark Man](http://getmarkman.com/)
    
    1.40.7是最后一个免费版本(按住ctrl进行自动测量), 需要先安装[AIR]( https://get.adobe.com/air/)环境. 现在版本收费了, 使用会有一些功能限制
    > _Cloud\Google\Gmail\MarkMan_1.40.7.air

* [IETester](http://www.my-debugbar.com/wiki/IETester/HomePage)


## 项目方案
* [AOS](http://git.oschina.net/osworks/AOS)

* [G4Studio](https://git.oschina.net/osworks/G4Studio)

* [JeeSite](https://github.com/thinkgem/jeesite)

    > 企业信息化开发基础平台，Java企业应用开源框架，Java EE（J2EE）快速开发框架，使用经典技术组合（Spring、Spring MVC、Apache Shiro、MyBatis、Bootstrap UI），包括核心模块如：组织机构、角色用户、权限授权、数据权限、内容管理、工作流等
    > 
    > 内置功能
    > * 用户管理：用户是系统操作者，该功能主要完成系统用户配置。
    > * 机构管理：配置系统组织机构（公司、部门、小组），树结构展现，可随意调整上下级。
    > * 区域管理：系统城市区域模型，如：国家、省市、地市、区县的维护。
    > * 菜单管理：配置系统菜单，操作权限，按钮权限标识等。
    > * 角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
    > * 字典管理：对系统中经常使用的一些较为固定的数据进行维护，如：是否、男女、类别、级别等。
    > * 操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
    > * 连接池监视：监视当期系统数据库连接池状态，可进行分析SQL找出系统性能瓶颈。
    > * 工作流引擎：实现业务工单流转、在线流程设计器。
    > 
    > 2013年就有的老平台了

* [JEECG](http://git.oschina.net/jeecg/jeecg)

* 其他可选项 - [WebX5/BeX5](http://wex5.com/cn/bex5/) 看还有哪些?

## 项目管理
* [禅道](http://www.zentao.net/)
    
    需求管理, bug跟踪, 版本计划, [集成禅道和svn](http://www.zentao.net/book/zentaopmshelp/137.html), [禅道配置https协议的svn](http://www.zentao.net/thread/83526.html), 当然还可以设置SVN必须在提交时填写提交日志

* [Trac](http://trac.edgewall.org/)
    
    Trac is an enhanced wiki and issue tracking system for software development projects

* [Redmine](http://www.redmine.org/)
    
    Redmine is a flexible project management web application


## 备选项
* [IntelliJ IDEA](https://www.jetbrains.com/idea/)
    
    前端开发最强的IDE了, 功能非常全, 适合团队开发 

* [HBuilder](http://dcloud.io/)
* [NetBeans]( https://netbeans.org/downloads/6.8/index.html)


## 网站
* [GitHub](https://github.com/ufologist)
* [GitBook](https://www.gitbook.com/)

## 在线工具
* [HTML5 Please](http://html5please.com/)
* [CSS3, Please](http://css3please.com/)
* [Can I use](http://caniuse.com/)
* [CSS3 Generator](http://enjoycss.com/)


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
* [Choose the Best - Slant](http://www.slant.co/)
* [Landscaping With Frontend Development Tools](https://github.com/codylindley/frontend-tools)
