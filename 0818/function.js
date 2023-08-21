// 함수

function add(x,y){
  const total = x+y;
  return total;
}

// 함수에 매개변수를 적게 넣을 경우
add();    // NaN을 반환한다.

// 많이 넣을 경우
add(1,2,3,4);  // 뒤의 매개변수 무시한다.

// 함수는 argument(인자들)라는 변수를 갖는다.
// 배열과 비슷한 속성을 가지고
// 호출 당시에 받은 매개변수들을 저장라고 있다.

function add() {
  let sum = 0;
  for (const item of arguments) {
      sum += item;
  }
  return sum;
}
add(1,2,3,4,5)  // 유연한 매개변수 입력 호출 가능


function avg() {
  let sum = 0;
  for (const item of arguments) {
      sum += item;
  }
  return sum / arguments.length;
}


// 나머지 매개변수 문법 (spread)
function avg(...args) {
  let sum = 0;
  for (const item of args) {
      sum += item;
  }
  return sum / args.length;
}

// 익명함수 : 선언부에서 이름을 제외

// 익명함수의 선언부를 제외하고, 화살표 함수로 사용
const avg = (...args) => {
  let sum = 0;
  for (const item of args) {
      sum += item;
  }
  return sum / args.length;
}



