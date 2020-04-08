
- 2020-4-8  周三

##  typescript定义
- javascript超集，es6就是es5的超集
- 拥有静态类型
- 浏览器不识别，需要转变


## ts优势是什么
- 异常提示，更好的错误提示
- 智能提示，结合vscode
- 代码阅读


## ts基础环境 编辑器
- 首选项-设置-输入quote-可以编辑typescript格式单引号还是双引号
  - 此时保存，不会变为单引号，这时候保存需要使用prettier来格式化
  - 如果不对，搜索save进行编辑
- 首选项-设置-tab 缩进 - 2

## ts基础搭建
- 安装npm install -g typescript
  - tsc -v 查看版本号
  - tsc xx.ts 意思是 typescript compile 某某ts文件代码
  - 不能直接运行node xx.ts 来运行文件，需要安装ts-node

- 全局安装npm install -g ts-node 
  - ts-node -v
  - ts-node xx.ts 来直接运行文件

## 静态类型 

- 判断变量属性的内容是什么

```ts
const count:number = 2020 
// count.   编辑器会提示number的方法

// Point的类型
interface Point {
  x: number,
  y: number
}

const point: Point {
  x: 3,
  y: 4
}
// point.  编辑器会提示x y 两个属性


const a;
// a.  编辑器不会进行语法提示
```

## 基础类型
- number 
- string 
- null
- undefined 
- symbol
- boolean 
- void 
```ts
const a : number = 2
const b : string = '1'
```

## 对象类型

```ts
// 1 对象
const teacher : {
  name: string,
  age: number
} = {
  name: 'jw',
  age: 18
}
// 2 数组类型
const arr : number[] = [1,2,3]
// 3 类类型
class Person {
}
const dell : Person = new Person()  // 对象类型是类 dell是一个Person 类对应的对象

// 4 函数 返回值是number
const getTotal: () => number = () =>  {
  return 123 
}
```

## 类型注解、类型推断
- 类型注解,我们告诉ts变量是什么类型 
- 类型推断,ts能够自动分析变量类型
- ts能推断的就让它推断，不能推断的咱们告诉他们

```ts
// 1 类型注解
let count: number;
count = 123; // 

// 2 类型推断
let countInference = 123;
// 鼠标、光标放到countInference 会推断是数字类型

// 3
// 此时ts不能推断first second
// 此时需要类型注解
function getTotal(first: number, second: number){
  return first + second
}
const total = getTotal(1,2)
// total : number 不需要加类型注解了，因为ts能推断出是number
// 但是真实项目中建议写上，更加严谨

```

## 函数相关类型
```ts
// 1 定义
function hello(){}
const hello1 = function (){}
const hello2 = () => {}



// 2
function add (first: number, second: number):number {
  return first + second
};
const total = add(1,2);

// 3
// 函数返回值是void类型 空，没有返回值
function sayHello():void {
  console.log('hello')
  // return '' 此时会报错
}

// 4 never类型
// 这个函数永远不会执行到最后
// 永远不会执行到123
function errorEmitter() :never {
  throw new Error()
  console.log(123)
}

// 永远不会执行完
function errorEmitter() :never {
  while(true){}
}


// 5 解构的语法如何给类型
function add({first, second} : {first: number, second: number}){
  return first + second
}
// function add({first: number, second: number}){} 会报错
const total = add({first:1, second:2})


// 6 解构类型
function getNumber({first} : {first: number}){
  return first
}
// function getNumber({first: number}){}   错误
const count = getNumber({first:1})

```


## 基础语法复习
```ts
// 基础类型 boolean number string void undefined symbol null
// 1 一行写的话，ts可以推断出类型,此时推断不出来any
let count;
count = 123;


// 对象类型 {} class function []
// 第一种方法
const func = (str:string):number => {
  return parseInt(str,10);
}
// 第二种方法
// 定义类型
// const func: (str:string) => number
// :冒号后面跟着是类型
// = 等号是函数体
const func: (str:string) => number = () => {
  return parseInt(str,10);
}

// 2 
interface Person{
  name: string
}
const rawData = '{"name":"jw"}'
const newData: Person = JSON.parse(rawData)
// 内置函数JSON.parse不能推断出


// 3 
let temp:number = 123
temp = '456'
// 实际项目确实会变
let temp:number | string = 123
temp = '456'


```



## 数组和元组

