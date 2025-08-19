import React from 'react';

interface HeaderLabelProps {
  text: string;
  height?: string;
  className?: string;
}

const HeaderLabel: React.FC<HeaderLabelProps> = ({ 
  text,
  height = 'h-10',
  className = ''
}) => {
  return (
    <div className={`flex ${height} items-center rounded-sm px-3 ${className}`}>
      {/* 버튼 텍스트 */}
      <div className="flex flex-col justify-center overflow-hidden">
        <span className="text-white text-header-label font-bold leading-header-label tracking-header-label text-ellipsis overflow-hidden whitespace-nowrap line-clamp-1 font-header-label">
          {text}
        </span>
      </div>
    </div>
  );
};

export default HeaderLabel;
