## 定义
是一个数字货币生态系统

能做所有传统货币能做的事

点击[这里](https://live.blockcypher.com/btc/)查看BTC行情

传统交易：第三方中介例如微信/支付宝/金融机构（依赖信用）

BTC：利用密码学，点对点直接支付

如何不依赖第三方机构实现交易？

需要做到：不可回撤 / 设置新环境（第三方担保）以让交易可信 / 时间戳服务器按时间先后产生电子交易证明

## BTC系统

概念：

- 用户：通过密钥（私钥）打开账户 / 控制钱包（钱包就是存放密钥的地方）
    - 有矿工属性
    - 有账户属性
- 交易：每一笔交易被扩散到整个BTC网络
- 矿工
    - 提供挖矿选出神仙老王1

架构

## 技术实现

电子货币：实际上是一串数字签名，一条message代表一张钞票

非对称加密实际上是保证你的钱只有你能花出去，而不是你取出你的钱

操作

- 

[BTC地址是如何生成的](https://www.jianshu.com/p/954e143e97d2)

加密过程实际上就是函数调用，密码学算法的implement

[私钥/公钥/地址是什么](https://zhuanlan.zhihu.com/p/140316480)

```shell
openssl
```

最终得到一个btc地址，接入btc网站就可以进行交易

- 时间戳服务器
- 工作量证明 PoW
- p2p
- 激励
    - 发币奖励，从总的库中给
    - 交易费，实际上是提成
- 回收硬盘空间：丢弃之前交易的数据
    - Merkle tree

https://www.bilibili.com/video/BV15z411v7ob?spm_id_from=333.788.recommend_more_video.1&vd_source=b14909f255fe42946743657320d2f59a

## 相关网站

[比特币中国](https://www.btcchina.org)

[GitHub](https://github.com/bitcoin/bitcoin)

[源代码](https://dev.visucore.com/bitcoin/doxygen/files.html)

[比特币测试网（学习用）](https://live.blockcypher.com)

[比特币测试网（学习用）](https://blockcypher.com)

```shell
curl https://api.blockcypher.com/v1/btc/main
# 访问链的api
```

![alt text](image.png)

### bitcoin core客户端

每次打开都从别人那里同步过来所有区块（400多G……）一个block就是一个.ldb文件，大概2MB；

- 内存大：跑得快
- 硬盘大：容量大 4T的mac ￥4w
