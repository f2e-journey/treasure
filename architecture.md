# 前端架构
如何构建可以支撑高并发/高流量/易扩展的网站

## 设计要点
* 负载均衡
* 静态(HTTP)服务器
* 缓存
* CDN(后期租用)
* 数据库(偏后端)

## 技术实现
* 负责均衡/静态(HTTP)服务器
    [Nginx]()
    [Squid]()
    [Varnish]()
    [HAproxy]()
* 缓存
    [Memcache]()
    [Redis]()

## 淘宝系
* [Tengine](http://tengine.taobao.org/)
    It is based on the Nginx HTTP server and has many advanced features.
* [LVS](https://github.com/alibaba/LVS)
* [Tair](https://github.com/alibaba/tair)
    A distributed key-value storage system
* [Dubbo](https://github.com/alibaba/dubbo) 服务化框架
* [TFS](https://tfs.taobao.org) + [nginx-tfs](https://github.com/alibaba/nginx-tfs)HTTP RESTful TFS客户端
* [阿里核心系统团队博客](http://csrd.aliapp.com/)
