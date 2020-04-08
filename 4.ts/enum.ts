// 枚举类型

function getResult(status:number) {
  if (status === Status.OFFLINE){
    return 'offline'
  } else if (status === Status.ONLINE) {
    return 'online';
  } else if (status === Status.DELETED) {
    return 'deleted'
  }
  return 'error'
}

// const Status = {
//   OFFLINE:0,
//   ONLINE:1,
//   DELETED:2,
// }
// 优化
enum Status {
  OFFLINE = 1, // 默认 0 设置为1，后面默认为2、3
  ONLINE, // 1 设置为5 ，那么就是0、4、5
  DELETED, // 2
}
console.log(getResult(0)); // offline


// 进行反查
// Status[0] -> OFFLINE
// OFFLINE = 1 Status[0] -> undefined

// 场景问题 
// 固定的值  getResult(1)  OFFLINE = 1
