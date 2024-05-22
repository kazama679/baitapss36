import React, { useState, useEffect } from 'react';

export default function Bai2() {
  const [count,setCount]=useState<number>(0);
  const handleClick=()=>{
    setCount(count+1);
  }
  useEffect(() => {
    document.title = `Click ${count} lần`
  }, [count]);
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}