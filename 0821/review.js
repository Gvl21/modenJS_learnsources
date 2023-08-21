// 변수와 상수 var, let, const
// 명명규칙, 특수문자는 _, $만 허용, 숫자는 첫글자로 사용안됨, 예약어, 사용안됨, 대소문자구분 필수
// CamelCase  (CSS, kebob-case, snake_case)
// 자료형
// Primitive type : Number, String, Boolean, null, undefined (BigInt, Symbol)
// Object type : Object, Array, Function ...
// 묵시적 형변환 : 프로그래머가 의도하지 않았는데 자료형이 바뀝니다.
10 + '20';
// 명시적 형변환 : 프로그래머가 의도해서 변형되는 것.
Boolean(null);
Number('10');

// 연산자 : 산술연산자, 대입연산자, 증감연산자, 논리연산자 (|| OR, && AND, !NOT)
//          비교연산자
//          NULL 병합(nullish) 연산자
let a = 10;
let b = 20;
let c;

// null스럽지 않은 값으로 반환 (|| 연산자랑 같은 듯?)
a ?? b; //  10
c ?? b; //  20

// 두 피연산자 값이 모두 확정되었을 경우 좌측값을 반환
// 좌측 값이 null일 경우 우측 값을 반환

// 동적 타이핑 Dynamic Typing
// 저장하는 변수 값에 따라 변수의 자료형이 결정되고 변수의 값이 바뀌면, 타입도 같이 변경된다.

// 삼항 조건 연산자
// 조건식 ? 참 : 거짓
const d = 123;
const f = 'hi';

typeof d === 'number'
  ? console.log('문자 자료형')
  : console.log('문자 자료형이 아님');

// 숫자가 주어지고 짝수와 홀수를 구분하는 삼항 연산자를 만들어주세요
let number = 1;
let result = number % 2 === 0 ? '짝' : '홀';

// 객체, 배열
let objA = {}; // 리터럴 문법
let objB = new Object(); // 생성자 문법

// js에서는 리터럴 문법을 주로 사용한다.
const person = {
  name: '홍길동', // 프로퍼티
  age: 30, //key, value
  'like cat': true,
};

// key : 문자열, 복수의 단어인 경우 ""로 묶어준다.

// dot 접근법   person.name
// [] 접근법    person['name']

// const로 설정해도 프로퍼티는 변경, 조작 가능함
person.name = '성춘향';

// in 연산자 : 프로퍼티의 존재 여부 확인 bool값으로
let person2 = {
  age: 18,
};

let isName = 'name' in person2;

// 배열
// 배열의 값으로 어떤 자료형도 가능
let arr = [
  1,
  '123',
  null,
  undefined,
  () => {},
  function () {},
  [1, 2, 3],
  { a: 1, b: 3 },
];
