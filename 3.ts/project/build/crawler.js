"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 无法找到模块“superagent”的声明文件。
// ts 直接引用js 会异常
// ts -> .d.ts  翻译文件  -> js 
// 帮助ts 识别js
var superagent_1 = __importDefault(require("superagent"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var danli_bang_1 = __importDefault(require("./danli_bang"));
// 只关注数据存哪 写那 
var Crawler = /** @class */ (function () {
    function Crawler(url, bang) {
        this.url = url;
        this.bang = bang;
        // 私有属性
        this.filePath = path_1.default.resolve(__dirname, '../data/data.json');
        this.initSpiderProcess();
    }
    Crawler.prototype.getRawHtml = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, superagent_1.default.get(this.url)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.text];
                }
            });
        });
    };
    // 初始化
    Crawler.prototype.initSpiderProcess = function () {
        return __awaiter(this, void 0, void 0, function () {
            var html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRawHtml()];
                    case 1:
                        html = _a.sent();
                        this.writeFile(this.bang.analyze(html, this.filePath));
                        return [2 /*return*/];
                }
            });
        });
    };
    // 写内容
    Crawler.prototype.writeFile = function (fileContent) {
        fs_1.default.writeFileSync(this.filePath, fileContent);
    };
    return Crawler;
}());
// 创业邦
var url = 'https://www.cyzone.cn/category/8/';
//const bang = new Bang(); // 类对应的实例 数据进行处理
var bang = danli_bang_1.default.getInstance(); // 单利模式
//const threeKr = new ThreeKr() // 直接返回html
var d = new Crawler(url, bang);
console.log(3);
