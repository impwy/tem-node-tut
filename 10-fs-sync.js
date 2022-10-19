//동기식 sync

// const fs = require('fs'); fs.readFileSync 두개는 같다.
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
//다른 파일 불러오기
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);
//끝

//다른곳에 파일 만들기
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag : 'a'} //내용 복사
  );
//끝

console.log('done with this task');
console.log('starting the next one');
