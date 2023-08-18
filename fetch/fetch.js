fetch('student.json') // json 파일에 접근
  .then((response) => response.json()) // 결과값을 json객체 변환
  .then((json) => {
    let output = '';
    json.forEach((student) => {
      output += `
    <h2>${student.name}</h2>
    <ul>
    <li>${student.major}</li>
    <li>${student.grade}</li>
    </ul>
    `;
    });
    document.querySelector('#result').innerHTML = output;
  });
