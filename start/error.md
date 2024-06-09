# RW-HPS运行的常见问题

### Q.1.:**corroding: nativePollOnce:100,0**

#### 此问题分析：如果长时间卡在这个位置, 那么就是缺少一些依赖包，或者版本跨度太大导致不兼容 ,因此你会遇到该错误

#### 解决策略：关闭服务器, 然后删掉图中的 `data` 文件夹, 再重新启动服务器

---

### Q.2.:**Error: A JNI error has occurred, please check your installation and try again**

#### 此问题分析：JDK版本低于11，本问题主要是 RW-HPS 使用 Java11 编译, 导致无法使用 Java8 运行

#### 解决策略：升级到JDK11,具体参考上面的JDK配置。正确的JDK11在你输入

```bash
java -version
```

显示下方的图即代表你已经成功升级到JDK21:

### Q.3.:**Not D!!!**

#### 问题分析：D的参数不被支持(可能是被.分割了) ，因此需要使用指令

```bash
java -D"file.encoding=UTF-8" -jar Server.jar
```

#### 解决策略：使用上方提供的指令

### Q.4.:**java.io.IOException: Prolem reading font data**

#### 问题分析：如果您使用的 Linux, 那么是缺少 Font 依赖

#### 解决策略：手动安装 `fontconfig`
  
**Ubuntu** : ```apt-get install fontconfig```
---