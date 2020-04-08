// 类中使用泛型
class DataManager {
  constructor(private data: string|string[]){}
  getItem(index:number):string|number{
    return this.data[index]
  }
}
const data = new DataManager(['1']);
console.log(data.getItem(0));

// 1、假设data 其他类型的数组，联合类型很麻烦，使用泛型
class DataManager1<T> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index]
  }
}
const data1 = new DataManager1<string>(['1']);
console.log(data1.getItem(0));


// 2、读取data.name属性
interface Item2 {
  name: string
}
// 泛型T继承Item2
class DataManager2<T extends Item2> {
  constructor(private data: T[]) { }
  getItem(index: number): string {
    return this.data[index].name
  }
}
const data2 = new DataManager2([{name:'jw'}]);
console.log(data2.getItem(0));


// 3 此时泛型T指向Test3，我只想是number或者string，怎么办
interface Test3 {
  name: string
}
class DataManager3<T extends number | string> {
  constructor(private data: T[]) { }
  getItem(index: number): T {
    return this.data[index]
  }
}
// const data3 = new DataManager3<Test3>([]); 异常
const data3 = new DataManager3<number>([]);
console.log(data3.getItem(0));


// 4、泛型声明类型, 使用泛型如何作为一个具体的类型注解
// const func: () => string 返回类型
function hello<T>(params: T){
  return params
}
const func:<T> (params: T) => T = hello
// const func:<T> () => string = <T>() => {
//   return '123'
// }
