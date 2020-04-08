// 无法找到模块“superagent”的声明文件。
// ts 直接引用js 会异常
// ts -> .d.ts  翻译文件  -> js 
// 帮助ts 识别js
import superagent from 'superagent'
import fs from 'fs';
import path from 'path';
import Bang from './danli_bang';
import ThreeKr from './36kr';

export interface TBang{
  // 方法
  analyze: (html: string, filePath: string) => string; 
}

// 只关注数据存哪 写那 
class Crawler {
  // 私有属性
  private filePath = path.resolve(__dirname, '../data/data.json')

  private async getRawHtml() {
    const data = await superagent.get(this.url)
    return data.text;
  }

  // 初始化
  private async initSpiderProcess() {
    const html = await this.getRawHtml();
    this.writeFile(this.bang.analyze(html, this.filePath))
  }
  // 写内容
  private writeFile(fileContent: string) {
    fs.writeFileSync(this.filePath, fileContent)
  }
  constructor(private url: string, private bang: TBang) {
    this.initSpiderProcess()
  }
}

// 创业邦
const url = 'https://www.cyzone.cn/category/8/'
//const bang = new Bang(); // 类对应的实例 数据进行处理
const bang = Bang.getInstance(); // 单利模式
//const threeKr = new ThreeKr() // 直接返回html
const d = new Crawler(url, bang)

console.log(3);
