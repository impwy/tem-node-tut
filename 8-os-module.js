//os module require('os)
const os = require('os');

// 현재 유저의 정보를 알수있다.
const user = os.userInfo()
console.log(user);

//시스템 가동 시간을 초단위로 반환함.
console.log(`The System Uptime is${os.uptime()} seconds`);


const currentOS = {
  name : os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem : os. freemem(),
}

console.log(currentOS);