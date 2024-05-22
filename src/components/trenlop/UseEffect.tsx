import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount]=useState<number>(0);
    const [name,setName]=useState<string>('');
    useEffect(()=>{
        console.log('useEffect được gọi');
    },[count]);
    const handleClick=()=>{
        setCount(count+1);
    }

  return (
    <div>
      {/* 
        UseEffect là 1 hook
        useEffect là 1 cái hàm
        sinh ra để làm gì?
        - giải quyết các vấn đề side effect(tác dụng phụ bên cạnh tác động chính).

        cú pháp như thế nào?
        *3 cú pháp useEffect
        useEffect tương tự componentDidMount
        1. nhận vào 1 tham số là callback function (arrow function)
            + khi conponent được mount vào DOM thì UseEffect được gọi
            + khi mỗi lần component re-render thì UseEffect được gọi
        2. nhận vào 1 tham số thứ nhất là callback function (arrow function) và tham số thứ 2 nhận vào một mảng rỗng []'
            + khi component được mount vào DOM thì UseEffect được gọi
            + khi mỗi lần component re-render thì useEffect không được gọi
        3. nhận vào 1 tham số thứ nhất là callback function (arrow function) và tham số thứ 2 nhận vào một mảng [dependency] (sự phụ thuộc)
            + useEffect được gọi khi component được mount vào DOM
            + khi dependency thay đổi thì useEffect đc gọi
        cách dùng thế nào?
      */}

      <p>giá trị biến count: {count}</p>
      <button onClick={handleClick}>click up</button>

      
    </div>
  )
}