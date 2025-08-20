import React from 'react';

const HeaderUtility: React.FC = () => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: '1 0 0'
      }}
    >
      {/* Ghost 버튼 */}
      <button 
        style={{
          background: 'transparent',
          border: 'none',
          color: '#F3F6F8',
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          cursor: 'pointer',
          marginRight: '0.5rem'
        }}
      >
        Menu
      </button>
      
      {/* 알림 버튼 */}
      <button 
        style={{
          background: '#F73529',
          border: 'none',
          color: '#FFFFFF',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          fontSize: '0.875rem',
          cursor: 'pointer',
          marginRight: '0.5rem'
        }}
      >
        Alert
      </button>
      
      {/* 사용자 프로필 */}
      <div 
        style={{
          background: '#FFFFFF',
          borderRadius: '50%',
          width: '2rem',
          height: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#515E94',
          fontWeight: 'bold',
          fontSize: '0.875rem'
        }}
      >
        U
      </div>
    </div>
  );
};

export default HeaderUtility;
