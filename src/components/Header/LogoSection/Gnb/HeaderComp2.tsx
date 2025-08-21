import React from 'react';

interface HeaderComp2Props {
  text: string;
}

const HeaderComp2: React.FC<HeaderComp2Props> = ({ text }) => {
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
        color: '#EDF2F4'
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '2.5rem',
          alignItems: 'center',
          borderRadius: '0.125rem',
          color: '#EDF2F4'
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
            color: '#EDF2F4'
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '0.25rem 0.375rem 0.25rem 0.5rem',
              alignItems: 'center',
              gap: '0.25rem',
              borderRadius: '0.125rem',
              color: '#EDF2F4'
            }}
          >
            <div
              style={{
                display: 'flex',
                paddingBottom: '0.125rem',
                alignItems: 'center',
                gap: '0.625rem',
                color: '#FFF'
              }}
            >
              <div
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  overflow: 'hidden',
                  color: '#FFF',
                  textOverflow: 'ellipsis',
                  fontFamily: 'SamsungOneKoreanNoF',
                  fontSize: '0.875rem',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '1.25rem',
                  letterSpacing: '0.05rem'
                }}
              >
                {text}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.125rem',
                color: '#EDF2F4'
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
                  color: '#EDF2F4'
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
                    color: '#EDF2F4'
                  }}
                >
                  <div
                    style={{
                      width: '0.875rem',
                      height: '0.875rem',
                      flexShrink: 0
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
          </div>
        </div>
      </div>
    </button>
  );
};

export default HeaderComp2;
