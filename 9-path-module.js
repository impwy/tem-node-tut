//path module
const path = require('path');

//console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt');
//console.log(filePath);

//basename : path마지막 portion 반환

const base = path.basename(filePath);
//console.log(base)

//resolve __dirname을 활용하여 파일의 글로벌 저장공간을 확인
//파일이 어디서 작동하는지 경로를 알수있음.
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);