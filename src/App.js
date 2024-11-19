import React, { useState, useEffect } from 'react';
import Box1 from './Components/Box1.js';
import Box2 from './Components/Box2.js';
import Box3 from './Components/Box3.js';

const App = () => {
  const [tryOunce, setTryOunce] = useState(31.1035);
  const [newPrice, setNewPrice] = useState(0);
  const [hasSet, setHasSet] = useState(false);
  const [priceDiff,setPriceDiff] = useState(0);

  // Initialize `price` state as an array of objects with date and price
  const [price, setPrice] = useState(() => {
    const storedPrices = localStorage.getItem('price');
    return storedPrices ? JSON.parse(storedPrices) : [];
  });

  useEffect(() => {
    setHasSet(false);
    const prevFetchTime = localStorage.getItem('fetchTime');
    const currFetchtime = Date.now();
    const addNewPrice = ()=>{
    fetch('https://api.metalpriceapi.com/v1/latest?api_key=a50e72e73f8b49053f2c077e825214a8&base=INR&currencies=XAU')
      .then(response => response.json())
      .then(data => {
        const temp = data.rates.INRXAU;
        const calculated = Math.round(temp / tryOunce);
        setNewPrice(calculated);

        const currentDate = new Date().toDateString();
        setPrice(prevPrice => {
          const updatedPrice = [...prevPrice, { date: currentDate, price: calculated }];
          if(updatedPrice.length > 5)
          {
            updatedPrice.shift();
          }

          if(updatedPrice.length >= 2)
          {
            const lastPrice = updatedPrice[updatedPrice.length - 1].price;
            const secondLast = updatedPrice[updatedPrice.length -2].price;
            setPriceDiff(lastPrice - secondLast);
          }

          localStorage.setItem('price', JSON.stringify(updatedPrice));
          return updatedPrice;
        });
        localStorage.setItem('fetchTime',Date.now());
      })
      .catch(error => console.error(error));
    }
      if(prevFetchTime - currFetchtime >= 86400000)
      {
        addNewPrice();
      }
  }, []);

  return (
    <>
      <div className="container">
        <Box1 data={newPrice} track={priceDiff}/>
        <Box2 arr={price}/>
        <Box3 list={price}/>
      </div>
    </>
  );
};

export default App;
