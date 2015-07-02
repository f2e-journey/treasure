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
* [Cobar](https://github.com/alibaba/cobar)

    > Cobar是提供关系型数据库（MySQL）分布式服务的中间件，它可以让传统的数据库得到良好的线性扩展，并看上去还是一个数据库,对应用保持透明。
    > * 产品在阿里巴巴稳定运行3年以上
    > * 接管了3000+个MySQL数据库的schema
    > * 集群日处理在线SQL请求50亿次以上
    > * 集群日处理在线数据流量TB级别以上
* [OceanBase](https://github.com/alibaba/oceanbase/)

    OceanBase是阿里巴巴集团自主研发的可扩展的关系型数据库，实现了跨行跨表的事务，支持数千亿条记录、数百TB数据上的SQL操作
* [mdrill](https://github.com/alibaba/mdrill)
    
    for千亿数据即席分析
* [阿里核心系统团队博客](http://csrd.aliapp.com/)
