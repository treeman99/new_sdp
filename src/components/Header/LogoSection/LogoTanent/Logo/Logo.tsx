import React from 'react';

const Logo: React.FC = () => {
  return (
    <div 
      style={{
        display: 'flex',
        paddingRight: '0.5rem',
        alignItems: 'flex-start'
      }}
    >
      {/* 내부 컨테이너 */}
      <div 
        style={{
          display: 'flex',
          paddingBottom: '0.125rem',
          alignItems: 'center',
          gap: '0.375rem'
        }}
      >
        {/* 텍스트가 들어갈 div */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start'
          }}
        >
          {/* Supporter */}
          <div 
            style={{
              width: '2rem',
              height: '0.25rem'
              // background: '#EDF2F4'
            }}
          />
          
          {/* AcidWP */}
          <div 
            style={{
              color: '#FFFFFF',
              fontFamily: '"Samsung Sharp Sans"',
              fontSize: '1.1875rem',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '1.5rem',
              letterSpacing: '0.05rem'
            }}
          >
            SDP
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
