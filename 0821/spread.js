// 스프레드 연산자 ... 전개 연산자
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };

// 함수 호출시 이용
function f1(a, b, c) {
  console.log(a, b, c);
}

f1(...arr1);

// rest 매개변수(나머지)
function f2(...rest) {
  console.log(rest);
}

f2(1, 2, 3, 4, 5, 6);

function f3(param, ...rest) {
  console.log(param);
  console.log(rest);
}

f3(1, 2, 3, 4, 5, 6);

// 나머지 매개변수는 반드시, 마지막에 사용되어야 한다.