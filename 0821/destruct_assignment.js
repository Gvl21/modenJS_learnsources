// 구조 분해 할당
let arr = [1, 2, 3];

// before 인덱스를 통한 접근
let one = arr[0];
let two = arr[1];
let three = arr[2];

// after 구조분해 할당
let [one_, two_, three_] = arr;

// 구조분해 할당할 변수가 배열의 개수와 일치하지 않아도 사용 가능
// let [one, two] = [1, 2, 3]; // 두개의 변수만 대입
// let [one, two, three] = [1, 2]; // three는 undifned

// 객체 구조분해 할당
let person = {
  name: '홍길동',
  age: 30,
  loc: '부산',
};

let { name, age, loc } = person;
console.log(name, age, loc);

// 구조분해 항당하면서 변수이름을 변경하기
let { name: n, age: a, loc: l } = person;

