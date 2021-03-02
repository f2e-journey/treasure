# 前后端接口规范

随着前后端分离越来越普遍, 后端接口规范也就越来越重要了. 一套良好的接口规范可以提升工作效率, 减少沟通障碍.

通常我们都会采用 REST 方式来提供接口, 使用 [JSON](http://json.org) 来传输数据.

| 名词        | 含义 |
|:----------|:-----------|
| 前端        | Web前端, APP端, 桌面端等一切属于用户界面的这一层 |
| 后端        | 即服务器端, 指一切属于用户界面之下的这一层 |
| 前后端接口  | 前端与后端进行数据交互的统称, 也叫做数据接口, 属于一种远程调用, 一般指前端通过HTTP(ajax)请求获取到的数据或者执行的某项操作. 为确保前后端(工程师)的协作沟通, 一般由前端和后端一起来定义接口的规范, 规范的内容一般包含接口的地址, 接口的输入参数和输出的数据格式(结构), 最终由后端来实现这些规范, 为前端提供符合规范的接口 |

```
 [前端] 
--------
   ^
   |
   |
前后端接口
   |
   |
--------
 [后端]
```

## 前后端接口协作流程

在开发之前一定要先定义好接口规范, 至于[接口应该由前端来定还是后端来定](https://github.com/ufologist/puer-mock/blob/master/FAQ.md#接口由前端定还是后端定), 这个还得看公司的具体情况, 但一定要让前后端都确认无误, 特别是[接口协商要点](#接口协商要点).

以免出现前后端分离之后最容易出现的扯皮现象. 特别是当你碰到做事不主动(无责任感)的后端, 什么都要前端来催. 比如什么接口又缺了一个字段没有提供啦, 什么又少了一个接口啦, 等等诸如此类. 后端不去熟悉业务, 也不看界面原型和需求, 只管把接口做完, 任务完成就万事大吉了, 每天除了等前端通知哪里要修改, 自己就像没事人一样.

所以说定好接口, 前后端一起来确认好接口是多么的重要, 不然你就等着干着急吧. 当然了, 想一次性完美地将所有接口都定义出来, 有点不太现实, 需要调整的情况在所难免, 所以还是希望后端能够主动一点, 前后端沟通的时候就轻松得多, 大家的效率就都提高了.

### 准备环境

* 安装 [Node.js](https://nodejs.org/)
* 安装 [puer-mock](https://github.com/ufologist/puer-mock)

### 接口规范

由前端(APP端)和后端一起协定接口规范的内容, 确定每一个接口的地址(URL), 输入(request)和输出(response), 必要的时候详细注释每一个字段的含义和数据类型.

具体需要定义哪些接口, 可以按照下面的思路来整理
* **资源接口**: 系统涉及到哪些资源, 按照 RESTful 方式定义的细粒度接口
* **操作接口**: 页面涉及到哪些操作, 例如修改购物车中商品的数量, 更换优惠券等等, 也可以使用 RESTful 方式来定义
* **页面接口**: 页面涉及到太多接口, 如果是一个个地调用, 会需要很多次请求, 有可以影响到前端的性能和用户感知(特别是首屏的体验), 因此可能需要将这些接口的数据合并到一起, 作成一个聚合型接口提供给前端来使用

### 接口协商要点
* 接口必须返回统一的数据结构, 参考[后端接口通用规范中接口返回的数据结构](#接口返回的数据结构)
* 接口查询不到数据时, 即空数据的情况下返回给前端怎样的数据
  * 建议返回非 `null` 的对应数据类型初始值, 例如对象类型的返回空对象(`{}`), 数组类型的返回空数组(`[]`), 其他原始数据类型(`string`/`number`/`boolean`...)也使用对应的默认值
  * 这样可以减少前端很多琐碎的非空判断, 直接使用接口中的数据
  * 例如: `result.fieldName`
  * 如果 `result` 为 `null`, 可想而知会报错 `Uncaught TypeError: Cannot read property 'fieldName' of null`
* 调用接口业务失败的常用错误码, 例如未授权时调用需要授权的接口返回 `"status": 1`
* 接口需要登录时如何处理, 特别是同时涉及到 Web 端/微信端/App 端, 需要前端针对运行环境判断如何跳转到登录页面
* 返回数据中图片 URL 是完整的还是部分的
  * `http://a.res.com/path/to/img.png` 这就是完整的, 前端直接使用这个 URL
  * `/path/to/img.png` 这就是部分的, 一般省略域名部分, 前端需要自己拼接后才能使用 `'http://a.res.com' + '/path/to/img.png'`
* 返回数据中页面跳转的 URL 是给完整的还是部分的
  * 内部页面返回部分的, 或者只给ID, 由前端自己拼接, 例如只给出商品ID, 让前端自己拼接商品详情页的 URL
  * 外部页面返回完整的, 例如广告位要跳转去谷歌
* 返回数据中日期的格式, 是使用时间戳还是格式化好的文字
  * 对于需要前端再次处理的日期值(例如根据日期计算倒计时), 可以使用时间戳(简单暴力), 例如: `1458885313711`, 或者参考 [Date.prototype.toJSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON) 提供 ISO 标准格式(例如需要考虑时区时)
  * 对于纯展示用的日期值, 推荐返回为格式化好的文字, 例如: `2017年1月1日`
* **对于大数字(例如 Java 的 long 类型), 返回给前端时需要设置为字符串类型, 否则 `JavaScript` 会发生溢出, 造成得到的数值错误**
  * 例如: 返回 JSON 数据 `{"id": 362909601374617692}` 前端拿到的值却是: `362909601374617660`
* 分页参数和分页信息
  * 如何限制只返回 N 条数据(limit 参数)
  * 如何控制每页的数据条数(pageSize 参数)
  * 如何加载某一页的数据(page 参数)
    * 第一页是从 0 开始还是从 1 开始
  * 如何避免无限滚动加载可能出现的重复数据(采用 lastId 分页方式, 来避免传统分页方式的弊端)
    * 假设数据是按照新增时间倒序排列的
    * 首先加载 2 页的数据
    * 等了很久
    * 期间新增了很多数据
    * 再获取第 3 页数据
    * 此时就可能出现重复数据的情况, 因为新增的数据都排在最前面, 后面会接着已经加载过数据
  * 分页信息包含什么(total, page, pageSize)
  * 分页信息何时表明已经是最后一页了
    * 请求某页数据时返回的数据条数 < pageSize
    * 请求某页数据时返回的数据条数 = 0
    * 如果碰巧最后一页有 pageSize 条数据, 前端无法通过数据条数来判断已经处于最后一页了

### 接口定义

所有的接口定义在项目前端静态文件目录的 `_mockserver.json` 文件中, 启动 `puer-mock` 服务, 即可使用这些接口获得符合规范的假数据, 也可以查看接口文档.

具体 `puer-mock` 的详细使用手册和 `_mockserver.json` 如何配置接口请参考 [puer-mock 项目](https://github.com/ufologist/puer-mock), 或者参考项目中已经配置好的其他接口.

### 接口协作

由于接口规范的定义和接口的实际实现是分开的两个部分, 而且涉及到多人协作, 因此在开发过程中可能出现接口规范与实现不同步, 最终造成实际的接口不符合规范的定义, 接口规范就会慢慢失去存在的意义.

为了尽量避免这种问题, 后端在实现接口的过程中应该确保与接口规范保持一致, 一旦出现分歧, 必须同步修改接口规范, 尽可能保持沟通.

### 接口文档(示例)

![puer-mock-api-doc-html](https://ufologist.github.io/puer-mock/puer-mock-api-doc-html.png)

## 后端接口通用规范

### 接口地址和请求方式

接口根路径 - [Root Endpoint](https://developer.github.com/v3/#root-endpoint) 推荐为: `http://api.yourdomain.com` 或者 `http://yourdomain.com/api`

接口地址即接口的 URL, 定义时使用相对路径(即不用带上域名信息), 建议分模块来定义, 推荐 REST 风格, 例如
* `GET /user/:id` 表示获取用户信息
* `POST /user` 表示新增用户

### 接口参数

[向接口传递参数时](https://developer.github.com/v3/#parameters), 如果是少量参数可以作为 URL query string 追加到接口的 URL 中, 或者作为 `Content-Type: application/x-www-form-urlencoded` 放在请求体(`body`)中(即表单提交的方式)

对于复杂的接口参数(例如嵌套了多层的数据结构), 推荐在 HTTP 请求体(`body`)中包含一个 JSON 字符串作为接口的参数, 并设置 `Content-Type: application/json; charset=utf-8`.

例如

查询 VIP 用户的接口

```
POST /users?limit=10 HTTP/1.1
Content-Type: application/json; charset=utf-8

{
    "name": "hanmeimei",
    "isVip": true
}
```

### 接口返回的数据结构

返回的响应体类型推荐为 `Content-Type: application/json; charset=utf-8`, 返回的数据包含在 HTTP 响应体中, 是一个 JSON Object. 该 Object 可能包含 3 个字段 `data`, `status`, `statusInfo`

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {},
    "status": 0,
    "statusInfo": {
        "message": "给用户的提示信息",
        "detail": "用于排查错误的详细错误信息"
    }
}
```

**字段名** |**字段说明**
:----------|:-----------
data       | **业务数据**<br>必须是任意 JSON 数据类型(number/string/boolean/object/array).<br>推荐始终返回一个 object (即再包一层)以便于扩展字段.<br>例如: 用户数据应该返回 `{"user":{"name":"test"}}`, 而不是直接为 `{"name":"test"}`
status     | **状态码**<br>必须是 `>= 0` 的 JSON Number 整数.<ul><li>`0` 表示请求处理成功, 此时可以省略 `status` 字段, 省略时和为 `0` 时表示同一含义.</li><li>`非 0` 表示发生错误时的[错误码](http://open.weibo.com/wiki/Error_code "错误码格式可以参考微博API的 Error code"), 此时可以省略 `data` 字段, 并视情况输出 `statusInfo` 字段作为补充信息</li></ul>
statusInfo | **状态信息**<br>必须是任意 JSON 数据类型.<br>推荐始终返回一个 object 包含 `message` 和 `detail` 字段<ul><li>`message` 字段作为接口处理失败时, **给予用户的友好的提示信息**, 即所有给用户的提示信息都统一由后端来处理.</li><li>`detail` 字段用来放置接口处理失败时的详细错误信息. 只是为了方便排查错误, 前端无需使用.</li></ul>

例如
* 接口处理成功时接口返回的数据

  ```
  {
      "data": "api result"
      "status": 0
  }
  ```
* 接口处理失败时接口返回的数据

  ```
  {
      "status": 1,
      "statusInfo": {
          "message": "服务器正忙",
          "detail": {
              "exception": "java.util.List"
          }
      }
  }
  ```

这样我们就可以非常容易地通过判断 status 来处理数据了
```javascript
if (!response.status) {
    // status 为 0 或者没有 status 字段时表示接口成功返回了数据
    console.log(response.data);
} else {
    // 失败
    console.error(response.status, response.statusInfo);
    // 统一由服务端返回给用户的提示信息
    alert(response.statusInfo.message);
}
```

## 错误码规范: `status` 字段该如何取值

采用前后端分离开发模式的项目越来越多, 前端负责调用后端的接口来展现界面, 如果有界面显示异常, 需要有快速方便的手段来排查线上错误和定位出职责范围

综合了经验总结和行业实践, 最简单有效的手段是制定出一套统一的错误码规范, 协助多方人员来排查出接口的错误

例如
* 用户发现错误, 可以截错误码的图, 就能够提供有效的信息帮助开发人员排查错误
* 测试人员发现错误, 可以通过错误码, 快速定位是前端的问题还是后端接口的问题

因此我们确定提示信息规范为: 当后端接口调用出错时, 接口提供一个用户可以理解的错误提示, 前端展示给用户错误提示和错误码, 给予用户反馈

对于错误码的规范, 参考行业实践, 大致有两种方案

* 做显性的类型区分, 快速定位错误的类别, 例如通过字母划分类型: `A101`, `B131`
  * [Standard ISO Response Codes](http://www.nexion.co.za/docs/merchant-access/user-manual/17.%20Standard%20ISO%20Response%20codes.pdf)
* 固定位数, 设定区间(例如手机号码, 身份证号码)来划分不同的错误类型
  * [HTTP Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html "Most API services follow the HTTP error code system RFC2616 with ranges of error codes for different types of error")
  * [System Error Codes](https://docs.microsoft.com/en-us/windows/desktop/Debug/system-error-codes)

具体实践如下
* **错误码固定长度**, 以区间来划分错误类型(例如 HTTP 的状态码)

  例如: 10404 表示 HTTP 请求 404 错误, 20000 表示 API 调用失败, 30000 代表业务错误, 31000 表示业务A错误, 32000 表示业务B错误
* **错误码可不固定长度**, 以首字母来划分错误类型, 可扩展性更好, 但实际运作还是需要划分区间

  例如: H404 表示 HTTP 请求 404 错误, A100 表示 API 调用失败, B100 表示业务A错误, B200 表示业务B错误

关于错误分类的原则, 我们可以根据发送请求的最终状态来划分
- 发送失败(即请求根本就没有发送出去)
- 发送成功
  - HTTP 异常状态(例如 404/500...)
  - HTTP 正常状态(例如 200)
    - 接口调用成功
    - 接口调用失败(业务错误, 即接口规范中 status 非 0 的情况)

### 最终规范

错误码可不固定长度, 整体格式为: `字母+数字`, `字母`作为错误类型, 可扩展性更好, `数字`建议划分区间来细分错误

例如:
- `A` for **API**: API 调用失败(请求发送失败)的错误, 例如 `A100` 表示 URL 非法
- `H` for **HTTP**, HTTP 异常状态的错误, 例如 `H404` 表示 HTTP 请求404错误
- `B` for **backend or business**, 接口调用失败的错误, 例如 `B100` 业务A错误, `B200` 业务B错误
- `C` for **Client**: 客户端错误, 例如 `C100` 表示解析 JSON 失败

```
                                                       发送 HTTP 请求
                                                 ┌───────────┴───────────┐
                                              发送成功¹               发送失败²
                                                 │                       │
                                      ┌──────────┴──────────┐            A 例如: A100
                                获得 HTTP 响应       无法获得 HTTP 响应³
                                      │                     │
                                 HTTP status                A 例如: A200
                           ┌──────────┴──────────┐
                       HTTP 成功(200-300)     HTTP 异常
                           │                     |
               {data, status, statusInfo}        H${HTTP status} 例如: H404
               ┌───────────┴───────────┐
          接口调用成功(status:0)   接口调用失败
      ┌────────┴────────┐              |
客户端处理出错      客户端处理正常       B${status}${statusInfo.message} 例如: B100
      |
      C 例如: C100

- 发送成功¹: 服务端收到了 HTTP 请求并返回了 HTTP 响应
- 发送失败²: HTTP 请求没有发送出去(例如由于安全限制被浏览器拦截不允许发送), 未到达服务端(即服务端没有收到这个 HTTP 请求)
- 无法获得 HTTP 响应³: 服务端收到了请求并返回了响应, 但客户端由于某些原因无法获得 HTTP 响应, 例如客户端的请求超时处理机制, 30秒服务端还没有返回响应, 则放弃此次请求
```

### 统一错误提示

* 错误日志
  * 接口调用出错(`${错误码}`) `${HTTP 方法}` `${HTTP URL}` `${请求参数}` `${请求选项}` `${请求返回结果}`
  * 例如: `接口调用出错(H404) GET https://domain.com {foo: bar} {option1: 'test'} {status: 404}`
* 给用户的提示消息(参考自 QQ 的错误提示消息)
  * 提示消息(错误码: xxx)
  
    ![weapp-error-tip](https://user-images.githubusercontent.com/167221/54168910-a5025280-44ab-11e9-8f14-6da25051916c.png) ![weibo-error-tip](https://user-images.githubusercontent.com/167221/54168905-a2076200-44ab-11e9-8607-48eb9a08156b.PNG) ![qq-error-tip](https://user-images.githubusercontent.com/167221/54168895-9caa1780-44ab-11e9-94b2-a49a87f3eac3.png)
  * 提示消息和错误码之间用换行隔开
  * 错误码整块内容建议弱化使用灰色字
  * 例如
  
    ![mobile-error-code-message](https://user-images.githubusercontent.com/167221/50005112-239e3f80-ffe4-11e8-9996-2affc01b8b31.png)
 ![pc-error-code-message](https://user-images.githubusercontent.com/167221/56418780-912be680-62ca-11e9-93d1-cf6d95d950d7.png)

规范实现: [weapp-backend-api](https://github.com/ufologist/weapp-backend-api)

## 接口实现建议

* **接口实现的大方向建议遵循 RESTful 风格**
* HTTP 动词: 获取数据用 GET, 新增/修改/发送数据用 POST
  * 例如: 获取用户数据的接口用 GET, 修改用户数据的接口用 POST 
* 对于资源的操作类型, 使用 HTTP 动词来指定, 减少接口 URL 的数量
  * 例如: `GET /contact` 获取联系人, `POST /contact` 新增/修改联系人
* **对外的 ID 字段使用字符串类型**
  * 特别核心数据的 ID 字段, 不要使用自增的数字类型, 建议使用无规则的字符串类型(例如UUID), 避免核心数据被轻易抓取
  * 避免使用大数字类型(Long), 因为前端可能承载不了这个精度而溢出得到另外一个数值
  * 例如: Java 中的 Long 类型的数值: `362909601374617692`, 作为 JSON 数据返回给前端, 前端拿到的值变成了 `362909601374617660`
* 接口字段建议同时给出 ID 字段和用于显示字段, 前端提交数据时只提交 ID 字段
  * 例如: `{"gender": 1, "genderText": "男"}`
* 图片的 URL 建议返回完整的 URL
  * 例如: `{"pic": "https://domain.com/a.png"}`
* 时间字段建议同时返回时间戳的原始值(或 ISO 标准格式)和用于统一显示的格式化文本
  * 由后端接口集中控制各端的显示, 提供的原始值兼顾前端的自定义显示或者计算(例如倒计时)的需求
  * 避免每个端(例如H5/APP/小程序)都需要对时间做统一的格式化实现, 一旦需要调整, 需要各个端都调整一遍
  * 例如: `{"createTime": 1543195480357, "createTimeText": "2018年11月26日"}`
* 统一分页的数据格式
  * 分页请求的参数和分页结果的数据结构


## 注意
* [Version](https://developer.github.com/v3/media/#request-specific-version "Accept: application/vnd.github.v3+json")
* 跨域
  - [CORS](https://developer.github.com/v3/#cross-origin-resource-sharing "Cross Origin Resource Sharing")
  - [JSONP](https://developer.github.com/v3/#json-p-callbacks)
* [避免中文乱码](http://blog.csdn.net/chaijunkun/article/details/8257209 "将中文等非 ASCII 字符转义为 \uFFFF 这样的 unicode 形式 | non-ASCII characters to be escaped as \uFFFF")

## 参考
* [E-JSON数据传输标准](https://github.com/ecomfe/spec/blob/master/e-json.md)
* [有范云协作](http://youfan.netease.com/) 让项目的协作姿势更有范儿

  > * **交互阶段说明**
  >   * 交互设计师根据产品方的需求对产品进行行为设计和界面设计的阶段，主要产出物为交互设计稿
  >   * 开发工程师需要做的事情是针对产品需求、交互设计稿中的内容进行技术评审，为产品方、交互设计师提供可行技术实现解决方案，对于多种不同解决方案需针对各种解决方案做分析说明，务必准确传达各种方案的优缺点，并根据需求给出建议方案
  > * **系统设计说明**
  >   * 各端开发工程师针对产品需求说明、交互设计稿开始设计系统架构、拆分子系统、划分子系统模块、协调端与端之间的接口规范，这个阶段各端根据实际情况输出若干系统设计说明书等文档
  >   * 除此之外更重要的是输出端与端之间通信的接口规范，而这个规范则可以借助 [NEI 平台](http://nei.netease.com/) 来完成
  > * **编码阶段说明**
  >   * 开发工程师根据系统设计阶段的输出，用代码来实现这样的系统，包括技术方案的选型、项目框架的搭建、工具及环境的配置等
  >   * 其中有些工作可以借助于有范云协作提供的自动化工具 [NEI-Toolkit](https://github.com/NEYouFan/nei-toolkit) 来完成，比如项目的初始结构代码、在 [NEI平台](http://nei.netease.com/) 上定义好的接口规范等
  > * **自测阶段说明**
  >   * 各个端的工程师验证自己编写的代码的正确性，按角色不同，测试方式也有所有不同
  >   * 对于前端和移动端工程师来说，主要是需要测试各种可能的值会不会影响界面展示
  >   * 对于服务端工程师来说，主要是测试提供给客户端工程师使用的接口的正确性，对于不同的输入参数是否返回了预期的结果
  > * **联调阶段说明**
  >   * 主要是连测试环境进行测试
  >   * 对于前端和移动端工程师来说，主要是需要将本地容器提供的接口换成测试环境的接口
  > * **测试阶段说明**
  >   * 开发工程师开发完成后提测的过程，是产品上线前的最后环节
  >   * 测试工程师会对接 NEI 平台生成接口测试用例代码并集成到自动化测试平台运行，如果NEI平台的接口定义与实际提测的项目不符则此次提测失败，需由开发对照 NEI 平台检查接口实现情况，所以可以保证 NEI 平台上的接口定义始终与线上保持一致
* [客户端API请求规范](http://blog.12xiaoshi.com/2016/03/31/tech/api-constraint_design/)

  > | 参数名 | 说明                                                                                               |
  > |--------|----------------------------------------------------------------------------------------------------|
  > | imei   | 国际移动设备身份码                                                                                 |
  > | imsi   | 客户端用户标识                                                                                     |
  > | t      | TIMESTAMP,请求的时间戳                                                                             |
  > | appkey | 由服务端颁发的appkey                                                                               |
  > | sign   | md5签名串。为了减轻非法恶意请求，每次来自APP的请求都需要对请求参数进行签名以实现安全认证           |
  > | lng    | 手机上获取的经度                                                                                   |
  > | lat    | 手机上获取的纬度                                                                                   |
  > | ci     | 渠道标识，格式为：channelId@应用名平台客户端版本，例如：1001@nzaom_android_1.0，其中1001表示应用宝 |
* [GitHub API](https://developer.github.com/v3/) | [微博API](http://open.weibo.com/wiki/%E5%BE%AE%E5%8D%9AAPI) | [淘宝开放平台 API](http://open.taobao.com/doc2/detail.htm?articleId=101617&docType=1&treeId=1)
* [JSend](http://labs.omniti.com/labs/jsend "JSend is a specification that lays down some rules for how JSON responses from web servers should be formatted.") | [JSON API](http://jsonapi.org/) | [JSON Schema](http://json-schema.org/ "describes your JSON data format") | [JSON-RPC](http://www.jsonrpc.org/) | [JWT](https://jwt.io/ "JSON Web Tokens | token-based authentication") | [OAuth](http://oauth.net/)

  > | Type    | Description | Required Keys | Optional Keys |
  > |---------|-------------|---------------|---------------|
  > | success | All went well, and (usually) some data was returned. | status, data | |
  > | fail    | There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied | status, data | |
  > | error    | An error occurred in processing the request, i.e. an exception was thrown | status, message | code, data |
* [Google JSON Style Guide](https://google.github.io/styleguide/jsoncstyleguide.xml)
* [最佳实践：更好的设计你的 REST API](http://www.ibm.com/developerworks/cn/web/1103_chenyan_restapi) | [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html) | [Best Practices for Designing a Pragmatic RESTful API](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api) | [HTTP API Design Guide](https://github.com/interagent/http-api-design "HTTP+JSON API design practices") | [The RESTful Cookbook](https://github.com/sofish/restcookbook) | [RESTful API 编写指南](http://blog.igevin.info/posts/restful-api-get-started-to-write/)
* [Restlet Studio - Web IDE for API design](https://studio.restlet.com/) | [Swagger](http://swagger.io/) | [ReDoc](https://github.com/Rebilly/ReDoc/ "OpenAPI/Swagger-generated API Reference Documentation") | [RAML](http://raml.org/ "RESTful API Modeling Language") | [API Blueprint](https://apiblueprint.org/)