- 数组
```ts
const numberArr = [1,2,3]
// ts可以类型推断

// 也可以类型注解
const numberArr: number[] = [1,2,3]

const numberArr: (number | string) [] = [1,2,'3']

const stringArr: string[] = ['a', 'b','c']

const undefinedArr: undefined[] = [undefined, undefined];

```

- 类型别名
```ts
const objArr: {
  name: string,
  age: number
}[] = [
  {name: 'jw', age: 10}
]
// 比较难懂改造
type User = {
  name: string,
  age: number
}
const objArr: User[] = [
  {name: 'jw', age: 10}
]
```

```ts
class Teacher {
  name: string,
  age: number
}

const objarr : Teacher[] = {
  new Teacher(),
  {
    name: 'jw',
    age: 10
  }
}
```

- 元组 tuple

```ts
const teacherInfo = ['jw', 'boy', 20]
// 鼠标划上去，ts类型推断 (number | string)[]

// [3', 'boy', 20] 靠数组约束约束不住
// 第一项肯定是数字，此时需要靠元组
const teacherInfo: [string, string, number] = ['jw', '1', 19]

// csv
// jw a 10
// xq b 20

// [
//   ['jw', 'a', 10]
//   ['xq', 'b', 10]
// ]

const t :[string, string, number][] =[
  ['jw', 'a', 10]
  ['xq', 'b', 10]
]

```


## interface 接口

```ts
const getPersonName = (person) => {
  console.log(person.name)
}
const setPersonName = (person, name) => {
  person.name = name
}

// 如果person.name 是undefined就会报错，此时需要定义类型
const getPersonName = (person:{name:string}) => {
  console.log(person.name)
}
const setPersonName = (person:{name:string}, name: string) => {
  person.name = name
}

// 但是重复{name:string} 需要抽离出，通用

// 接口
interface Person{
  name: string;
}
const getPersonName = (person:Person) => {
  console.log(person.name)
}
const setPersonName = (person:Person, name: string) => {
  person.name = name
}

// 类型别名
type person1 = string;
type person1 = {
  name: string
}

```

- 类型别名和接口的区别
  - 相类似，但是不完全相同
  - type类型别名可以直接是string
  - 接口不能是基础类型
  - 能用接口就用接口，实在不行采用类型别名

```ts
// 1
interface Person {
  name: string;
  age: number;
}

const getPersonName = (person: Person) :void => {
  console.log(person.name)
}

const serPersonName = (person: Person ,name: string):void => {
  person.name = name
}

const person = {
  name: 'jw',
  age: 10
}
getPersonName(person)
serPersonName(person, 'jw')

// 如果age 可有可无还不想报错，怎么办
interface Person {
  name: string;
  age?: number;  // age属性可有可无
}

interface Person {
  readonly name: string; // 只能读，不能赋值
  age: number;  // age属性可有可无
}

// 2
// 缓存变量传递，则ts不会这么严格
const person = {
  name: 'jw',
  age: 10,
  sex: 'male'// 此时不会报错
}
// ts 会对字面量直接赋值 进行强校验
getPersonName({
  name: 'jw',
  age: 10,
  sex: 'male'// 此时会报错，进行[propName: string]添加
})
interface Person {
  name: string;
  age?: number; // age属性可有可无
  [propName: string] : any; // 属性的名字是字符串 
  say(): string; // 方法
}

const person = {
  name: 'jw',
  age: 10,
  sex: 'male',// 此时不会报错
  say() {
    return  'hello'
  }
}


// 3 使用类 implements
//User类应用Person接口  
// 要求类有接口的属性
class User implements Person {
  name = 'jw';
  say() {
    return 'hello'
  }
}


// 4 接口继承
interface Teacher extends Person {
  teach(): string
}

const person = {
  name: 'jw',
  age: 10,
  sex: 'male',// 此时不会报错
  say() {
    return  'hello'
  },
  teach() {
    return '111'
  }
}

// 5 接口除了属性、方法还可以定义函数,使用不是特别多
interface SayHi{
  (word: string): string // 定义函数的类型声明
}

const say:SayHi = (word: string) => {
  return word
}
```

- tsc --init 
  - tsc xx.ts
  - 接口就是ts 开发会给予开发者提示，语法校验的工具
  - 编译后ts会把接口剔除掉


## 类
- 类
```ts
class Person {
  name = 'jw'
  getName() {
    return this.name
  }
}
const person = new Person()
console.log(person.getName())
```
- 继承
```ts
class Teacher extends Person{
  getTeacherName(){
    return 'Teacher'
  }
}
// Teacher也会有getName方法
```

