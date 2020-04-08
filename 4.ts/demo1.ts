
// 解决联合类型的问题  animal.bark才会报错
// 使用类型保护的方式去解决问题

// 联合类型 只会取共有的属性,不会进行语法提示

interface Bird {
  fly: boolean;
  sing: () => {};
}
interface Dog {
  fly: boolean;
  bark: () => {};
}
// 类型断言的方式 进行类型保护
function trainAnimal(animal: Bird | Dog ) {
  if(animal.fly){
    // animal.sing() // 类型“Bird | Dog”上不存在属性“sing”。
    (animal as Bird).sing() 
  }
  (animal as Dog).bark()
}

// in 语法来做类型保护
function trainAnimal1(animal: Bird | Dog) {
  if ('sing' in animal) {
    // animal.sing() // 类型“Bird | Dog”上不存在属性“sing”。
    animal.sing()
  }else{
    animal.bark()
  }
}

// typeof  语法来做类型保护
function add(first:string | number, second: string | number) {
  // 运算符“+”不能应用于类型“string | number”和“string | number”
  //return first + second 
  if(typeof first === 'string' || typeof second === 'string'){
    return `${first}${second}`;
  }
  return first + second
}


// instanceof 语法来做类型保护 
// 数据结构使用class类定义，才能使用instanceof操作符
class NumberObj {
  public ddd!: number;
}
function add1(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj){
    return first.ddd + second.ddd
  }
  return 0
}

