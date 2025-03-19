import React from 'react';
import "./Products.css";

export default function products() {
    const products=[
        {id:1,name:"Product 1",price:33},
        {id:2,name:"Product 2",price:44},
        {id:3,name:"Product 3",price:55},
        {id:4,name:"Product 4",price:66},
        {id:5,name:"Product 5",price:77},
        {id:6,name:"Product 6",price:88}
    ];
  return (
  <div className="App-Products-Row">
    {products.map((value,index)=>(
        <div key={index} className="App-Products-Box">
            <h3>{value.name}</h3>
            <h4>{value.price}</h4>
            <button>Add to Cart</button>
        </div>
  ))}
  </div>
  )
}
