// 객체 생성
var obj = new Object();

// 리터럴 구문
var obj = {};

// 객체 구조
// 특징 : key-value로 구성
// 모든 타입을 넣을 수 있다.
var obj = {
  name: '당근',
  _for: '맥스꺼',
  details: {
    color: 'orange',
    size: 12,
  },
};

// 인덱스(Key)로 접근 가능
obj.details.color;
obj['details']['size'];

// 프로토타입 방식으로 인스턴스 생성
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const 홍길동 = new Person('홍길동', 30);