- 重写
```ts
class Teacher extends Person{
  getTeacherName(){
    return 'Teacher'
  }
  getName() {
    return 'new'
  }
}
// 子类的getName把父类的覆盖掉了
```

- super
  - 应用场景：类覆盖掉，还想调用父类的方法，可以使用super来调用

```ts
class Teacher extends Person{
  getTeacherName(){
    return 'Teacher'
  }
  getName() {
    return super.getName() + '- new'
  }
}
```

## 类访问类型和构造器

- public 允许在类内外被调用,默认隐藏
- private 允许在类内被使用
- protected 允许在类内以及继承的子类中使用

```ts
class Person {
  public name: string; // 默认隐藏public
  private age : number; // 只能在类内使用
  protected a : number;
  say() {
    this.name // name 属性 类的内部
    console.log('say')
  }
}
class Teacher extends Person {
  public sayHi() {
    this.a //  因为protected，可以使用
    this.age // 报错
  }
}
const person = new Person();
person.name = 'jw' // Person的实例

```

- constructor
```ts
class Person {
  public name: string;
  // new的时候，会被执行
  constructor(name: string) {
    this.name = name;
  }
}
// 初始化类
const person = new Person('jw')

//简化写法
class Person {
  constructor(public name: string) {}
  // public等价于 声明和赋值
}
const person = new Person('jw')
```

```ts
class Person {
  constructor(public name: string){}
}
class Teacher extends Person  {
  // 子类构造器 super() 调用父类的构造函数
  constructor(age: number){
    super('jw') // 赋值
  }
  say(){
    this.name // 继承
  }
}
const teacher = new Teacher(28)
teacher.name
teacher.age
```

## 静态属性 Setter Getter

```ts
class Person {
  constructor(private _name: string){}
  // getName属性
  get name() {
    // 调用私有属性
    return this._name + ' dd'
  }
  set name(name: string) {
    this._name = name
  }
}
const person = new Person('jw');
// person._name // 获取不到
person.name // 则可以获取到
person.name = 'jw' 

// 保护私有属性
```

- 单例模式
  - 类只允许通过这个类获取一个这个类的实例
```js
class Demo {
  private static instance :Demo;
  private constructor(public name: string){
  }
  // static 挂在类上   public可以忽略
  public static getInstance() {
    if(!this.instance){
      this.instance = new Demo('jw')
    }
    return this.instance
  }
}

const demo1 = new Demo()
const demo2 = new Demo()
// 禁止通过new 创建实例

const demo1 = Demo.getInstance() // 唯一实例
const demo2 = Demo.getInstance() // 唯一实例
console.log(demo1.name)
```


## 抽象类

- readonly

```ts
class Person {
  private _name : string
  constructor(public name: string){
    this._name = name
  }
  get name() {
    return this._name
  }
}
const person = new Person('jw')
console.log(person.name)
// 只能读取不能设置 person.name = 'zs'


// 第二种写法
class Person {
  public readonly name : string
  constructor(name: string){
    this.name = name
  }
}
```


- 抽象类
  - 抽象类只能被继承
```ts
class Circle{
  // 获取面积
  getArea(){

  }
}

class Square{
  // 获取面积
  getArea(){

  }
}

//上面都有面积 抽象类
abstract class Gemo{
  width: number;
  // 具体方法实现
  getName() {
    return 'jw'
  }
  //方法加abstract 此方法具体是抽象的
  abstract getArea(): number;
}

class Circle extends Gemo{
  // 如果有抽象方法，则必须实现 不然会报错
  getArea() {
    return 123
  }
}

```

- 接口

```ts
interface Teacher {
  name: string;
  teachAge: number;
}
interface Student {
  name: string;
  age: number;
}

const teacher = {
  name: 'jw',
  teachAge: 3 // 三年经验
}
const student = {
  name: 'zs',
  age: 18
}

const getUserInfo = (user: Teacher| Student) => {
  console.log(user.name)
}
getUserInfo(teacher)
getUserInfo(student)


// 改造 --- 
// 多个职业怎么办，，，
// 接口提炼
interface Person {
  name: string;
}
interface Teacher extends Person {
  teachAge: number;
}
interface Student extends Person {
  age: number;
}
const getUserInfo = (user: Person) => {
  console.log(user.name)
}
```