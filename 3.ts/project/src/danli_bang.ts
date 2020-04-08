/**
 * 创业邦数据
 * 改成单例模式
 *  不被外部实例化
 */

import cheerio from 'cheerio';
import fs from 'fs';
import { TBang } from './crawler';


interface Arr {
  title: string;
  des: string;
  form: string;
  time: string;
}

interface Result {
  time: number,
  data: Arr[] //Arr 数组
}

interface Content {
  [propName: number]: Arr[];
}

// 继承这个接口TBang   analyze这个方法
export default class Bang implements TBang {
  // static instance: Bang // static 类的属性
  private static instance: Bang; // 私有属性

  static getInstance() {
    if (!Bang.instance){
      Bang.instance = new Bang()
    }
    return Bang.instance
  }


  private getInfo(html: string) {
    const $ = cheerio.load(html)
    const items = $('.lfn-bar');
    let arr: Arr[] = [];
    items.map((index, element) => {
      const title = $(element).find('.lfn-title').find('a').text();
      const des = $(element).find('.lfn-des').text().trim();
      const form = $(element).find('.lfn-info').find('.info-left').find('.form').text();
      const time = $(element).find('.lfn-info').find('.info-left').find('.time').text();
      arr.push({
        title,
        des,
        form,
        time,
      })
    })
    const result = {
      time: new Date().getTime(),
      data: arr
    }
    return result;
  }

  // 取内容
  private generateJsonContent(result: Result, filePath: string) {
    let fileContent: Content = {}; // data储存格式
    // 文件存在读取内容
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    fileContent[result.time] = result.data
    return fileContent
  }

  // 分析
  public analyze(html: string, filePath: string) {
    const result = this.getInfo(html);
    const fileContent = this.generateJsonContent(result, filePath)
    return JSON.stringify(fileContent);
  }
  
  private constructor() {}

}