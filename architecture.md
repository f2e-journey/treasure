# 前端架构
如何构建可以支撑高并发/高流量/易扩展的网站(Web site/Web App)

就好比现实世界的你开了一家小饭店, 不断地发展成大餐厅, 最后全国连锁, 经营范围慢慢扩大的过程.

现实生活中我们是如何解决这一扩张问题的? 是扩大门面? 是新招厨师? 又或是统一标准?

在计算机领域我们何尝不是用类似的手段来解决这些问题的, 例如纵向扩展(提升单台电脑的硬件)或横向扩展(集群: 增加更多的电脑)

关于架构的重点在于如何管理一个庞大的系统, 最终形成一副系统模块的拼图(接口与依赖)
* 低耦合高内聚(尽量模块化, 而且要减少依赖关系)
* 集群(事情变得越来越多, 一个人的能力始终是有极限的, 必须分摊给多个人)
* 负载均衡(人变得越来越多, 管理成本就会越来愈高, 有必要一个中间人来协调任务分配)
* 缓存(将压力分散开来)
* 拆分(系统变得越来越大, 必须拆分得更细才能更好的控制和管理, 限定边界, 将问题控制在内部)
* 队列(在高并发的阶段, 我们拥有的资源最终会遇到瓶颈, 大家规规矩矩的排队以确保正常的运作)
* 管控(管理和控制一个大型的协作系统)
* 监控(庞大的系统下往往隐藏着定时炸弹)

