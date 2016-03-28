# 前端通用接口规范

随着前后端分离越来越普遍, 后端接口规范也就越来越重要了. 一套良好的接口规范可以提升工作效率, 减少沟通障碍.

通常我们都会采用 REST 方式来提供接口, 使用 [JSON](http://json.org) 来传输数据.

## 请求接口

接口 [Root Endpoint](https://developer.github.com/v3/#root-endpoint) 推荐为: `http://api.yourdomain.com`.

[向接口传递参数时](https://developer.github.com/v3/#parameters), 推荐在 HTTP 请求体中包含一个 JSON Object 作为接口的参数, 并设置 `Content-Type: application/json; charset=utf-8`. 如有少量参数可以补充到 URL query string.

例如

查询 VIP 用户的接口

```
POST /users?limit=10 HTTP/1.1
Content-Type: application/json; charset=utf-8

{
    "name": "hanmeimei",
    "vip": true
}
```

## 接口返回

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
data       | **业务数据**. 必须是任意 JSON 数据类型(number/string/boolean/object/array). 如果要表示日期数据, 推荐使用时间戳(简单暴力), 例如: `1458885313711`, 或者参考使用 [Date.prototype.toJSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON) 提供的 ISO 标准格式.
status     | **状态码**. 必须是 `>= 0` 的 JSON Number 整数. `0` 表示请求成功处理并返回. 这个字段可以省略, 省略时和为 `0` 时表示同一含义. `非 0` 表示发生错误时的错误码, 此时可以省略 `data` 字段, 也可以视情况给予 `statusInfo` 作为补充
statusInfo | **状态信息**. 必须是任意 JSON 数据类型.

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
    "statusInfo": "服务器正忙"
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

## 注意
* [Version](https://developer.github.com/v3/media/#request-specific-version "Accept: application/vnd.github.v3+json")
* 跨域
  - [CORS](https://developer.github.com/v3/#cross-origin-resource-sharing "Cross Origin Resource Sharing")
  - [JSONP](https://developer.github.com/v3/#json-p-callbacks)
* [避免中文乱码](http://blog.csdn.net/chaijunkun/article/details/8257209 "将中文等非 ASCII 字符转义为 \uFFFF 这样的 unicode 形式 | non-ASCII characters to be escaped as \uFFFF")

## 参考
* [E-JSON数据传输标准](https://github.com/ecomfe/spec/blob/master/e-json.md)
* [GitHub API](https://developer.github.com/v3/)
* [JSON API](http://jsonapi.org/)
* [JSON Schema](http://json-schema.org/ "describes your JSON data format")
* [最佳实践：更好的设计你的 REST API](http://www.ibm.com/developerworks/cn/web/1103_chenyan_restapi)
