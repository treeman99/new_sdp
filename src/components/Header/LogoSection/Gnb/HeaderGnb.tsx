import React from 'react';

interface HeaderGnbProps {
  text: string;
  hasDropdown?: boolean;
  isSelected?: boolean;
}

const HeaderGnb: React.FC<HeaderGnbProps> = ({
  text,
  hasDropdown = false,
  isSelected = false,
}) => {
  const textColor = isSelected ? '#FFF' : '#FFF';
  const containerColor = isSelected ? '#FFF' : '#EDF2F4';

  const content = (
    <div
      style={{
        display: 'flex',
        height: '2.5rem',
        alignItems: 'center',
        borderRadius: '0.125rem',
        color: containerColor,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '2.5rem',
          alignItems: 'center',
          borderRadius: '0.125rem',
          color: containerColor,
        }}
      >
        <div
          style={{
            display: 'flex',
            padding: '0',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.25rem',
            borderRadius: '0',
            color: containerColor,
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '0.25rem 0.375rem 0.25rem 0.5rem',
              alignItems: 'center',
              gap: '0.25rem',
              borderRadius: '0.125rem',
              color: containerColor,
            }}
          >
            <div
              style={{
                display: 'flex',
                paddingBottom: hasDropdown ? '0.125rem' : '0.25rem',
                alignItems: 'center',
                gap: '0.625rem',
                color: textColor,
              }}
            >
              <div
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  overflow: 'hidden',
                  color: textColor,
                  textOverflow: 'ellipsis',
                  fontFamily: 'SamsungOneKoreanNoF',
                  fontSize: '0.875rem',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '1.25rem',
                  letterSpacing: '0.05rem',
                }}
              >
                {text}
              </div>
            </div>
            {hasDropdown && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.125rem',
                  color: containerColor,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '1rem',
                    height: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '0.125rem',
                    color: containerColor,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      width: '1rem',
                      height: '1rem',
                      padding: '0.0625rem',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0,
                      color: containerColor,
                    }}
                  >
                    <div
                      style={{
                        width: '0.875rem',
                        height: '0.875rem',
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M11.0001 5L7.00002 8.99996L3.00012 5"
                          stroke="#EDF2F4"
                          strokeWidth="1.2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // hasDropdown이 true면 button으로, false면 div로 렌더링
  if (hasDropdown) {
    return (
      <button
        style={{
          display: 'flex',
          height: '2.5rem',
          alignItems: 'center',
          borderRadius: '0.125rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '0',
          color: containerColor,
        }}
      >
        {content}
      </button>
    );
  }

  return content;
};

export default HeaderGnb;
