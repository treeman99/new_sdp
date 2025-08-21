import React from 'react';

const Confidential: React.FC = () => {
  return (
    <div
      style={{
        width: '4.5rem',
        height: '0.875rem',
        borderRadius: '0.125rem',
        position: 'relative',
      }}
    >
      {/* 배경 */}
      <div
        style={{
          width: '4.5rem',
          height: '0.875rem',
          flexShrink: 0,
          borderRadius: '0.125rem',
          opacity: 0.3,
          background: '#000',
        }}
      />
      
      {/* SVG 오버레이 */}
      <div
        style={{
          position: 'absolute',
          top: '0.25rem',
          left: '0.3125rem',
          width: '3.875rem',
          height: '0.375rem',
          flexShrink: 0,
          opacity: 0.8,
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="62" 
          height="6" 
          viewBox="0 0 62 6" 
          fill="none"
        >
          <g opacity="0.8">
            <rect x="52" y="1" width="1" height="5" fill="white"/>
            <rect x="53" width="3" height="1" fill="white"/>
            <rect x="53" y="3" width="3" height="1" fill="white"/>
            <rect x="56" y="1" width="1" height="5" fill="white"/>
            <rect x="1" width="4" height="1" fill="white"/>
            <rect y="1" width="1" height="4" fill="white"/>
            <rect x="1" y="5" width="4" height="1" fill="white"/>
            <rect x="26" width="4" height="1" fill="white"/>
            <rect x="26" y="1" width="1" height="4" fill="white"/>
            <rect x="26" y="5" width="4" height="1" fill="white"/>
            <rect x="30" y="1" width="1" height="4" fill="white"/>
            <rect x="24" width="1" height="6" fill="white"/>
            <rect x="50" width="1" height="6" fill="white"/>
            <rect x="58" y="5" width="4" height="1" fill="white"/>
            <rect x="58" width="1" height="5" fill="white"/>
            <rect x="12" width="1" height="6" fill="white"/>
            <rect x="16" width="1" height="6" fill="white"/>
            <rect x="14" y="2" width="1" height="2" fill="white"/>
            <rect x="13" y="1" width="1" height="1" fill="white"/>
            <rect x="15" y="4" width="1" height="1" fill="white"/>
            <rect x="6" y="1" width="1" height="4" fill="white"/>
            <rect x="10" y="1" width="1" height="4" fill="white"/>
            <rect x="7" y="5" width="3" height="1" fill="white"/>
            <rect x="7" width="3" height="1" fill="white"/>
            <rect x="44" width="5" height="1" fill="white"/>
            <rect x="46" y="1" width="1" height="5" fill="white"/>
            <rect x="32" width="5" height="1" fill="white"/>
            <rect x="32" y="1" width="1" height="4" fill="white"/>
            <rect x="32" y="5" width="5" height="1" fill="white"/>
            <rect x="33" y="2" width="3" height="1" fill="white"/>
            <rect x="18" width="5" height="1" fill="white"/>
            <rect x="18" y="1" width="1" height="5" fill="white"/>
            <rect x="19" y="3" width="3" height="1" fill="white"/>
            <rect x="38" width="1" height="6" fill="white"/>
            <rect x="42" width="1" height="6" fill="white"/>
            <rect x="40" y="2" width="1" height="2" fill="white"/>
            <rect x="39" y="1" width="1" height="1" fill="white"/>
            <rect x="41" y="4" width="1" height="1" fill="white"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Confidential;
