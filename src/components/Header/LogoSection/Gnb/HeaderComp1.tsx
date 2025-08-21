import React from 'react';

const HeaderComp1: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '2.5rem',
        alignItems: 'center',
        borderRadius: '0.125rem',
        color: '#FFF'
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '2.5rem',
          alignItems: 'center',
          borderRadius: '0.125rem',
          color: '#FFF'
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
            color: '#FFF'
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '0.25rem 0.375rem 0.25rem 0.5rem',
              alignItems: 'center',
              gap: '0.25rem',
              borderRadius: '0.125rem',
              color: '#FFF'
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
                My Task
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp1;
