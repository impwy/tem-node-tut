//exports 하지 않아도 함수를 선언하면 다른 파일에서 쓸 수 있다.
const num1 = 5;
const num2 = 10;

function addValuse() {
  console.log(`the sum is : ${num1+num2}`);
};

//함수선언
addValuse();