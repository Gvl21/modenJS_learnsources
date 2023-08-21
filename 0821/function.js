// 호이스팅 hoisting

// 프로그램에서 함수 호출 코드가 함수 선언보다 위에 있음에도 불구하고, 선언코드가 위에 있는 것처럼 동작하는 기능

f1();
// 코드를 실행하기 전에 함수를 미리 찾아서 가장 먼저 생성한 다음 실행
function f1() {
  // 함수 선언 (위로 올라감 hoisting)
  console.log('hello');
}

f2(); // 함수 표현식으로 선언한 경우 호이스팅이 되지 않는다.(값으로 취급)

// 함수 표현식으로 선언, 함수를 변수에 저장
let f2 = function () {
  console.log('f2');
};

f2(); // 정상적으로 작동

// 콜백 함수
// 함수 표현식(함수를 변수로 저장하는 방법)에서 함수를 값으로 취급,
// 다른 함수의 매개변수의 인자로 전달

f6(f7); // 이것 또한 안됨
function f6(callback) {
  callback();
}
let f7 = function () {
  console.log('콜백함수입니다.');
};
f6(f7); // 함수가 매개변수로서 입력된다.

f6(f7()); // Bad Case : 매개변수 입력시 함수 로출을 하는 것이 아니라, 변수명으로 입력한다.

function repeat(count, callback) {
  for (let i = 0; i < count; count++) {
    callback();
  }
}

repeat(5, () => console.log(count * 5));
