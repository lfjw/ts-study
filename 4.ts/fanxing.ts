// 泛型

function join(first: string | number, second : string | number) {
  return `${first}${second}`
}
// 场景 first为number ,second必须也为number
// 解决方式，使用泛型

// 接受一个类型ABC
function join1<ABC>(first: ABC, second: ABC) {
  return `${first}${second}`
}
join1<string>('1','2')
join1<number>(1, 2)

// 1
function map<ABC>(params:ABC) {}
map<string>('123')
// 2
function map1<ABC>(params: ABC[]) {}
map1<string>(['123'])
// 3
function map2<ABC>(params: Array<ABC>) {}
map2<string>(['123'])

// 通常使用T来简写
// function map<T>(params: T) { }
// map<string>('123')


// 第一个参数字符串，第二个数字
function join3<T,P>(first: T, second: P) {
  return `${first}${second}`
} 
join3<number, string>(1,'1')
join3(1, '1') // 类型推断出<number, string>


// 返回的结果是T 
function join4<T>(first: T, second: T):T {
  return first
} 