import React from 'react';

const Gnb: React.FC = () => {
  return (
    <div 
      style={{
        display: 'flex',
        paddingLeft: '0.25rem',
        alignItems: 'center'
      }}
    >
      {/* GNB 메뉴 아이템들 */}
      <nav 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <a 
          href="#" 
          style={{
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: '0.875rem',
            padding: '0.5rem 0.75rem'
          }}
        >
          Menu 1
        </a>
        <a 
          href="#" 
          style={{
            color: '#EDF2F4',
            textDecoration: 'none',
            fontSize: '0.875rem',
            padding: '0.5rem 0.75rem'
          }}
        >
          Menu 2
        </a>
        <a 
          href="#" 
          style={{
            color: '#EDF2F4',
            textDecoration: 'none',
            fontSize: '0.875rem',
            padding: '0.5rem 0.75rem'
          }}
        >
          Menu 3
        </a>
      </nav>
    </div>
  );
};

export default Gnb;
