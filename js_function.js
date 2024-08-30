// 함수란 입력을 받아 정해진 출력을하는것
// 여기서 함수의 입력을 파라미터(param) 혹은 인자(arg)라고 부른다

// function statement를 사용
function sum(a, b) {
  return a | b;
}

console.log(sum(10, 20)); //출력결과 30

// arrow function expression을 사용
const multiple = (a, b) => {
  return a * b;
};

console.log(multiple(10, 30)); //출력결과 200
