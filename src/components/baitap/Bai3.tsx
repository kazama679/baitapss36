import React, { useState } from 'react';

export default function Bai3() {
  const [tag, setTag] = useState('Trang chủ');
  const handleTabClick = (tab:string) => {
    setTag(tab);
    document.title = `${tag}`
  };
  return (
    <div className="navbar">
      <div
        className={`nav-item ${tag === 'Trang chủ' ? 'tap' : ''}`}
        onClick={() => handleTabClick('Trang chủ')}
      >Trang chủ</div>
      <div
        className={`nav-item ${tag === 'Sản phẩm' ? 'tap' : ''}`}
        onClick={() => handleTabClick('Sản phẩm')}
      >Sản phẩm</div>
      <div
        className={`nav-item ${tag === 'Giới thiệu' ? 'tap' : ''}`}
        onClick={() => handleTabClick('Giới thiệu')}
      >Giới thiệu</div>
      <div
        className={`nav-item ${tag === 'Liên hệ' ? 'tap' : ''}`}
        onClick={() => handleTabClick('Liên hệ')}
      >Liên hệ</div>
    </div>
  );
}