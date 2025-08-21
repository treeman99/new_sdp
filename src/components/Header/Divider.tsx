import React from 'react';

const Divider: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '0 0.25rem',
        alignItems: 'flex-start',
        gap: '0.625rem',
      }}
    >
      {/* 새로운 내부 사각형 */}
      <div
        style={{
          width: '0.0625rem',
          height: '0.625rem',
          opacity: 0.2,
          background: '#FFF',
        }}
      />
    </div>
  );
};

export default Divider;
