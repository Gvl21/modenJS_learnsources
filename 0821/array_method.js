let food = ['자장면', '피자', '탕수육'];

// 삽입
food.push('치킨');

// 마지막 요소 제거
food.pop();

// 맨 앞 요소 제거
food.shift();

// 맨 앞 요소 추가
food.unshift('갈비찜');

// 위 메소드 들의 특징 : 기존 배열을 직접 조작한다.(원본 수정)

// 기존 배열은 그대로 두고, 새로운 배열을 만드는 메소드

// slice : 배열을 자른다 => 새로운 배열 반환(원본배열은 그대로)
const arr = [1, 2, 3];
const arr2 = arr.slice(0, 2);

// concat : 배열을 이어붙인다.
const arr3 = arr.concat(...arr);
const arr4 = arr3.concat([10, 20]);
// 스프레드 연산자와 유사하게 사용

// 순회 forEach : 매개변수로 callback 함수를 받는다.
// 콜백함수의 매개변수 = item, index, array
// item : 현재 순회하는 배열 요소
// index : 현재 순회하는 배열의 인덱스
// array : 현재 순회중인 배열
arr.forEach((item) => console.log(item));
// forEach(아이템,인덱스,배열) 사용가능

// 탐색 메서드
// indexOf (item, fromIndex) (요소, 어느 인덱스부터 찾을것인지)
// 결과가 없을 때 -1 반환

// includes
// 배열에 특정 요소가 있는지 파악(있으면 true, 없으면 false)
food.includes('피자');
food.includes('피자', 2);

// findIndex(callback(item,index,array))
// 배열에서 찾으려는 요소의 인덱스 반환
// 찾는 배열에서 처음으로 찾은 요소를 반환
// callback 함수의 리턴 값 boolean
let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
arr10.findIndex((item) => item % 2 == 0);

let arrPerson = [
  { name: '홍길동' },
  { name: '이몽룡' },
  { name: '성춘향' },
  { name: '변사또' },
];

arrPerson.findIndex((item) => item.name === '변사또');

// find : 인덱스가 아닌 요소(item)을 반화
arrPerson.find((item) => item.name === '변사또');

// filter, map, reduce
// filter
// 배열에서 조건만 만족하는 요소를 모아, 새로운 배열로 반환
// arr.filter(callback(item,index,array))

let arrPerson0 = [
  { name: '홍길동', story: '홍길동전' },
  { name: '이몽룡', story: '춘향전' },
  { name: '성춘향', story: '춘향전' },
  { name: '변사또', story: '춘향전' },
];
let newAp = arrPerson0.filter((i) => i.story === '춘향전');

// map
// 배열의 요소를 변형하거나 재정렬
arrPerson0.filter((i) => i.story === '춘향전').map((i) => (i.story = '춘향뎐'));
let arrNum = [1, 2, 3, 4];
let newAp0 = arrNum.map((i) => i * 10);

// reduce
// 배열 요소를 모두 순회하면서 함수를 실행하고 단 하나의 결과만 반환
// arr.reduce((acc,item,idx,arr) => {},초기값)
// acc : 누산기(계산한 값을 저장하고 있는 변수)
// initial : 누산기의 초기값, 초기값을 주지 않을 경우, 배열의 첫번째 요소가 초기값이 됨

let array = [1, 2, 3, 10, 20, 30];
array.reduce((acc, item) => acc + item);

// sort
//
let arrSort = ['b', 'a', 'c'];
let arrSort2 = [10, 5, 3];

arrSort.sort(); // ['a',b','c']
arrSort2.sort(); // [10,3,5]; 해당 메소드가 내부 요소를 문자열로 취급해서 10을 1로 인식함
arrSort2.sort((a, b) => a - b); // 매개변수로 compare 비교 콜백함수를 준다.

// join
// 배열의 요소를 모두 연결해서 하나의 문자열로 반환
// 구분자(Seperator)로 연결(기본값 ,)
let arrJoin = ['이제', '곧', '점심시간입니다'];
arrJoin.join(' ');
