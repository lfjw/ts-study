"use strict";
/**
 * 创业邦数据
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
// 继承这个接口TBang   analyze这个方法
var Bang = /** @class */ (function () {
    function Bang() {
    }
    Bang.prototype.getInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var items = $('.lfn-bar');
        var arr = [];
        items.map(function (index, element) {
            var title = $(element).find('.lfn-title').find('a').text();
            var des = $(element).find('.lfn-des').text().trim();
            var form = $(element).find('.lfn-info').find('.info-left').find('.form').text();
            var time = $(element).find('.lfn-info').find('.info-left').find('.time').text();
            arr.push({
                title: title,
                des: des,
                form: form,
                time: time,
            });
        });
        var result = {
            time: new Date().getTime(),
            data: arr
        };
        return result;
    };
    // 取内容
    Bang.prototype.generateJsonContent = function (result, filePath) {
        var fileContent = {}; // data储存格式
        // 文件存在读取内容
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[result.time] = result.data;
        return fileContent;
    };
    // 分析
    Bang.prototype.analyze = function (html, filePath) {
        var result = this.getInfo(html);
        var fileContent = this.generateJsonContent(result, filePath);
        return JSON.stringify(fileContent);
    };
    return Bang;
}());
exports.default = Bang;