如果是中小型产品, 可以考虑直接使用 BAAS 类服务, 妈妈再也不用担心我的架构问题了, 他们已经提供了一系列便于扩展的服务, 例如: 数据存储服务("云"数据库), 文件存储服务("云"文件系统), 推送服务等等
* [LeanCloud 后端云服务](https://leancloud.cn)
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

* [StackExchange performance](http://stackexchange.com/performance)
    * 670 MILLION PV/month
    * 9 WEB SERVERS / 300 REQ /S
    * 4 SQL SERVERS
    * 2 REDIS SERVERS
    * 2 HAPROXY SERVERS

* [The Twelve-Factor App](http://12factor.net/zh_cn/)
> 如今，软件通常会作为一种服务来交付，它们被称为网络应用程序，或软件即服务（SaaS）。12-Factor 为构建如下的 SaaS 应用提供了方法论：
> * 使用标准化流程自动配置，从而使新的开发者花费最少的学习成本加入这个项目。
> * 和操作系统之间尽可能的划清界限，在各个系统中提供最大的可移植性。
> * 适合部署在现代的云计算平台，从而在服务器和系统管理方面节省资源。
> * 将开发环境和生产环境的差异降至最低，并使用持续交付实施敏捷开发。
> * 可以在工具、架构和开发流程不发生明显变化的前提下实现扩展。
> 
> 这套理论适用于任意语言和后端服务（数据库、消息队列、缓存等）开发的应用程序。
>
> 1、基准代码 一份基准代码，多份部署
>
> 2、依赖 显式声明依赖关系
>
> 3、配置 在环境中存储配置
>
> 4、后端服务 把后端服务当作附加资源
>
> 5、构建，发布，运行 严格分离构建和运行
>
> 6、进程 以一个或多个无状态进程运行应用
>
> 7、端口绑定 通过端口绑定提供服务
>
> 8、并发 通过进程模型进行扩展
>
> 9、易处理 快速启动和优雅终止可最大化健壮性
>
> 10、开发环境与线上环境等价 尽可能的保持开发，预发布，线上环境相同
>
> 11、日志 把日志当作事件流
>
> 12、管理进程 后台管理任务当作一次性进程运行

## 技术实现
* 负责均衡/静态(HTTP)服务器
    [Nginx]()
    [Squid]()
    [Varnish]()
    [varnish-dashboard](https://github.com/brandonwamboldt/varnish-dashboard)
    [HAproxy]()
    [Camel](https://github.com/leonindy/camel "a soft load balance midware")
* 缓存
    [Memcache]()
    [Redis]()
    [搜狐视频Redis私有云平台](https://github.com/sohutv/cachecloud)
* [Elasticsearch](https://www.elastic.co/products/elasticsearch) Search & Analyze Data in Real Time Build on top of Apache Lucene
* [Open-Falcon](https://github.com/open-falcon/of-release) 互联网企业级监控系统解决方案
* [Mango](https://github.com/jfaster/mango/ "Mango SQL Mapper Framework for Java")
* [kingshard](https://github.com/flike/kingshard "A high-performance MySQL proxy")

  > 一个轻量级极速数据层访问框架。目前已有十多个大型线上项目在使用mango，在某一支付系统中，更是利用mango，承载了每秒12万的支付下单请求。
  > * 采用接口与注解的形式定义DAO，完美结合db与cache操作
  > * 轻量高效，具有和直接使用jdbc同样的响应速度
  > * 支持动态sql，可以构造任意复杂的sql语句
  > * 支持多数据源，分表，分库，事务
  > * 内嵌“函数式调用”功能，能将任意复杂的对象，映射到数据库的表中
  > * 高效详细的log统计，方便开发者随时了解自己的系统
  > * 超级人性化的异常提示，使用简单，学习成本低
  > * 独立jar包，不依赖其它jar包
  > * 提供便捷的spring插件，与spring无缝集成

* [Oceanus](https://github.com/58code/Oceanus)

  > 58同城数据库中间件

* [Ctrip DAL](https://github.com/ctripcorp/dal "Ctrip Database Access Layer")

  > Ctrip DAL支持流行的分库分表操作，支持Java和C#，支持Mysql和MS SqlServer

* [PhxSQL](https://github.com/tencent-wechat/phxsql)

  > 由微信后台团队自主研发的一款数据强一致、服务高可用的分布式数据库服务。PhxSQL提供Zookeeper级别的强一致和高可用，完全兼容MySQL。

* [disconf](https://github.com/knightliao/disconf/wiki/%E5%88%86%E5%B8%83%E5%BC%8F%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0Disconf)

  > Distributed Configuration Management Platform(分布式配置管理平台)
  > * 部署极其简单：同一个上线包，无须改动配置，即可在 多个环境中(RD/QA/PRODUCTION) 上线
  > * 部署动态化：更改配置，无需重新打包或重启，即可 实时生效
  > * 统一管理：提供web平台，统一管理 多个环境(RD/QA/PRODUCTION)、多个产品 的所有配置

* [Walle](https://github.com/meolu/walle-web)

  > web代码部署工具, 支持多项目、多环境一键部署上线，一键快速回滚

* [Pinpoint](https://github.com/naver/pinpoint)

  > Pinpoint is an open source APM (Application Performance Management) tool for large-scale distributed systems

* [light-task-scheduler](http://git.oschina.net/hugui/light-task-scheduler)

  > 分布式任务调度框架
* [uncode-schedule](http://git.oschina.net/uncode/uncode-schedule)

  > 基于zookeeper+quartz/spring task的分布式任务调度组件

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
    >
    > [Dubbo Monitor](http://git.oschina.net/handu/dubbo-monitor) 针对Dubbo开发的监控系统
* [TFS](https://tfs.taobao.org) + [nginx-tfs](https://github.com/alibaba/nginx-tfs)HTTP RESTful TFS客户端
* [Cobar](https://github.com/alibaba/cobar)

    > Cobar是提供关系型数据库（MySQL）分布式服务的中间件，它可以让传统的数据库得到良好的线性扩展，并看上去还是一个数据库,对应用保持透明。
    > * 产品在阿里巴巴稳定运行3年以上
    > * 接管了3000+个MySQL数据库的schema
    > * 集群日处理在线SQL请求50亿次以上
    > * 集群日处理在线数据流量TB级别以上

  Cobar话说已经停止开发了? 现在使用基于 Cobar 的 [MyCAT](https://github.com/MyCATApache/Mycat-doc), 类似的还有 [Qihoo360/Atlas](https://github.com/Qihoo360/Atlas "A high-performance and stable proxy for MySQL")

* [OceanBase](https://github.com/alibaba/oceanbase/)

    OceanBase是阿里巴巴集团自主研发的可扩展的关系型数据库，实现了跨行跨表的事务，支持数千亿条记录、数百TB数据上的SQL操作
* [mdrill](https://github.com/alibaba/mdrill)
    
    for千亿数据即席分析

* [阿里云OSS内网免费流量外网用，搭配CDN镜像，网站架构省钱提速的黑技能](http://www.tangshuang.net/2111.html)

  > 在OSS的收费策略中注明了：内网访问免费。也就是说，如果我们的使用阿里云的ECS通过内网去请求OSS中的资源，是不收费的。所以，我们现在要解决的问题就是，通过内网去请求的资源，怎么在外网中返回给访客呢？
  >
  > * 服务器和OSS Bucket必须在同一区域, 这是一个前提条件，也就是要构建“内网”这个组合
  > * nginx 做反向代理来访问 OSS
  >   
  >   ```
  >   http {
  >       server {
  >           location ~ .*\.(html|css|js|png|jpg|mp3|mp4|ovg)$ {
  >               proxy_pass  http://你的OSS地址.oss-cn-beijing-internal.aliyuncs.com;
  >           }
  >       }
  >   }
  >  ```

* [老庙黄金2016春晚抢红包活动技术架构详解](https://yq.aliyun.com/articles/7420 "基于阿里云的技术架构")
  
    > ![老庙黄金2016春晚抢红包活动技术架构](http://imgchr.com/images/2c550956ecc11f1a0b3788337191e28efb2b3743.png)
    > 
    > * **网络层**：DDoS防护、域名解析、CDN加速；
    > * **接入层**：主要是4层负载均衡SLB，将访问请求分发至后端服务器；
    > * **应用层**：将虚拟机ECS分为两个可用区A和B来提高系统整体可用性。OCS用于做数据缓存，MQS则通过消息队列方式将一些数据异步写入数据库。而所有服务器的日志都集中记录入SLS，为后续的数据分析做好准备，同时也方便日志的查找；
    > * **数据层**：由于单个RDS的性能有限，因此使用DRDS来组成一个RDS MySQL集群，将系统压力分担至多个RDS；ODPS则用来做最终的数据分析，比如用户量、访问量、用户行为等；
    > * **运维监控**：云监控和Zabbix结合来实现整个系统从云资源到应用到业务的监控。Ansible用于自动化部署；

* [虎嗅：四年覆盖9成互联网企业中高层的网站架构演变](https://yq.aliyun.com/articles/45426)

    > ![总结虎嗅整个架构思想](http://imgchr.com/images/193fd649126cbd062e916ac059e4171a2f04a652.png)
    > 
    > 总结虎嗅整个架构思想，从一开始到现在始终贯穿的就是解耦的思想。当你的业务不是非常稳定时，系统一定会存在巨大的变化，可能今天是这样，明天就会变一个样子，变化速度非常快。如果整个系统全部耦合在一起，就容易造成混乱，所以尽量去解耦。
    > 
    > 另外一点就是保持简单的结构，简单的结构给系统带来的好处就是能够使维护非常轻松。网站的维护成本以及开发人员的成本都会极大地降低。
    >
    > 第三个就是尽量使用云服务，这样可以整个地去减少维护成本。我们经常会遇到这样的情况，比如在公司里面，看到某些系统的维护成本比其开发成本要高很多，但是当使用云服务这些非业务核心的服务或者系统的时候，几乎不需要自己去维护，对成本的降低是非常可观的。

* [一种适合创业公司的技术架构方案](http://blog.12xiaoshi.com/2016/03/30/tech/normal_design_base_aliyun/)
  
  > ![SLB/ECS/Redis/OSS/CDN/MQ/RDS/ODPS](https://img.alicdn.com/imgextra/i4/102975691/TB2GutxmXXXXXcCXXXXXXXXXXXX-102975691.jpg)

## 参考
* [阿里核心系统团队博客](http://csrd.aliapp.com/)
* [阿里中间件团队博客](http://jm.taobao.org/)
* [All Things Distributed](http://www.allthingsdistributed.com/ "Werner Vogels'(CTO - Amazon.com) weblog on building scalable and robust distributed systems.")
* [公司开源导航页](http://www.oschina.net/company)
* [阿里云客户案例](https://www.aliyun.com/customer/)
* [阿里云解决方案](https://www.aliyun.com/solution/ecommerce)
