# 前端架构
如何构建可以支撑高并发/高流量/易扩展的网站

如果是中小型产品, 可以考虑直接使用 BAAS 类服务, 妈妈再也不用担心我的架构问题了, 他们已经提供了一系列便于扩展的服务, 例如: (文件)存储服务, 数据(库)服务, 推送服务等等
* [LeanCloud  后端云服务](https://leancloud.cn)
* [Bmob 后端云服务](http://www.bmob.cn/)
* [APICloud](http://apicloud.com/)
* [Parse](https://parse.com/)
* [Firebase](https://www.firebase.com/)

## 设计要点
* 共享 Session (a shared session store)
    
    去除服务器的单点 Session, 使用共享 Session 模式来集中存放Web Session(例如放在分布式缓存中), 这样才能有效地使用负载均衡来进行横向扩展
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

[StackExchange performance](http://stackexchange.com/performance)
* 670 MILLION PV/month
* 9 WEB SERVERS / 300 REQ /S
* 4 SQL SERVERS
* 2 REDIS SERVERS
* 2 HAPROXY SERVERS

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

    > 随着互联网的发展，网站应用的规模不断扩大，常规的垂直应用架构已无法应对，分布式服务架构以及流动计算架构势在必行，亟需一个治理系统确保架构有条不紊的演进。
    > ![Dubbo Architecture Roadmap](http://dubbo.io/dubbo-architecture-roadmap.jpg-version=1&modificationDate=1331143666000.jpg)
    > 
    > * 单一应用架构
    >    * 当网站流量很小时，只需一个应用，将所有功能都部署在一起，以减少部署节点和成本。
    >    * 此时，用于简化增删改查工作量的 数据访问框架(ORM) 是关键。
    > * 垂直应用架构
    >    * 当访问量逐渐增大，单一应用增加机器带来的加速度越来越小，将应用拆成互不相干的几个应用，以提升效率。
    >    * 此时，用于加速前端页面开发的 Web框架(MVC) 是关键。
    > * 分布式服务架构
    >    * 当垂直应用越来越多，应用之间交互不可避免，将核心业务抽取出来，作为独立的服务，逐渐形成稳定的服务中心，使前端应用能更快速的响应多变的市场需求。
    >    * 此时，用于提高业务复用及整合的 分布式服务框架(RPC) 是关键。
    > * 流动计算架构
    >    * 当服务越来越多，容量的评估，小服务资源的浪费等问题逐渐显现，此时需增加一个调度中心基于访问压力实时管理集群容量，提高集群利用率。
    >    * 此时，用于提高机器利用率的 资源调度和治理中心(SOA) 是关键。

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
* [阿里中间件团队博客](http://jm.taobao.org/)
* [All Things Distributed](http://www.allthingsdistributed.com/)
Werner Vogels'(CTO - Amazon.com) weblog on building scalable and robust distributed systems.
