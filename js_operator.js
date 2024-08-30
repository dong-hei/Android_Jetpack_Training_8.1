// 연산을 하기위해 사용하는 기호를 연산자(operator)라고 한다.

//대입 연산자

let a = 10;
let b = 20;

console.log(a); // 출력결과 10
console.log(b); // 출력결과 20

//사칙 연산자 - 산술연산자

let aa = 2;
let bb = 4;

console.log(a + b); //6
console.log(a - b); //-2
console.log(a * b); //8
console.log(a / b); //0.5
console.log(a % b); //2
console.log(a ** b); //16, 두번곱함

// 대입연산자

let aaa = 2;
let bbb = 4;

aaa += bbb; // a = a + b
console.log(aaa); //출력결과 6

aaa -= bbb; // a = a - b
console.log(aaa); //출력결과 2

aaa *= bbb; // a = a * b
console.log(aaa); //출력결과 8

aaa /= bbb; // a = a /b
console.log(aaa); // 출력결과 2

// 증감연산자
// postfix 방식 (뒤에 붙인다) : a++
// prefix 방식 (앞에 붙인다): ++a

let ap = 1;
let bp = ap++; // bp 변수에 1이 대입되고 그다음에 ap 변수에 1이 증가되서 2가 된다.

console.log(ap, bp); //출력결과 2, 1

let cp = 1;
let dp = ++cp; // cp 값을 1 증가시킨 2의 값을 dp 에 대입하고 cp는 증가된값인 2로 대입된다.

console.log(cp, dp); //출력결과 2, 2

//관계연산자 <. > , <=, >=

let ar = 1;
let br = 2;

console.log(ar < br); //출력결과 false
console.log(ar > br); //출력결과 true
console.log(ar <= br); //출력결과 true
console.log(ar >= br); //출력결과 false

//동등연산자 (변수가 같은지 다른지 비교하기 위함)
// a == b a와 b가 같다
// a != b a와 b가 다르다

let ac = 1;
let bc = '1';

console.log(ac == bc); //출력결과 true
console.log(ac != bc); //출력결과 false

//일치연산자 (엄격하게 자료형도 동일한지 비교하기 위함)
// a === b (a와 b의 값과 자료형이 모두 같다)
// a !== b (a와 b의 값이나 자료형이 같지 않다.)

console.log(ac === bc); //출력결과 false
console.log(ac !== bc); //출력결과 true

//이진 논리 연산자 (true, false 구분하기 위함)
//a&&b a와b가 모두 true일경우에만 true
//a||b a와b 둘 둘중 하나가 true일 경우에 true

let atf = true;
let btf = false;

console.log(atf && btf); // false
console.log(atf || btf); // true

//조건 연산자 (조건에 따라 결과가 둘로 나뉨, = 삼항연산자)
//조건식 ? true일경우에 : false일경우에

let at = true;
let bt = false;

console.log(at ? 1 : 2); //출력결과 1
console.log(at ? 1 : 2); //출력결과 2
