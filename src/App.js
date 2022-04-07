import React from 'react';
import Fruit from './Orange';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Fruit  fav="banana"/>
      <Fruit  fav="apple"/>
      <Fruit  fav="orange"/>
    </div>
  );
}

export default App;
