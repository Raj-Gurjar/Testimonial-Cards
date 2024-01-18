import React, { useState, useEffect } from 'react';
import Card from "./Card";

export default function Cards({ data }) {
  let [index, setIndex] = useState(0);

  function prevHandler() {
    console.log("Previous Index:", index); //previous index will be printed not current.
    setIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  }

  function nxtHandler() {
    setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  }

  function ranHandler() {
    let ranInd = Math.floor(Math.random() * data.length);
    setIndex(ranInd);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Automatically go to the next index after 2 seconds
      nxtHandler();
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [index, data.length]);

  return (
    <div className='cards-cls'>
      <h2>Cards</h2>
      <div className='cards-cntnr'>

        <Card key={data[index].id} personData={data[index]} />

        <div className="btn-cntnr">

          <button className='prev' onClick={prevHandler}>-</button>
          <button className='nxt' onClick={nxtHandler}>+</button>

        </div>

        <div className="shuffle">
          <button onClick={ranHandler}>Shuffle</button>
        </div>

      </div>
    </div>
  );
}
