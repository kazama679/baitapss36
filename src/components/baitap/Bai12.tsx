import React, { useEffect, useState } from 'react';

export default function Bai12() {
  const [time, setTime] = useState<number>(0);
  const [run, setRun] = useState<boolean>(false);
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (run) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [run]);
  const handleStart = () => {
    setRun(true);
  };
  const handleStop = () => {
    setRun(false);
  };
  const handleReset = () => {
    setTime(0);
    setRun(false);
  };
  return (
    <div>
      <p>Thời gian đã trôi qua: {time}</p>
      <button onClick={handleStart} disabled={run}>
        Bắt đầu
      </button>
      <button onClick={handleStop} disabled={!run}>
        Dừng
      </button>
      <button onClick={handleReset}>Đặt lại</button>
    </div>
  );
}