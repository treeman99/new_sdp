import React from 'react';
import Logo from './Logo';
import Tanent from './Tanent';

interface LogoTanentProps {
  selectedTenant: string;
  onTenantChange: (tenant: string) => void;
}

const LogoTanent: React.FC<LogoTanentProps> = ({ selectedTenant, onTenantChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Logo 컴포넌트 */}
      <Logo />

      {/* Tanent 컴포넌트 */}
      <Tanent 
        selectedTenant={selectedTenant}
        onTenantChange={onTenantChange}
      />
    </div>
  );
};

export default LogoTanent;
