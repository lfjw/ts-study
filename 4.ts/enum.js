// 枚举类型
// const Status = {
//   OFFLINE:0,
//   ONLINE:1,
//   DELETED:2,
// }
function getResult(status) {
    if (status === Status.OFFLINE) {
        return 'offline';
    }
    else if (status === Status.ONLINE) {
        return 'online';
    }
    else if (status === Status.DELETED) {
        return 'deleted';
    }
    return 'error';
}
// 优化
var Status;
(function (Status) {
    Status[Status["OFFLINE"] = 0] = "OFFLINE";
    Status[Status["ONLINE"] = 1] = "ONLINE";
    Status[Status["DELETED"] = 2] = "DELETED";
})(Status || (Status = {}));
console.log(getResult(0));
