import React from 'react';

function Food({name, picture}){
  return (
  <div>
    <h2>I like {name}</h2>
    <img src = {picture}/>
  </div>
  );
}

const foodLike = [
  {
    name: 'Kimchi',
    image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png'
  },
  {
    name: 'Pasta',
    image: 'https://t1.daumcdn.net/liveboard/dailylife/8defeeef58a04d3888ddfe03b5722000.jpg'
  },
  {
    name: 'Jamon',
    image: 'https://img-cf.kurly.com/shop/data/goodsview/20180827/gv10000030667_1.jpg'
  }
];

function App() {
  return (
  <div>
    {foodLike.map(dish => (
      <Food name={dish.name} picture={dish.image}/>
      ))}
  </div>
  );
}

export default App;
