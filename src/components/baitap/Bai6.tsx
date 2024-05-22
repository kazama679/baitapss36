import React, { useEffect, useState } from 'react';

export default function Bai6() {
  const [number, setNumber] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setNumber(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  useEffect(() => {
    document.title = `Vị trí cuộn: ${number}`;
  }, [number]);
  return (
    <div>
    </div>
  );
}