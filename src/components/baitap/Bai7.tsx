import React, { useState } from 'react'
export default function Bai7() {
  const [count,setCount]=useState<number>(0);
  const [flag,setFlag]=useState<number|null>(null);
  const upNumber=()=>{
    setFlag(count);
    setCount(count+1);
  }
  return (
    <div>
      <p>Giá trị trước: {flag}</p>
      <p>Giá trị hiện tại: {count}</p>
      <button onClick={upNumber}>tăng</button>
    </div>
  )
}