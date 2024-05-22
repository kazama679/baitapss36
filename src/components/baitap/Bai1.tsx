import React, { useState, useEffect } from 'react';

export default function Bai1() {
  const [name,setName]=useState<string>('');
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value);
  }
  useEffect(() => {
    document.title = name === '' ? 'Chưa nhập tên' : name;
  }, [name]);
  return (
    <div>
      <input type="text" onChange={handleChange}/>
    </div>
  )
}