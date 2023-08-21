import React, { useState } from 'react';

const todoList = [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Finish homework', completed: true },
  { id: 3, task: 'Go for a walk', completed: false },
];

function TodoApp() {
  const [showCompleted, setShowCompleted] = useState(false);

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };
}

const comTodo = todoList.filter((i) => i.completed);
const unComTodo = todoList.filter((i) => i.completed === false);





const products = [
  { name: 'Apple', price: 2.8, quantity: 5 },
    { name: 'Banana', price: 1.5, quantity: 8 },
    { name: 'Orange', price: 3, quantity: 3 },
    { name: 'Grapes', price: 4, quantity: 2 },
  ];




  products.sort((a,b)=>a-b);
  products.reduce((a,i)=>a + i.price,0)

  const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 19 },
  ];


  students.filter((i)=>i.age<=20).map((i)=>i.name).join();

  let [{name:n, age:a}] = students;

//   6.  student를 매개변수로 받아 name과 age를 구조분해 할당하여 name, age 변수를 출력하는 함수를 만들어서,
// forEach메소드의 매개변수로 넣어 실행해주세요.
// * 구조분해 할당과 forEach 및 콜백함수 사용
const printStudent = (i)=>{
  const{name, age} = i;
  console.log(`이름 : ${name}, 나이 : ${age}`)
}

students.forEach(printStudent);