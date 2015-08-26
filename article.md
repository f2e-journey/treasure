# 前端精选文集

主要是一些值得反复阅读, 细细品味的文章

* [前端开发技术的发展](https://github.com/xufei/blog/blob/master/posts/2013-01-14-%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E6%8A%80%E6%9C%AF%E7%9A%84%E5%8F%91%E5%B1%95.md)
* [前端MV*框架的意义](https://github.com/xufei/blog/blob/master/posts/2013-10-22-%E5%89%8D%E7%AB%AFMV%E2%98%86%E6%A1%86%E6%9E%B6%E7%9A%84%E6%84%8F%E4%B9%89.md)
* [Web应用的组件化开发](https://github.com/xufei/blog/blob/master/posts/2013-11-20-Web%E5%BA%94%E7%94%A8%E7%9A%84%E7%BB%84%E4%BB%B6%E5%8C%96%E5%BC%80%E5%8F%91%EF%BC%88%E4%B8%80%EF%BC%89.md)
* [从零开始编写自己的JavaScript框架](https://github.com/xufei/blog/blob/master/posts/2013-07-01-%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%BC%96%E5%86%99%E8%87%AA%E5%B7%B1%E7%9A%84JavaScript%E6%A1%86%E6%9E%B6%EF%BC%88%E4%B8%80%EF%BC%89.md)
* [2015前端组件化框架之路](https://github.com/xufei/blog/issues/19)
* [关于前端开发中“模块”和“组件”概念的思考](https://github.com/hax/hax.github.com/issues/21)
* [影响企业应用前端开发效率的因素](https://github.com/xufei/blog/blob/master/posts/2014-01-06-%E5%BD%B1%E5%93%8D%E4%BC%81%E4%B8%9A%E5%BA%94%E7%94%A8%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E6%95%88%E7%8E%87%E7%9A%84%E5%9B%A0%E7%B4%A0.md)
* [基于AngularJS的企业软件前端架构](https://github.com/xufei/blog/blob/master/posts/2014-04-27-%E5%9F%BA%E4%BA%8EAngularJS%E7%9A%84%E4%BC%81%E4%B8%9A%E8%BD%AF%E4%BB%B6%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84.md)
* [前端架构那些事儿](https://github.com/xufei/blog/blob/master/posts/2014-05-20-%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84%E9%82%A3%E4%BA%9B%E4%BA%8B%E5%84%BF.md)
* [JavaScript 模块化七日谈](https://github.com/Huxpro/js-module-7day)

    > * 第一日 上古时期 Module? 从设计模式说起
    > * 第二日 石器时代 Script Loader 只有封装性可不够，我们还需要加载
    > * 第三日 蒸汽朋克 Module Loader 模块化架构的工业革命
    > * 第四日 号角吹响 CommonJS 征服世界的第一步是跳出浏览器
    > * 第五日 双塔奇兵 AMD/CMD 浏览器环境模块化方案
    > * 第六日 精灵宝钻 Browserify/Webpack 大势所趋，去掉这层包裹！
    > * 第七日 王者归来 ES6 Module 最后的战役
* [前端开发体系建设日记](https://github.com/fouber/blog/issues/2)
* [前端集成解决方案](https://github.com/fouber/blog/issues/1)
* [大公司里怎样开发和部署前端代码？](https://github.com/fouber/blog/issues/6)
* [这里的东西还需要整理一下, 还有顺序看是否稍微调整下](https://github.com/nimojs/blog/issues/18)
* [xufei的blog和issue再过一遍](https://github.com/xufei/blog/tree/master/posts)
* [lifesingerblog整理](https://github.com/lifesinger/lifesinger.github.com/issues/184)
* [evernote里面的F2E再过一遍]()
* [JavaScript与有限状态机](http://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html)
* [Build a Great Web Experience](https://developers.google.com/web/)
* [Decoupling Your HTML, CSS, and JavaScript](http://philipwalton.com/articles/decoupling-html-css-and-javascript/)
    
    > The mark of maintainable HTML, CSS, and JavaScript is when individual developers can easily and confidently edit parts of the code base without those changes inadvertently affecting other, unrelated parts.
    > 
    > A back-end developer should be able to change the markup in an HTML template without worrying about accidentally breaking a CSS rule or some JavaScript functionality.
    > 
    > It’s best to style all your visual components with one or more classes on the root element of the component itself.
    > 
    > DON't use the same class for both styling purposes and behavior(a JavaScript hook). Use the prefix **js-*** to define class for JavaScript hook.
    > 
    > USE the prefix **is-*** to define class selectors that alter the state of a visual component
* [Side Effects in CSS](http://philipwalton.com/articles/side-effects-in-css/)
    
    > The hardest problem in CSS
    > 
    > CSS is global, and every rule you write has the potential to affect entirely unrelated parts of the site. It’s this unpredictability that makes writing good CSS so hard.
    > 
    > Because all CSS rules live in the global scope, side effects are extremely common. And since your average stylesheet usually consist of an extremely fragile collection of highly-coupled rules, all intimately dependent on the presence, order, and specificity of other rules, even the most unassuming changes can have unforeseen consequences.
    > * Base rule changes
    > * Naming collisions
    > * Subtree matches
* [CSS Modules](http://www.w3ctech.com/topic/1479)
    
    > 1) Global Namespace
    > 
    > 2) Dependencies
    > 
    > 3) Dead Code Elimination
    > 
    > 4) Minification
    > 
    > 5) Sharing Constants
    > 
    > 6) Non-deterministic Resolution
    > 
    > 7) Isolation
