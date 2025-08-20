import React from 'react';

const Tanant: React.FC = () => {
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
        padding: '0'
      }}
    >
      {/* InnerBox */}
      <div 
        style={{
          display: 'flex',
          padding: '0',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.25rem',
          borderRadius: '0'
        }}
      >
        {/* TitleContainer */}
        <div 
          style={{
            display: 'flex',
            padding: '0.25rem 0.375rem 0.25rem 0.5rem',
            alignItems: 'center',
            gap: '0.25rem',
            borderRadius: '0.125rem'
          }}
        >
          {/* TitleText */}
          <div 
            style={{
              display: 'flex',
              paddingTop: '0.25rem',
              alignItems: 'center',
              gap: '0.625rem',
              color: '#FFFFFF'
            }}
          >
            <div 
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                overflow: 'hidden',
                color: '#FFFFFF',
                textOverflow: 'ellipsis',
                fontFamily: '"Samsung Sharp Sans"',
                fontSize: '0.8125rem',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '1rem',
                letterSpacing: '0.05rem'
              }}
            >
              SENSDES-RND
            </div>
          </div>
          
          {/* ButtonContainer */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.125rem'
            }}
          >
            {/* IconButton */}
            <div 
              style={{
                display: 'flex',
                width: '1rem',
                height: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '0.125rem'
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
                  flexShrink: 0
                }}
              >
                <div 
                  style={{
                    width: '0.875rem',
                    height: '0.875rem',
                    flexShrink: 0
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11.0001 5L7.00001 8.99996L3.00011 5" stroke="#EDF2F4" strokeWidth="1.2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Tanant;
