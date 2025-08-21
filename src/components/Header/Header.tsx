import React from 'react';
import LogoSection from './LogoSection';
import Divider from './Divider';
import Gnb from './LogoSection/Gnb';
import HeaderUtility from './HeaderUtility';

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: 'flex',
        width: '90rem',
        padding: '0 0.75rem',
        justifyContent: 'flex-start',
        alignItems: 'center',
        background: '#515E94',
        boxShadow:
          '0 0 2px 0 rgba(40, 48, 55, 0.12), 0 1px 2px 0 rgba(40, 48, 55, 0.12)',
      }}
    >
      {/* 로고 섹션 */}
      <LogoSection />

      {/* 구분선 */}
      <Divider />

      {/* 글로벌 네비게이션 바 */}
      <Gnb />

      {/* 헤더 유틸리티 */}
      <HeaderUtility />
    </header>
  );
};

export default Header;
