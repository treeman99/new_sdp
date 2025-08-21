import React from 'react';

const UserGuide: React.FC = () => {
  const handleClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  return (
    <div 
      className="flex items-start cursor-pointer"
      style={{ gap: '0' }}
      onClick={handleClick}
    >
      {/* Main Button Container */}
      <div 
        className="flex items-start rounded-sm"
        style={{ 
          background: 'var(--Color-bg-on_ghost_button-ghostbtn-default, rgba(0, 0, 0, 0.00))'
        }}
      >
        <div 
          className="flex items-center rounded-none"
          style={{ 
            padding: '0 var(--Spacing-6, 0.375rem)',
            gap: 'var(--Spacing-4, 0.25rem)'
          }}
        >
          <div 
            className="flex items-center"
            style={{
              padding: '0.1875rem 0',
              gap: '0.625rem'
            }}
          >
            <div
              className="overflow-hidden text-ellipsis"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                color: 'var(--Color-text-on_btn-ghost-on_ghost-default_on_darkbg, #F3F6F8)',
                textOverflow: 'ellipsis',
                fontFamily: 'SamsungOneKoreanNoF',
                fontSize: '0.75rem',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '0.875rem',
                letterSpacing: '0.05rem'
              }}
            >
              User Guide
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
