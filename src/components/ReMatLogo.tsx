import React from 'react';
import rematLogoImg from '../assets/images/remat_ai_logo_official_1790131287634.jpg';

interface ReMatLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  inverted?: boolean;
}

export const ReMatLogo: React.FC<ReMatLogoProps> = ({
  className = '',
  size = 'md',
  showSlogan = false,
  inverted = false
}) => {
  const heightMap = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-18'
  };

  const currentHeight = heightMap[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official Re:Mat AI Logo */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src={rematLogoImg}
          alt="Re:Mat AI Logo"
          className={`${currentHeight} w-auto object-contain rounded-lg drop-shadow-xs transition-transform duration-300 hover:scale-105 ${
            inverted ? 'brightness-110 contrast-125' : ''
          }`}
        />
      </div>

      {showSlogan && (
        <span className={`text-[11px] font-medium tracking-normal ${inverted ? 'text-gray-200' : 'text-[#4A6358]'}`}>
          Vòng đời mới cho vật liệu cũ
        </span>
      )}
    </div>
  );
};

