import React, { useState, useEffect } from 'react';

export default function Bai11() {
  const [image, setImage] = useState<string | null>(null);
  const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };
  useEffect(() => {
    return () => {
      setImage(null);
    };
  }, []);
  return (
    <div>
      <input type="file" accept="image/*" onChange={handle} />
      {image && <img src={image} alt="Preview" className='image' />}
    </div>
  );
}