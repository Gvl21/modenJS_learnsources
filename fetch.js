// 네트워크의 리소스에 접근할 때, fetch함수를 사용
// 리턴 값으로 Pormise를 리턴
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    response.json();
    // 실행문...
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error))
  .finally(function () {
    console.log('통신을 완료했습니다.}');
  });
