# TODO
2015-5-5
看下还有什么软件是可以在电脑管家里面安装的?
看是否有遗漏的什么软件
还差mactype没有放进来

更多的常用网站需要更新, 还有其他团队软件, 需要更新

# 前端工程师常用软件(Windows7 x64)
从2010年5月13号开始构思出一套属于自己的"云端"工作空间, 主要是想整理出自己最常用的绿色软件和习惯配置, 期间不断优化调整完善使用至今, 事实证明这套"云端"工作空间是高效且值得信赖的, 可以以最快的速度在一台新电脑上搭建出自己熟悉的工作环境, 也算是自己多年来对各种软件的总结.

原来这套系统主要托管在[Google Code](https://code.google.com/p/sync-software/)上, 但是由于[Google Code要关闭了](http://google-opensource.blogspot.jp/2015/03/farewell-to-google-code.html), 因此不得不转移到 [Github](https://github.com/ufologist/sync-software) 上来.

还有一些[前端工程师常用软件(备选项)](https://github.com/f2e-journey/treasure/blob/master/software-alternative.md)


v0.0.1 2015-5-5(还未正式发布版本)

## 个人软件
* [腾讯电脑管家](http://guanjia.qq.com/)
  * [驱动精灵](http://www.drivergenius.com/)
  * [QQ](http://im.qq.com/download/) | [轻聊版](http://im.qq.com/lightqq/) | [国际版](http://www.imqq.com/)
  * [QQ输入法](http://qq.pinyin.cn/)
  * [QQ影音](http://player.qq.com/)
  * [QQ旋风](http://xf.qq.com/)
  
    以前都是用的迅雷精简版很老的版本了(迅雷6), 然后用过QQ旋风后那个清爽, 没有广告终于可以专注于下载了. 如果还是想使用迅雷, 推荐使用[迅雷极速版](http://vip.xunlei.com/fast_xl/)或者[迅雷精简版](http://mini.xunlei.com/)
  * [QQ浏览器](http://browser.qq.com/)
  * [WPS](http://www.wps.cn/)

    替代MS-office
  * [AutoHotkey](http://www.autohotkey.com/)
   
    a scripting language for desktop automation
* [Rolan](http://www.irolan.com/)
   
  管理所有软件的快捷方式
  > _Cloud\Google\Code\sync-software\Rolan
* [QTTabBar](http://qttabbar.wikidot.com/)
  
  增强文件管理器, 可以打开多个标签页
  > _Cloud\Google\Code\sync-software\QTTabBarConfig.xml

* [Evernote](http://evernote.com/) Remember Everything

* [Skitch](https://evernote.com/skitch/)

  截图/标注
* [f.lux](https://justgetflux.com/)

  自动调节屏幕亮度
* [XMind](http://www.xmind.net/)

  mind map
  > _Cloud\Tencent\QQMail\xmind-portable

* Kindle
  * [Calibre](http://calibre-ebook.com/)
 
    管理/转电子书格式, 例如pdf -> mobi
    > _Cloud\Google\Gmail\Calibre Portable
  * [Kindle Mate](http://kmate.me)

    Kindle 标注笔记及生词本管理器(导入/导出)
  * [Kindle Book Maker](https://github.com/barretlee/kindleBookMaker)
* [nodePPT](https://github.com/ksky521/nodePPT)

  用 ```markdown``` 写PPT可以导出 pdf 或者 html(网页上即可查看 PPT)
  ```markdown
  [slide]
  # 标题
  ## 副标题
  ```

* [Hexo](http://hexo.io)

  A fast, simple & powerful blog framework, powered by Node.js. 全静态文件来写blog, 支持markdown, 相当于Jekyll或者Octopress, 但这些是ruby平台, 也可以试一试 [Nico](https://github.com/lepture/nico) 或者更多的[Static Site Generators](https://staticsitegenerators.net/)
  > hexo init blog
  >
  > cd blog
  >
  > npm install
  >
  > hexo server

## 前端开发必备
* [Sublime Text](http://www.sublimetext.com/)
 
  我最称手的兵器
  > _Cloud\Google\Code\sync-software\development\Sublime Text

* [Chrome](http://portableapps.com/apps/internet/google_chrome_portable) | [DevTools tips](https://umaar.com/dev-tips/)

  > _Cloud\Tencent\QQMail\GoogleChromePortable
  

  * 前端便捷工具
    * **WEB前端助手(FeHelper)**
    * **css auto reload(当页面中的 CSS 修改后, 仅刷新 CSS 而不刷新页面)**
    * Web Developer
    * Web Developer Checklist(Analyses any web page for violations of best practices)
    * PrettyPrint(JavaScript and CSS formatter/syntax highlighter)
  * 框架调试工具
    * **jQuery Audit**
    * AngularJS Batarang
    * React Developer Tools
    * Vue.js devtools
    * 微信调试工具
    * Ripple Emulator(A browser based html5 mobile application development and testing tool)
  * 适配调试工具
    * **Emmet Re:view(Fast and easy way to test your responsive design in multiple viewports)**
    * Responsive Inspector Reloaded(inspecting page media queries)
    * Responsive Web Design Tester
  * 性能分析
    * **Chrome Sniffer Plus(探测当前网页正在使用的开源软件或者js类库)**
    * JavaScript Errors Notifier(Notifies JavaScript errors by icon in toolbar bar or notification popup)
    * Page load time(Displays page load time in the toolbar)
    * YSlow
    * SimilarWeb(查看真实的深入网站参与、流量来源和网站排名信息)
  * 辅助工具
    * **Postman(Build, test, and document your APIs faster)**
    * Postman Interceptor(Sends requests fired through the Postman chrome app)
    * Grid System
    * AlloyDesigner(A web front-end development tool,前端重构开发辅助工具)
  * 日常工具
    * **OneTab**
    * Vimium(provides keyboard shortcuts for navigation and control in the spirit of Vim)
    * 印象笔记·悦读(使博文、文章和网页变得简明而又易于阅读)
    * Image Properties Context Menu(show the properties of an image)
    * Light Markdown Editor
    * Send to Kindle for Google Chrome
    * Adblock Plus
    * 购物比价助手

* [Node.js](http://nodejs.org/)
    
  常用模块安装脚本
  > npm install puer browser-sync weinre grunt-cli gulp-cli harp hexo-cli flex-combo anyproxy supervisor node-inspector sails nodeppt surge -g
  >
  > npm ls -depth 0 -g

* [Puer](https://github.com/leeluolee/puer)

  more than a live-reload server , built for efficient frontend development
  > puer -i -t http://localhost:8080 -a route.js

* [Photoshop]( https://helpx.adobe.com/creative-suite/kb/cs2-product-downloads.html)

  Adobe提供了免费的老版本[Photoshop CS2](http://download.adobe.com/pub/adobe/magic/creativesuite/CS2_EOL/PHSP/PhSp_CS2_English.exe), 只有英文版

  **常用快捷键**
  * 按住空格键 + 鼠标拖拽        | 移动画布
  * alt + 鼠标滚轮               | 放大/缩小画布
  * alt + 鼠标单击某图层眼睛图标 | 显示/隐藏所有其他层, 即仅显示某图层
  * ctrl + ;                     | 显示/隐藏参考线
  * ctrl + alt + shift + e       | 新建盖印图层, 即新增一个所有可见图层合并后的图层

  **切图法(使用 Photoshop CC 2014)**
  * 选中图层 + 图层选区(ctrl + 鼠标单击图层缩略图/ctrl+d[取消选择]) + 拷贝(合并拷贝) + 文件/新建(剪贴板) + 粘帖
  * 选中图层(可多个) + (合并图层) + 复制图层 + 文档/新建 + 裁切
  * 切片工具(适合整块的切类似图片拼接的页面) + 参考线
  * 切图插件(PS扩展)
    * [Cutterman](http://www.cutterman.cn/cutterman/feature)
    * [Cut&Slice me](http://www.cutandslice.me/)
    * [LayerCraft](http://lab.rayps.com/lc/)
    * [Ink](http://ink.chrometaphore.com/)
    * [Specctr](https://www.specctr.com/buy)
    * [Size Marks](https://github.com/romashamin/Size-Marks-PS "A Photoshop™ script that makes measurement marks")
    * [GuideGuide](http://guideguide.me/)
    * [Assistor PS](http://witstudio.net/)
    * [Layrs Control](http://madebyvadim.com/layrs/)
    * [PS Play](http://isux.tencent.com/app/psplay)
  * Photoshop CC 2014 自动切图(自动导出图片资源)

    > 开启方式
    >
    > 1、 首选项 - 增效工具 - 启用生成器
    >
    > 2、 文件(菜单) - 生成 - 图像资源
    >
    > 3、命名图层为 xxx.png 或者 xxx.jpg 即可
    >
    > 4、{PSD名}-assets 文件夹中就会出现我们想要的切图了
  * Photoshop CC 2014 选中图层 + 复制 CSS
  * [Extract CSS/image/text by Adobe Creative Cloud](https://assets.adobe.com/link/b8ecd6b6-94ac-468c-9cfa-b2c666c81a6c?section=extract)

* [NW.js](https://github.com/nwjs/nw.js/)
    
  node-webkit is renamed NW.js, You can write native apps in HTML and JavaScript with NW.js.
  感觉现在[Electron](https://github.com/atom/electron)更加成熟, 还有比较久远一点的[heX](http://hex.youdao.com/).
  如果是开发App, 可以试一试[Cordova](https://cordova.apache.org/)/[Cocoon](https://cocoon.io).

* [CasperJS](http://casperjs.org/)
    
  a navigation scripting & testing utility for [PhantomJS](http://phantomjs.org/) and SlimerJS written in Javascript. 另外可选的还有[Nightmare](https://github.com/segmentio/nightmare)


## 前端开发效率
* [BrowserSync](http://www.browsersync.io)
   
  不仅可以免刷新, 还能同步各个设备上打开页面时的交互, 例如滚动某一个设备上的页面其他设备该页面同时都会滚动到相同位置, 还集成了远程调试(weinre)功能, f5差不多可以退休了.
  > browser-sync start --server --directory --port 4000 --files "**/*.html, **/*.css"
  >
  > browser-sync init
  >
  > browser-sync start --config bs-config.js

* [Grunt](http://gruntjs.com/) | [Gulp](http://gulpjs.com/)

  JavaScript Task Runner 常用Grunt任务(TODO添加更多常用任务, 写到外面的grunt文件中)

* [GNU Wget](http://wget.addictivecode.org/FrequentlyAskedQuestions#Where_can_I_download_Wget.3F)

  use [wget](https://eternallybored.org/misc/wget/) to [download all the HTML from a webpage along with the CSS, Images, JS](http://stackoverflow.com/questions/7421046/looking-for-an-app-that-will-download-html-and-all-resources), etc. A bonus feature would be if it could even rewrite URLs and even grab images referenced in CSS files. 简而言之就是可以一下抓出别人的页面, 把所有相关资源全部本地化, 也可以试一试[HTTrack Website Copier](http://www.httrack.com/), 当然 [node-website-scraper](https://github.com/s0ph1e/node-website-scraper "Download website to a local directory (including all css, images, js, etc.)")也是一个非常不错的选择, 你甚至可以临时用一下作者写的 [website-scraper online](https://scraper.nepochataya.pp.ua/)
  > _Cloud\Google\Gmail\wget
  > 
  > wget -mk http://www.example.com

* [CssGaga](http://www.99css.com/cssgaga/)

  制作 CSS sprite 非常方便, 拖拽图片就能够生成单个图标的CSS样式(包含图片url, 自动填好宽高, 爽吧), 再将这个CSS拖拽一次就能合并所有图片生成 sprite, 并更新CSS样式调整为使用background-position
  > _Cloud\Google\Gmail\CssGaga

* [PxCook像素大厨](http://www.fancynode.com.cn/pxcook/home)
  
  不再为标注切图而烦恼, 可用来替代 MarkMan, 然而还有更猛的切图神器 [Avocode](http://avocode.com/) Export and share anything from Photoshop & Sketch designs Colors, image assets, fonts, text, CSS, sizes and dimensions.
  > _Cloud\Google\Gmail\PxCook

* [AnyProxy](https://github.com/alibaba/anyproxy)

  A fully configurable proxy in NodeJS, which can handle HTTPS requests perfectly

* [Fiddler](http://www.telerik.com/fiddler)
    
  The free web debugging proxy for any browser, system or platform
  > _Cloud\Google\Gmail\Fiddler2
  
  [AlloyTeam/Rosin](https://github.com/AlloyTeam/Rosin)
  
  > Fiddler插件，协助开发者进行移动端页面开发调试，是移动端web开发、调试利器
  > * 拦截 console, 支持复杂对象的 JSON 解析
  >
  >   ![对于复杂对象，双击Object字符区域选中，然后右键, 复杂对象都会被转为JSON对象，生成一个JSON View](http://alloyteam.github.io/Rosin/images/step-4.jpg)
  > * 脚本运行错误捕获
  >
  >   ![javascript运行时错误信息捕获，并且支持跨域情况下的捕获](http://alloyteam.github.io/Rosin/images/step-7.jpg)

* [Flex Combo](https://github.com/wayfind/flex-combo)
  
  Combo技术是在服务端提供合并多个文件请求在一个响应中的技术, Flex Combo是在开发环境模拟实现了此功能的服务器，目的是方便前端开发调试。约等于一个支持Combo语法，只能访问js、css、iconfont等静态资源的Web服务器

* [Harp](http://harpjs.com/)

  The static web server with built-in preprocessing. Harp serves Jade, Markdown, EJS, CoffeeScript, Sass, LESS and Stylus as HTML, CSS & JavaScript—no configuration necessary.

  需要先安装 git 和 python
  > harp init myproject
  >
  > harp server myproject
  >
  > harp compile myproject

* [supervisor](https://github.com/petruisfan/node-supervisor)

  Node Supervisor is used to restart programs when they crash.

* [node-inspector](https://github.com/node-inspector/node-inspector#advanced-use)

  Node Inspector is a debugger interface for Node.js applications that uses the Blink Developer Tools (formerly WebKit Web Inspector). 联合使用 node-inspector + supervisor 堪称 nodejs 领域的F5!
  > node-inspector
  >
  > supervisor --debug-brk debugme.js
  > 
  > Visit http://127.0.0.1:8080/

* [ngrok](https://ngrok.com/)
    
  I want to expose a local server behind a NAT or firewall to the internet.
  ngrok lets you expose a locally running web service to the internet. Just tell ngrok which port your web server is running on. [国内 ngrok 服务](http://natapp.cn/)
  > ngrok http 3000 -subdomain myapp
  >  
  > _Cloud\Google\Gmail\ngrok.exe

* [Surge](http://surge.sh/)

  Static web publishing(Free custom domain support) for Front-End Developers
  > surge list
  >  
  > surge --domain ufologist.surge.sh
  >  
  > surge teardown ufologist.surge.sh

* [Apache](http://httpd.apache.org/)

  主要用ab工具做测试
  > _Cloud\Google\Gmail\apache
  >
  > ab -n 10 -c 5 http://qq.com/
  >  
  > abs -n 10 -c 5 https://mp.weixin.qq.com/

* [Sails](http://sailsjs.org/)

  Sails is a lightweight framework that sits on top of Express. Sails makes it easy to build custom, enterprise-grade Node.js apps. It is designed to emulate the familiar MVC pattern of frameworks like Ruby on Rails.
  > sails new sails-demo
  > 
  > cd sails-demo
  > 
  > sails lift
   
   或者试一试 IBM 出品的[StrongLoop](https://strongloop.com/)可以快速的Compose APIs, Build, Deploy and Monitor Node

* [IETester](http://www.my-debugbar.com/wiki/IETester/HomePage)

## 辅助工具
* [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [RailsInstaller](http://railsinstaller.org/)

  顺带了[Git](http://www.git-scm.com/) | [SourceTree](https://www.atlassian.com/software/sourcetree/overview)
* [Python](https://www.python.org/downloads/)

* [ConEmu](https://github.com/Maximus5/ConEmu)

  > Customizable Windows terminal with tabs, splits, quake-style
  >
  > `_Cloud\Google\Code\sync-software\ConEmu`

* [Cygwin](https://cygwin.com/) Get that Linux feeling - on Windows

* [nginx](http://nginx.org)

  HTTP服务器, 主要用做反向代理和负载均衡
  > `_Cloud\Google\Code\sync-software\nginx`
  >
  > nginx
  >  
  > nginx -t
  >  
  > nginx -s reload
  >  
  > nginx -s stop

* [TortoiseSVN](http://tortoisesvn.net/)

  > _Cloud\Google\Gmail\TortoiseSVN-1.6.8.19260-win32-svn-1.6.11

* [Microsoft Network Monitor](http://www.microsoft.com/en-us/download/details.aspx?id=4865)
    
  Network Monitor 3.4 is the archive versioned tool for network traffic capture and protocol analysis. 

* [Wireshark](https://www.wireshark.org/download.html)

  > _Cloud\Google\Gmail\WiresharkPortable

* [Mockplus](http://www.mockplus.cn/)

  更快、更简单的原型设计

* [Mark Man](http://getmarkman.com/)

  1.40.7是最后一个免费版本(按住ctrl进行自动测量), 需要先安装[AIR]( https://get.adobe.com/air/)环境. 现在版本收费了, 使用会有一些功能限制
  > _Cloud\Google\Gmail\MarkMan_1.40.7.air


## 项目方案
* CMS
  - [DoraCMS](https://github.com/doramart/DoraCMS)
  - [iBlog2](https://github.com/eshengsky/iBlog2)
  - [铭飞MCMS](http://git.oschina.net/mingSoft/MCMS)
  - [师说CMS](http://git.oschina.net/shishuo/CMS)
  - [NodeBB](https://github.com/NodeBB/NodeBB)
  - [Ghost博客平台不错, 试试看, 作为wordpress的取代品](https://ghost.org/)
  - [KeystoneJS](https://github.com/keystonejs/keystone)
  - [Liblog](https://github.com/livisky/liblog) 一个简单易用的博客系统基于 ThinkJS
  - [CmsWing](https://github.com/arterli/CmsWing)
一款基于ThinkJS(Node.js MVC)和MySQL的功能强大的（PC端,手机端和微信公众平台）电子商务平台及CMS建站系统

* [AOS](http://git.oschina.net/osworks/AOS)
* [G4Studio](https://git.oschina.net/osworks/G4Studio)
* [JFinal_Authority](http://git.oschina.net/jayqqaa12/JFinal_Authority)
* [JECP](http://git.oschina.net/loyin/jecp) jfinal + easyUI+activiti 企业协同平台
* [s2jh4net](https://github.com/xautlx/s2jh4net/blob/master/src/main/webapp/docs/markdown/%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD.md)
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

* [webbase](http://git.oschina.net/wangt/webbase)

  > 业务系统框架,包括员工管理,组织机构,请假出差申请,流程审批,信息汇总,excel导出等基础功能
* [JEECG](http://git.oschina.net/jeecg/jeecg)
* [Eova快速开发平台](http://git.oschina.net/eova/eova)

* [PSI 开源进销存系统](http://git.oschina.net/crm8000/PSI)
* [ECP](http://git.oschina.net/loyin/ECP) 简单客户管理及进销存财务系统

* [ExamStack](http://git.oschina.net/ocelot/ExamStack)

  > 免费开源互联网考试、学习系统、创建在线教育网站的优质解决方案
* [mpsdk4j](https://github.com/elkan1788/mpsdk4j)

  > JAVA微信公平台开发SDK

* [jeewx](http://git.oschina.net/jeecg/jeewx) 

  > 微信公众账号开发平台

* [p3-weixin](http://git.oschina.net/jeecg/p3-weixin)

  > 捷微H5活动开源平台, 采用插件模式开发H5营销活动，独立部署，解决微信活动大用户、高并发问题

* [jfinal-weixin](http://git.oschina.net/jfinal/jfinal-weixin)

* [Ke361](http://git.oschina.net/jcove/ke361)

  > 开源的淘宝客系统

* [JFinalShop](http://git.oschina.net/hycx227/JFinalShop)
* [R3 Query](http://git.oschina.net/aagagagag/R3-Query)

  > 商业智能报表

* [zftlive](http://git.oschina.net/zftlive/zftlive)

  > 集成目前Android主流优秀第三方组件、优秀好用的自定义控件、实用工具类封装、以及一些APP共通模块

* [《刀塔传奇》开源项目](http://git.oschina.net/beyonehu/manual_dota)

* [KODExplorer](http://git.oschina.net/kalcaddle/KODExplorer) 基于Web的在线文件管理、代码编辑器
* [Mybatis_PageHelper](http://git.oschina.net/free/Mybatis_PageHelper) 分页插件支持任何复杂的单表、多表分页

* 其他可选项 - [WebX5/BeX5](http://wex5.com/cn/bex5/) 看还有哪些?

## 项目管理
* [禅道](http://www.zentao.net/)

  需求管理, bug跟踪, 版本计划, [集成禅道和svn](http://www.zentao.net/book/zentaopmshelp/137.html), [禅道配置https协议的svn](http://www.zentao.net/thread/83526.html), 当然还可以设置SVN必须在提交时填写提交日志

* [Trac](http://trac.edgewall.org/)
    
  Trac is an enhanced wiki and issue tracking system for software development projects

* [Redmine](http://www.redmine.org/)

  Redmine is a flexible project management web application


## 网站
* [GitHub](https://github.com/ufologist)
* [GitBook](https://www.gitbook.com/)


## 在线工具
* [HTML5 Please](http://html5please.com/)
* [CSS3, Please](http://css3please.com/)
* [Can I use](http://caniuse.com/)
* [CSS3 Generator](http://enjoycss.com/)
* 页面性能测试
  * [听云Network](http://www.tingyun.com/tingyun_network.html "首屏时间/页面打开时间/页面加载时间/Pagespeed评分")
  * [性能魔方 mmTrix 云测评](http://www.mmtrix.com/evaluate/applist)
  * [GTmetrix](https://gtmetrix.com/ "Analyze your page with Google PageSpeed and Yahoo! YSlow rulesets")
  * [WebPagetest](http://www.webpagetest.org/ "Website Performance and Optimization Test")

## 杂项
* [Bower](http://bower.io/)
* [Component](http://component.github.io/)
* [Yeoman](http://yeoman.io/)
* [spm](http://spmjs.io/)
* [Genymobile](http://www.genymobile.com/)
* [MongoDB](http://www.mongodb.org/)


## 更多软件
* [Portable software](http://portableapps.com/apps)
* [我最喜欢的软件 Windows 版 - 小众软件](http://love.appinn.com/)
* [善用佳软](http://xbeta.info/)
* [异次元软件世界](http://www.iplaysoft.com/)
* [精品绿色便携软件](http://www.portablesoft.org/)
* [Choose the Best - Slant](http://www.slant.co/)
* [Landscaping With Frontend Development Tools](https://github.com/codylindley/frontend-tools)
* [WINDOWS下有什么软件能够极大地提高工作效率](http://www.uisdc.com/windows-software-improve-efficiency)
* [经得起检验的工具集](http://gank.io/tools)
