async function favorite() {
  let fav = 'javascript';
  return fav;
}

async function displaySubject(subject) {
  return `hello, ${subject}`;
}

// await 키워드는 async 비동기 함수에서만 사용 가능
async function init(){
  // await 결과가 끝날때까지 기다려라.
  const response = await favorite();
  const result = await displaySubject('everyone');
  console.log('i like ' + response)
  console.log(result); 
}
