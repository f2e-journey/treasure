# 理解数据驱动视图

其概念源自于纯函数式的思维模式: `输入 => 输出`, 就像 `1 + 1 = 2` 和 `1 + x = y` 这样的数学公式一样, 即一定的输入(x)可以推导出一定的输出(y), 这个过程是[幂等](http://baike.baidu.com/item/%E5%B9%82%E7%AD%89)性的不会产生任何副作用.

> 幂等（idempotent、idempotence）是一个数学与计算机学概念，常见于抽象代数中。
>
> 在编程中.一个幂等操作的特点是其任意多次执行所产生的影响均与一次执行的影响相同。
>
> 幂等函数，或幂等方法，是指可以使用相同参数重复执行，并能获得相同结果的函数。这些函数不会影响系统状态，也不用担心重复执行会对系统造成改变。

那么用在数据驱动视图这个概念上, 即**数据是输入, 视图是输出**: `数据 => 视图`, 视图是基于数据的渲染结果.

理解了这个简单的道理后, 渲染视图的逻辑就再简单不过了
* 操作数据
* 给视图数据
* 渲染视图

我们可以反复地基于数据来渲染视图, 其核心思想就是: **只要数据变化, 就重新渲染视图**
* 给视图灌入数据
* 基于这份数据来渲染视图
* 修改数据
* 给视图灌入新数据
* 不管三七二十一, 重新渲染视图

```javascript
// es2015
// 可以参考 Backbone.View
class View {
    constructor() {
        this._data = {
            text: ''
        };
        this._html = '';
    }
    setData(data) {
        this._data = data;
        return this;
    }
    render() { // 牢记纯函数式思维: 输入 => 输出
        return this._html = '<p>' + this._data.text + '</p>';
    }
}

// 建立一个视图
var view = new View();
// 给视图灌入数据, 基于这份数据来渲染视图
view.setData({text: '数据1'}).render();
// 给视图灌入新数据, 不管三七二十一, 重新渲染视图
view.setData({text: '数据2'}).render();
view.setData({text: '数据N'}).render();
```

是不是有点 React 的感觉了?

> React components implement a `render()` method that takes input data and returns what to display.
>
> When a component's state data changes, the rendered markup will be updated by re-invoking `render()`.
>
> [A Stateful Component](https://facebook.github.io/react/)

以这样的思路来写视图的逻辑后, 逻辑是简单了, 但每次数据改变, 都需要自己去重新渲染视图, 有点麻烦.

这个过程可以自动吗? 只要我一改数据, 视图就自动渲染成最新的, 这应该就是 `MVVM` 的雏形.

## MVVM 的核心理念

**数据绑定**: DataBinding, **将数据与视图绑定起来, 操作数据等同于操作视图, 数据修改后视图自动更新**.

> ![MVVMPattern](http://upload.wikimedia.org/wikipedia/commons/8/87/MVVMPattern.png)
>
> [MVVM](https://en.wikipedia.org/wiki/Model_View_ViewModel)

那么到底什么是数据绑定呢?

## 理解数据绑定

这里假设你使用过模版引擎, 借助模版引擎, 我们来理解下数据绑定的概念.

模版引擎一般会定义一些语法, 让数据在模版中预先占位(例如 `{{ name }}`), 经过模版引擎解析后, 可以让模版生成为 HTML 字符串.

也就是说: `模版 + 数据 = 视图`, 如同公式般让数据与视图形成了对应关系, 而这种关系是在模版中以声明的方式(例如上面的占位语法)反映出来的.

因此数据绑定的概念, 我们可以理解为以某种方式**声明数据与视图的关系**. 例如模版引擎中让数据在模版中预先占位的表达方式, 例如那些大括号们, 就可以算做是一种一次性的数据绑定.

由于前端(字符串)模版引擎只会做一次性的解析, 然后生成 HTML 字符串. 如果数据发生变更, 我们就需要手动再去调用一次模版引擎来重新生成对应的 HTML 字符串.

例如:

`模版 + 数据1 = 视图1`

数据变更后, 我们需要再次调用模版引擎

`模版 + 数据2 = 视图2`

模版是同一份模版, 数据变化后, 我们需要主动调用模版引擎, 让模版引擎根据不同的数据来生成不同的视图.

那么建立好数据绑定后, 如何做到修改数据后自动更新视图呢? 我们需要一种单向的数据绑定: `数据 -> 视图`, 来实现视图的自动更新.

## 单向数据绑定

下面我们以 [Vue](https://vuejs.org/) 来举例说明.

我们暂且将 Vue 看作是一种模版引擎, Vue 这个"模版引擎", 提供了单向的数据绑定功能. 即数据如果发生变化, 则自动反映到视图上.

我们可以理解为 Vue 监听了数据的变化, 一旦数据发生了改变, Vue 则自动根据新的数据来重新渲染视图.

> 数据和 DOM 已经被绑定在一起，一切都是**响应式的**. 所有的 DOM 操作都由 Vue 来处理, 你编写的代码只需要关注底层的数据逻辑.

```javascript
// 建立一个视图
var vm = new Vue({
    data: {
        text: ''
    },
    template: '<p>{{ text }}</p>'
});
vm.$mount();

// 单向数据绑定, 我们只管修改数据, Vue 会替我们自动更新视图
vm.text = '数据1';
vm.text = '数据2';
vm.text = '数据N';

console.log(vm.$el);
```

其实使用 Vue 的模版功能, 我们还不能完全感受到只要数据一变, 就会重新调用一下渲染的这种机制. 那么我们试一试 Vue 的 [Render 函数](https://cn.vuejs.org/v2/guide/render-function.html), 这一切就都明白了.

```javascript
var vm = new Vue({
    data: {
        text: ''
    },
    render: function(createElement) {
        console.log('每当数据改变就重新调用一下 render 方法', 'text', this.text, Date.now());
        return createElement('p', this.text);
    }
});
vm.$mount();

vm.text = '数据1';
vm.text = '数据2';
vm.text = '数据N';

vm.$nextTick(function() {
    console.log(vm.$el);
});

// 你可能注意到了, render 方法在这里只被调用了 2 次
// 为什么呢? 因为 Vue 做了异步渲染, 并不是数据一变, 就立马调用一次渲染
//
// https://cn.vuejs.org/v2/guide/reactivity.html#异步更新队列
// 
// 只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。
// 如果同一个 watcher 被多次触发，只会一次推入到队列中。
// 这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要。
// 然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际工作。
//
// 因此这里只发生了 2 次渲染
// 第一次: 初始化的渲染(mount 的时候)
// 第二次: 数据被多次修改后, 最终被修改成 "数据N" 后发生的渲染
```

这下明白了吧, **监听数据的变化, 只要数据改变, 就重新渲染一下**, 就这么简单, Vue 也是这么干的.

## 思路的转变

数据驱动视图, 是一种思路的转变. 指导着我们去抽象视图, 抽离出视图中的数据部分, 即可变的部分. 将繁琐的视图操作转变为清晰的数据操作.

你看见的不是界面, 也不是视图, 你看见只有数据, 视图的改变其实就是数据改变后的反应而已.

怎么有点黑客帝国的感觉? 如果时刻以数据驱动视图的思路来写视图层, 我们大概会看到这样的东西. :)

![黑客帝国数据](http://ww4.sinaimg.cn/large/0060lm7Tgy1fe1oya24hgj30ug0cmjz5.jpg?v1)

再将大一些的视图分解为小的组件, 最终实现组件化. 让视图如同拼积木一样, 由一个个组件拼接而成, 拼接的地方就是接口.

因此最重要的就是抽取出组件的接口, 弄清楚一个组件应该对外提供什么样的功能, 例如需有传入什么属性数据, 应该发出什么事件来通知外层, 就如同你平时使用 HTML 提供的标准组件一样.

## Virtual DOM

每一次数据改变就重新全量地刷新一下视图, 这样会不会有性能问题啊?

假设我们有一个很长很长的列表, 对应一份列表的数据, 例如

```html
<ul>
    <li>1</li>
    <li>...</li>
    <li>...</li>
    <li>10000</li>
</ul>
```

如果列表数据其中的一项修改了, 我们就重新渲染一遍 DOM? 这样也太浪费了吧, 没有性能问题才怪哦.

但如果我们在渲染之前, 先做一下对比呢? 发现只有其中的一个数据修改了, 那么我们是不是就只需要操作视图中的那一个 DOM 元素就好了啊.

这就是为什么会有 [Virtual DOM](https://github.com/Matt-Esch/virtual-dom) 这一层了, `Virtual DOM -> Virtual DOM Tree Diff -> Patch -> DOM`. **将渲染的底层操作都封装起来, 上层就如同每次做全量刷新一般**.

* 创建一棵 v-dom-tree
* 完成一次全量的渲染
* 数据修改后, 我们重新创建这棵 v-dom-tree
* 前后比对 v-dom-tree 的变化
* 给 DOM 打补丁(即增量的更新)

这下明白为什么 React 是前端的一次革命了吧, 它彻底改变了前端的思维模式, 所以推荐大家去学习一下 [React](https://github.com/facebook/react) 思维的精华.

最后总结一下, 下次写界面的时候, 记住以下两点
* 数据(状态)一变, 重新渲染, `data -> render`
* 全量渲染还是做 patch, 可以认为是底层的东西, 就当是系统提供的一种性能优化手段好了
