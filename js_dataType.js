//자료형 : Data Type
//일반적인 프로그래밍언어는 변수를 선언하는 시점에 자료형이 결정된다
//JS경우는 변수에 데이터가 대입되는 시점에 자료형이 결정된다 (동적인 시점에 결정되는 이 케이스를 Dynamic Typing 이라고 한다.)

// Number Type
let n1 = 1234;
let n2 = 5.678;

// String type
let s1 = 'hello';
let s2 = 'nice';

// Boolean type
let b1 = true;
let b2 = false;

// Null type : 값이 정의는 되었는데 Null인 상태
let n = null;

// Undefined type : 값이 정의 되지 않은 상태
let u1;
let u2 = undefined;

// Array type : index 값을 가진다 (0부터 시작)
let arr1 = [1, 2, 3, 4];
let arr2 = [true, 5, undefined, false, 'h', 7, null, 'i'];
console.log(arr1[0]); // 출력결과 1
console.log(arr2[3]); // 출력결과 false

// Object type
let obj = { a: 'apple', b: 'banana', c: 'car' };
let obj2 = { a: 'hello', b: 111, c: [11, 22, 33, 44] };

// 값으롣 사용할수 있다
let obj3 = {
  a: { a1: 1, a2: 2 },
  b: { b1: 21, b2: 22 },
  c: { c1: 31, c2: 32 },
};

console.log(obj2['c']); // 출력결과 [11, 22, 33, 44]
console.log(obj3.c.c1); // 출력결과 31
