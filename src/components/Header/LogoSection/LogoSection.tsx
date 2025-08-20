import React from 'react';
import LogoTanent from './LogoTanent';
import Divider from '../Divider';
import Gnb from './Gnb';

const LogoSection: React.FC = () => {
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* LogoTanent 컴포넌트 */}
      <LogoTanent />
      
      {/* Divider 컴포넌트 */}
      <Divider />
      
      {/* Gnb 컴포넌트 */}
      <Gnb />
    </div>
  );
};

export default LogoSection;
