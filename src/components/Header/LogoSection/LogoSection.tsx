import React from 'react';
import LogoTanent from './LogoTanent';

const LogoSection: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* LogoTanent 컴포넌트 */}
      <LogoTanent />
    </div>
  );
};

export default LogoSection;
