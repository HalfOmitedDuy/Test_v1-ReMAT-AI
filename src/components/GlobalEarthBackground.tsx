import React from 'react';
import cleanEarthImg from '../assets/images/clean_earth_globe_transparent.png';

export const GlobalEarthBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Quả địa cầu to lớn hơn, tràn màn hình ấn tượng, xoay ngược chiều kim đồng hồ, độ mờ vừa đủ */}
      <div className="relative w-[135vmin] h-[135vmin] max-w-[1900px] max-h-[1900px] min-w-[780px] min-h-[780px] flex items-center justify-center">
        <img
          src={cleanEarthImg}
          alt="Re:Mat Global Circular Economy Earth Background"
          className="w-full h-full object-contain animate-spin-2d-counter opacity-30 select-none pointer-events-none"
        />
      </div>
    </div>
  );
};





