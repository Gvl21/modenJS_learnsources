// truthy, falsy
// falsy : 0, -0, NaN, "", null, undefined, 0n
// 나버지는 모두 truthy

// AND 단락평가
// 하나라도 거짓이면 거짓을 반환(둘다 참)
// 왼쪽 값이 거짓인 경우, 오른쪽 값은 계산하지 않는다.

function fa() {
  console.log('a'); // 프로세스....
  return false;
}
function fb() {
  console.log('b'); // 프로세스....
  return true;
}

fa() && fb(); // fa함수만 호출한다.

// 오류를 방지하기 위하여 사용
let person = { name: '홍길동' };

// 좌측값에 falsy 한 값이 들어올 경우, 오류를 발생시키는 대신,
// falsy 값 자체를 반환하고 우측항을 실행시키지 않는다.
function getName(person) {
  return person && person.getName;
}

// OR 단락평가 (하나라도 참이면 참)
// 왼쪽이 true이면 오른쪽을 실행하지 않음.
let name = '홍길동' || undefined;
