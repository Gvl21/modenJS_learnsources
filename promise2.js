const pizza = () => {
  return new Promise((resolve) => {
    resolve('피자를 주문합니다.');
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('피자 도우 준비하기');
    }, 3000);
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('피자 굽기');
    }, 3000);
  });
};
const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('굽기완료');
    }, 3000);
  });
};

// 비동기 함수를 순차대로 사용
// Promise Chaining
// 축약하여 사용 가능

pizza()
  // .then((result) => step1(result))
  // .then((result) => step2(result))
  // .then((result) => step3(result))
  .then(step1)
  .then(step2)
  .then(step3)
  .then((message) => {
    console.log(message);
    console.log('피자가 준비되었습니다');
  });
