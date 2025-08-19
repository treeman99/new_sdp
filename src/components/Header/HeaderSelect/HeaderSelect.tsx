import React from 'react';

interface HeaderSelectProps {
  text: string;
  height?: string;
  className?: string;
}

const HeaderSelect: React.FC<HeaderSelectProps> = ({ 
  text, 
  height = 'h-10', 
  className = ''
}) => {
  return (
    <div className={`flex ${height} items-center rounded-sm px-3 gap-2 ${className}`}>
      {/* 버튼 텍스트 */}
      <div className="flex flex-col justify-center overflow-hidden">
        <span className="text-white text-header-select font-bold leading-header-select tracking-header-select text-ellipsis overflow-hidden whitespace-nowrap line-clamp-1 font-header-label">
          {text}
        </span>
      </div>
      
      {/* 아이콘 버튼 */}
      <div className="flex w-4 h-4 justify-center items-center rounded-sm flex-shrink-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="14" 
          height="14" 
          viewBox="0 0 14 14" 
          fill="none"
          className="w-3.5 h-3.5 flex-shrink-0"
        >
          <path 
            d="M11 5L6.9999 8.99996L3 5" 
            stroke="#EDF2F4" 
            strokeWidth="1.2"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeaderSelect;
