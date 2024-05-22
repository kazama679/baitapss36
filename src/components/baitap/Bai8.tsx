import React, { useState } from 'react';

export default function Bai8() {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const [month] = useState<number>(currentMonth);
  const getSeason = (month: number) => {
    if (month >= 1 && month <= 3) {
      return 'Xuân';
    } else if (month >= 4 && month <= 6) {
      return 'Hạ';
    } else if (month >= 7 && month <= 9) {
      return 'Thu';
    } else {
      return 'Đông';
    }
  };
  const [season] = useState<string>(getSeason(currentMonth));
  return (
    <div>
      <p>Bây giờ là tháng: {month}</p>
      <p>Bây giờ là mùa: {season}</p>
    </div>
  );
}