import React from 'react';
import Fruit from './Orange';


const fruitLike=[
  {
    id: 1,
    name : 'banana',
    image : 'https://cdn-icons-png.flaticon.com/512/284/284780.png',
    rating: 5,
  },
  {
    id:2,
    name : 'apple',
    image : 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYZiGz%2FbtqxdqHsg3G%2FTmrEpyujNbbtNtOsiFpkik%2Fimg.jpg',
    rating: 4.9,
  },
  {
    id:3,
    name : 'orang',
    image : 'https://cdn-icons-png.flaticon.com/512/135/135620.png',
    rating: 4.7,
  }
];

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {fruitLike.map((dish) => (<Fruit key={dish.id} name={dish.name}  picture={dish.image}/>))}
    </div>
  );
}

export default App;
