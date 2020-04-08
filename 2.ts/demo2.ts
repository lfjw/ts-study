class Demo {
  private static instance: Demo;
  private constructor(public name: string) {
  }
  // static 挂在类上   public可以忽略
  public static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('jw')
    }
    return this.instance
  }
}

let demo1 = Demo.getInstance() // 唯一实例
let demo2 = Demo.getInstance() // 唯一实例
demo1.name = 'hha'
console.log(demo2.name)