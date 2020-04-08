## 2020-4-8  周三

## 爬虫功能

```sh

npm init -y

tsc --init

# 全局或者项目
npm install -D ts-node 
# 全局或者项目
npm install -D typescript
# SuperAgent是一个轻量级、灵活的、易读的、低学习曲线的客户端请求代理模块，使用在NodeJS环境中。
npm install superagent -S
# ts翻译文件
npm install @types/superagent -D
# cheerio是jquery核心功能的一个快速灵活而又简洁的实现，主要是为了用在服务器端需要对DOM进行操作的地方
npm install cheerio -S
# 翻译文件 
npm install @types/cheerio -D
```


## .d.ts 作用

- 帮助ts 识别js
- 识别其中的类型 接口
- 翻译文件通常会 @types/xxx 相应的翻译文件
- 帮助ts解析js


## 设计模式

- 由于有类型的后端语言，可以使用更多的设计模式


## 转成js

- 提供给别人使用，而不是源码

- 那么修改，tsconfig.json

```json
{
  "outDir": "./build", // tsc 后 输出到outDir 
}
```


## 编译进一步理解,掌握工具
- 自动执行
```json
{
  "watch":"tsc -w"
}
```
- 自动运行 修改/build/crawler.js会运行，改变.ts文件，不会运行，需要修改一些配置
```json
{
  "start": "nodemon node ./build/crawler.js"
}
// 此时会一直执行 应为data 有变化所以会导致一个死循环，需要忽略一些文件
{
  "nodemonConfig": {
    "ignore": [
      "data/*"
    ]
  }
}

// nodemon 不会检测ts 
```


- 总结：
  - 先执行npm run watch
  - 在执行npm run start


- 如何一个命令执行两个命令呢

  - npm install concurrently -D
```json
{
    "dev:watch": "tsc -w",
    "dev:start": "nodemon node ./build/crawler.js",
    "serve": "concurrently npm:dev:*",
}
```