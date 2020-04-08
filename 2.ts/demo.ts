// 静态类型
let b: number = 1;
b = 2;


interface Point { x: number, y: number }

// 勾股定理
function tsDemo(data: Point) {
  //data.x 输入data 会自动提示编辑器提示
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}
// 不传递参数就会报错
// tsDemo() // An argument for 'data' was not provided.
tsDemo({ x: 3, y: 4 })
