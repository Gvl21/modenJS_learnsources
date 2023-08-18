const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
fetch('https://dummyjson.com/quotes')
  .then((json) => json.json())

  .then((json) => {
    console.log(json);
    const ranNum = Math.floor(Math.random() * json.quotes.length);
    console.log(ranNum);

    const quote0 = json.quotes[ranNum].quote;
    const author0 = json.quotes[ranNum].author;
    console.log(quote0);
    quote.textContent = quote0;
    author.textContent = author0;
  });
