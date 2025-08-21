import React from 'react';
import HeaderGnb from './HeaderGnb';

const Gnb: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        paddingLeft: '0.25rem',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      {/* My Task - 선택됨, 드롭다운 없음 */}
      <HeaderGnb text="My Task" isSelected={true} hasDropdown={false} />

      {/* Management - 드롭다운 있음 */}
      <HeaderGnb text="Management" hasDropdown={true} />

      {/* Test Design - 드롭다운 있음 */}
      <HeaderGnb text="Test Design" hasDropdown={true} />
    </div>
  );
};

export default Gnb;
