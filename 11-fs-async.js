//비동기식 async = 콜백함수를 만들어야한다.
//buffer 값을 utf-8로 바꿔줘야한다.
//코드가 더럽지만 잘 활용하면 더 큰 작업을 하는데 용이하므로  async awit사용한다
const {readFile, writeFile} = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf-8',(err, result) => {
  if(err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile('./content/second.txt', 'utf-8',(err, result) => {
  if(err) {
    console.log(err);
    return;
  }
  const second = result;
  writeFile('./content/result-async.txt',
  `Here is the result : ${first}, ${second}`,
  (err, result) => {
    if (err) {
      console.log(err)
      return;
    }
    console.log('done with this task');
  }
  )
  });
});
console.log('starting next task');