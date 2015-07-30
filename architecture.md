# 前端架构
如何构建可以支撑高并发/高流量/易扩展的网站

如果是中小型产品, 可以考虑直接使用BAAS类服务, 妈妈再也不用担心我的架构问题了, 他们已经提供了一系列便于扩展的服务.
例如文件服务, 数据(库)服务, 推送服务等等
* lean cloud
* bmob
* apicloud
* parse.com
* firebase

## 设计要点
* 共享 Session (a shared session store)
    去除服务器的单点 Session, 使用共享 Session 模式来集中存放Web Session(例如放在分布式缓存中), 这样才能有效地使用负载均衡来扩展
* 负载均衡 / 集群(cluster)
* 静态资源(HTTP)服务器 / CDN(后期租用)
* 缓存
* 数据库集群(偏后端)

参考 [Sails Scaling](http://sailsjs.org/documentation/concepts/deployment/scaling)

```
                    /  Sails.js server  \      /  Database (e.g. Mongo, Postgres, etc)
Load Balancer  <-->    Sails.js server    <-->    
                    \  Sails.js server  /      \  Session store (Redis)
                             ....
```

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
* [Cobar](https://github.com/alibaba/cobar)

    > Cobar是提供关系型数据库（MySQL）分布式服务的中间件，它可以让传统的数据库得到良好的线性扩展，并看上去还是一个数据库,对应用保持透明。
    > * 产品在阿里巴巴稳定运行3年以上
    > * 接管了3000+个MySQL数据库的schema
    > * 集群日处理在线SQL请求50亿次以上
    > * 集群日处理在线数据流量TB级别以上

  Cobar话说已经停止开发了? 现在使用基于 Cobar 的 [MyCAT](https://github.com/MyCATApache/Mycat-doc)

* [OceanBase](https://github.com/alibaba/oceanbase/)

    OceanBase是阿里巴巴集团自主研发的可扩展的关系型数据库，实现了跨行跨表的事务，支持数千亿条记录、数百TB数据上的SQL操作
* [mdrill](https://github.com/alibaba/mdrill)
    
    for千亿数据即席分析
* [阿里核心系统团队博客](http://csrd.aliapp.com/)
