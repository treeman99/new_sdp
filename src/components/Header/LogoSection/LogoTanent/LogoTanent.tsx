import React from 'react';
import Logo from './Logo';
import Tanant from './Tanant';

const LogoTanent: React.FC = () => {
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Logo 컴포넌트 */}
      <Logo />
      
      {/* Tanant 컴포넌트 */}
      <Tanant />
    </div>
  );
};

export default LogoTanent;
