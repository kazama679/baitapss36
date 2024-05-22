import React, { useEffect, useState } from 'react'

export default function Bai9() {
  const [time,setTime]=useState<number>(0);
  useEffect(()=>{
    const timer= setInterval(()=>{
      setTime((prevTime) => prevTime + 1)
    },1000);
  return () => clearInterval(timer);
}, []);
  return (
    <div>
      <p>Thời gian đã trôi qua: {time}</p>
    </div>
  )
}