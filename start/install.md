# RW-HPS Start Server

## A.基本配置要求

### 1.JVM 环境要求

*   JVM：最低版本： ~~Java 8(因为HPS架构升级，现已不再可用)~~ JAVA 21(及以上)

### 2.如何获取JDK?

> 您需要下载 JDK21以获得：

|      系统版本      | 下载链接：                                                                                                            |
| :------------: | :--------------------------------------------------------------------------------------------------------------- |
|   **Windows**  | [ORACLE JDK21 Windows x64 Installer](https://download.oracle.com/java/21/archive/jdk-21.0.2_windows-x64_bin.exe) |
| **Debian deb** | [ORACLE JDK21 x64 Debian Package](https://download.oracle.com/java/21/archive/jdk-21.0.2_linux-x64_bin.deb)      |

*   **Debian deb/Ubuntu**通过软件源安装

    > sudo apt-get update -y #更新软件源
    >
    > sudo apt-get install openjdk-21-jdk -y #安装JDK21

*   不建议使用**CentOS**运行， CentOS项目已于2021年12月31日停止，不再有官方支持。



## B.运行方案

### 下载编译好的服务端

通过 [Release](https://github.com/RW-HPS/RW-HPS/releases) 下载

### Windows 运行方法

*   1.在你喜欢的，能被你自己找到的任意地方新建一个文件夹，然后把下载好的**服务端文件**(**Server-All.jar**)扔进去。

*   2.在存放服务端的文件夹空白处按住Shift+右键鼠标，然后点击**在此处打开Powershell窗口**

*   3.键入以下指令:

```bash
java -Djava.net.preferIPv4Stack=true -Dfile.encoding=UTF-8 -jar Server-All.jar
# TODO:如果上面的命令执行后出现乱码或者无法执行，请使用下面的指令。
java -jar Server-All.jar
```

*   4.对于懒惰每次启动都要打开终端的人类，建议在存放服务端的根目录（对，没错就是你放Server-All.jar文件的文件夹）创建一个后缀为.bat的文件（比如start.bat）（啊对对对，就是你想的那样，建一个文本文档然后改个名字就完事了），在这个文件里写入上面的其中一条指令，过后每次启动只需要点击该文件就好了。

### Debian/Ubuntu运行方法

*   1.通过 wget 下载最新版本的服务端

```bash
wget https://github.com/RW-HPS/RW-HPS/releases/download/3.0.0-M5/Server-All.jar
```

*   2.通过`mv Server-All.jar <目标文件夹>`移动服务端到你喜欢的文件夹里面（如果不会就去百度或者群里问Dr，当然可能会被骂一顿🤣）

*   3.用和Windowss上一样的指令执行服务端：

```Shell
java -Djava.net.preferIPv4Stack=true -Dfile.encoding=UTF-8 -jar Server-All.jar
# TODO:如果乱码或者无法执行，请使用下面的指令。
java -jar Server-All.jar
```

对于懒惰每次启动都要输入那么长命令的人类，建议在存放服务端的根目录（对，没错就是你放Server-All.jar文件的文件夹）创建一个后缀为.sh的文件（比如start.sh）（啊对对对，不会就睡觉吧百度欢迎你😅），在这个文件里写入上面的其中一条指令，过后每次启动只需要点击该文件就好了。

## 3.手动编译最新的测试版本

### 我不知道Gradle如何使用请移步

1.需要安装Git Java21 Screen(或许可以使用你喜欢的保活方式)

### A.Ubuntu使用

```bash
sudo apt update
sudo apt-get install git openjdk-21-jdk screen -y  
```

2.同步存储库

> 根据个人喜好

```bash
HTTPS  
git clone https://github.com/RW-HPS/RW-HPS.git
```

```bash
SSH
git clone git@github.com:RW-HPS/RW-HPS.git  
```

3.开始编译最新版本 在命令行输入

```bash
./gradlew jar
```

等待完毕即可

4.使用\
在目录 `Server-All/build/libs` 下即可获得编译好的Server Jar

5.运行\
在你喜欢的目录下运行jar

```bash
java -Djava.net.preferIPv4Stack=true -jar Server.jar
```

但是这样会在SSH断开后被关闭 那么我们就使用上文的Screen

## 4.使用Screen

*   1.需要安装Screen(或许可以使用你喜欢的保活方式)

### Ubuntu使用

```bash
sudo apt update
sudo apt-get install screen -y  
```

```bash
screen -S 你喜欢的名字
cd Jar的目录下
java -Djava.net.preferIPv4Stack=true -Dfile.encoding=UTF-8 -jar Server.jar

# 退出使用Ctrl + A + D
#重进使用
screen -r 你设置的名字
#进不去使用 获取id
screen -ls
screen -r id
```

