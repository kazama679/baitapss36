import React, { useEffect, useState } from 'react'

export default function Bai10() {
  const [get,setGet]=useState<number>(0);
  const [text,setText]=useState<string>('');
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setGet(event.keyCode);
      setText(event.key);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div>
      <p>Bạn ấn phím: {text}</p>
      <p>Mã phím: {get}</p>
    </div>
  )
}