// short-circuit
// null 여부를 검사하기 위해서

var name = o && o.getname();

// AND 연산 && 왼쪽 부분이 false한 값이면
// 오른쪽 부분을 실행하지 않는다.
// 왼쪽 부분이 truthy한 값이면,
// 오른쪽 부분을 실행한다.

if (o) {
  var name = o;
  o.getname();
} else {
  var name = o;
}

// OR 연산 || 왼쪽 연산이 false이면, 오른쪽 연산을 수행하여 name에 대입
// 왼쪽 연산이 truthy한 값이면 오른쪽 연산 무시하고 왼쪽연산 cachedName을 대입
var name = cachedName || (cachedName = getName());

// 삼항 연산자
// age가 18 이상이면 yes를 allowed에 대입
// 미만이면 no를 대입.
var allowed = age >= 18 ? 'yes' : 'no';
