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

在开发之前一定要先定义好接口规范, 而且一定要让前后端都确认无误, 特别是[接口协商要点](https://github.com/f2e-journey/treasure/blob/master/api.md#接口协商要点).

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
* 接口必须返回统一的数据结构, 参考[后端接口通用规范中接口返回的数据结构](https://github.com/f2e-journey/treasure/blob/master/api.md#接口返回)
* 调用接口业务失败的常用错误码, 例如未授权时调用需要授权的接口返回 `"status": 1`
* 登录接口如何处理, 特别是同时涉及到 Web 端/微信端/App 端
* 返回数据中图片 URL 是完整的还是部分的
  * `http://a.res.com/path/to/img.png` 这就是完整的, 前端直接使用这个 URL
  * `/path/to/img.png` 这就是部分的, 一般省略域名部分, 前端需要自己拼接后才能使用 `'http://a.res.com' + '/path/to/img.png'`
* 返回数据中页面跳转的 URL 是给完整的还是部分的
  * 内部页面返回部分的, 或者只给ID, 由前端自己拼接, 例如只给出商品ID, 让前端自己拼接商品详情页的 URL
  * 外部页面返回完整的, 例如广告位要跳转去谷歌
* 返回数据中时间的格式, 是使用时间戳还是格式化好的文字
* 分页参数和分页信息
  * 如何限制只返回 N 条数据(limit)
  * 如何控制每页的数据条数(pageSize)
  * 如何加载一页数据(page)
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
    * 请求某页数据时返回的数据条数 == 0, 这是碰巧最后一页有 pageSize 条数据, 前端无法通过数据条数来判断已经处于最后一页了

### 接口定义

所有的接口定义在项目前端静态文件目录的 `_mockserver.json` 文件中, 启动 `puer-mock` 服务, 即可使用这些接口获得符合规范的假数据, 也可以查看接口文档.

具体 `puer-mock` 的详细使用手册和 `_mockserver.json` 如何配置接口请参考 [puer-mock 项目](https://github.com/ufologist/puer-mock), 或者参考项目中已经配置好的其他接口.

### 接口协作

由于接口规范的定义和接口的实际实现是分开的两个部分, 而且涉及到多人协作, 因此在开发过程中可能出现接口规范与实现不同步, 最终造成实际的接口不符合规范的定义, 接口规范就会慢慢失去存在的意义.

为了尽量避免这种问题, 后端在实现接口的过程中应该确保与接口规范保持一致, 一旦出现分歧, 必须同步修改接口规范, 尽可能保持沟通.

### 接口文档(示例)

![puer-mock-api-doc-html](https://ufologist.github.io/puer-mock/puer-mock-api-doc-html.png)

## 后端接口通用规范

### 请求接口

接口 [Root Endpoint](https://developer.github.com/v3/#root-endpoint) 推荐为: `http://api.yourdomain.com`.

[向接口传递参数时](https://developer.github.com/v3/#parameters), 推荐在 HTTP 请求体(`body`)中包含一个 JSON Object 作为接口的参数, 并设置 `Content-Type: application/json; charset=utf-8`. 如有少量参数可以补充到 URL query string 或者作为 `Content-Type: application/x-www-form-urlencoded` 放在请求体(`body`)中

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

### 接口返回

返回的响应体类型推荐为 `Content-Type: application/json; charset=utf-8`, 返回的数据包含在 HTTP 响应体中, 是一个 JSON Object. 该 Object 可能包含 3 个字段 `data`, `status`, `statusInfo`

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {}
    "status": 0,
    "statusInfo": {}
}
````

**字段名** |**字段说明**
:----------|:-----------
data       | **业务数据**. 必须是任意 JSON 数据类型(number/string/boolean/object/array), 推荐始终返回 object 以便于扩展字段. 如果要表示日期数据, 可以使用时间戳(简单暴力), 例如: `1458885313711`, 或者参考[Date.prototype.toJSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON) 提供的 ISO 标准格式.
status     | **状态码**. 必须是 `>= 0` 的 JSON Number 整数. `0` 表示请求成功处理并返回. 这个字段可以省略, 省略时和为 `0` 时表示同一含义. `非 0` 表示发生错误时的[错误码](http://open.weibo.com/wiki/Error_code "错误码格式可以参考微博API的 Error code"), 此时可以省略 `data` 字段, 并视情况输出 `statusInfo` 字段作为补充信息
statusInfo | **状态信息**. 必须是任意 JSON 数据类型. 推荐始终返回 object 并包含一个 `message` 字段

例如
* 成功时接口返回的数据

  ```
  {
      "data": "api result"
      "status": 0
  }
  ```
* 失败时接口返回的数据

  ```
  {
      "status": 1,
      "statusInfo": {
          "message": "服务器正忙"
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
}
```

### 注意
* [Version](https://developer.github.com/v3/media/#request-specific-version "Accept: application/vnd.github.v3+json")
* 跨域
  - [CORS](https://developer.github.com/v3/#cross-origin-resource-sharing "Cross Origin Resource Sharing")
  - [JSONP](https://developer.github.com/v3/#json-p-callbacks)
* [避免中文乱码](http://blog.csdn.net/chaijunkun/article/details/8257209 "将中文等非 ASCII 字符转义为 \uFFFF 这样的 unicode 形式 | non-ASCII characters to be escaped as \uFFFF")

## 参考
* [E-JSON数据传输标准](https://github.com/ecomfe/spec/blob/master/e-json.md)
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
