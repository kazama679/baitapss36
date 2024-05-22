import React, { useState, useEffect } from 'react';

interface Time {
  hour: number,
  minute: number,
  second: number
}
export default function Bai5() {
  const [time, setTime] = useState<Time>({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds()
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p>Thời gian hiện tại: {`${time.hour.toString().padStart(2, '0')} : 
      ${time.minute.toString().padStart(2, '0')} : ${time.second.toString().padStart(2, '0')}`}</p>
    </div>
  );
}