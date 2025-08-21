import React, { useState } from 'react';

interface UtilityProps {
  text: string;
  hasGap?: boolean;
  hasBadge?: boolean;
  initialBadgeCount?: number;
  onClick?: () => void;
}

const Utility: React.FC<UtilityProps> = ({ 
  text, 
  hasGap = true, 
  hasBadge = true, 
  initialBadgeCount = 3,
  onClick 
}) => {
  const [badgeCount, setBadgeCount] = useState<number>(initialBadgeCount);

  // 테스트를 위한 클릭 핸들러 (클릭할 때마다 숫자가 순환: 3 -> 0 -> 5 -> 3...)
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (hasBadge) {
      setBadgeCount(prev => {
        if (prev === 3) return 0;
        if (prev === 0) return 5;
        return 3;
      });
    }
  };

  return (
    <div 
      className="flex items-start cursor-pointer"
      style={{ gap: hasGap ? '-0.375rem' : '0' }}
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
              {text}
            </div>
          </div>
        </div>
      </div>
      
      {/* Badge Container - 뱃지 숫자가 0보다 클 때만 표시 */}
      {hasBadge && badgeCount > 0 && (
        <div 
          className="flex justify-center items-end"
          style={{
            width: '0.375rem',
            height: '0.5rem',
            gap: '0.625rem'
          }}
        >
          <div
            className="flex flex-col justify-center items-center rounded-sm"
            style={{
              height: '0.75rem',
              minWidth: '0.75rem',
              padding: '0 0.125rem',
              gap: '0.625rem',
              backgroundColor: 'var(--Red-Red07, #DC2626)',
              border: '1px solid var(--Red-Red06, #EF4444)'
            }}
          >
            <div
              className="overflow-hidden text-center text-ellipsis"
              style={{
                display: '-webkit-box',
                maxWidth: '0.875rem',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                color: 'var(--Colors-Neutral-Neutral_01-FFFFFF, #FFF)',
                textAlign: 'center',
                textOverflow: 'ellipsis',
                fontFamily: 'SamsungOneKoreanNoF',
                fontSize: '0.6875rem',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '0.75rem',
                letterSpacing: '0.05rem'
              }}
            >
              {badgeCount}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Utility;
