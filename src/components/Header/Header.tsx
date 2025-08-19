import React from 'react';
import Logo from './Logo';
import Divider from './Divider';
import HeaderLabel from './HeaderLabel';
import HeaderSelect from './HeaderSelect';

const Header: React.FC = () => {
  return (
    <header className="flex w-[90rem] px-3 justify-between items-center bg-gatePurple-11 shadow-elevation-light-1">
      {/* 왼쪽 컴포넌트들 */}
      <div className="flex items-center space-x-4">
        <Logo />
        <HeaderSelect 
          text="SENSDES-RND" 
          height="h-auto"
          className="py-2"
        />
        <Divider />
        <HeaderLabel 
          text="My Task"
        />
        <HeaderSelect 
          text="Management"
        />
        <HeaderSelect 
          text="Test Design"
        />
      </div>
      
      {/* 오른쪽 영역 (향후 추가될 컴포넌트들을 위한 공간) */}
      <div className="flex items-center">
        {/* 오른쪽 컴포넌트들이 여기에 들어갈 예정 */}
      </div>
    </header>
  );
};

export default Header;
