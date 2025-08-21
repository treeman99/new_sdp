import React from 'react';
import LogoTanent from './LogoTanent';

interface LogoSectionProps {
  selectedTenant: string;
  onTenantChange: (tenant: string) => void;
}

const LogoSection: React.FC<LogoSectionProps> = ({ selectedTenant, onTenantChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* LogoTanent 컴포넌트 */}
      <LogoTanent 
        selectedTenant={selectedTenant}
        onTenantChange={onTenantChange}
      />
    </div>
  );
};

export default LogoSection;
