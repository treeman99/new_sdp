import React from 'react';
import Menu from './Menu';
import Divider from '../Divider';
import Profile from './Profile';
import Confidential from './Confidential';

const HeaderUtility: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: '1 0 0',
      }}
    >
      {/* 1. Menu */}
      <Menu />
      
      {/* 2. Divider */}
      <Divider />
      
      {/* 3. Profile */}
      <Profile />
      
      {/* 4. Confidential */}
      <Confidential />
    </div>
  );
};

export default HeaderUtility;
