import React from 'react';
import Utility from '../Utility';

const Menu: React.FC = () => {
  const handleUserGuideClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  const handleVOCClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  const handleConfluenceClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  const handleJiraClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem', // 컴포넌트 간 간격
      }}
    >
      <Utility 
        text="알림" 
        hasGap={true} 
        hasBadge={true} 
        initialBadgeCount={3} 
      />
      <Utility 
        text="User Guide" 
        hasGap={false} 
        hasBadge={false} 
        onClick={handleUserGuideClick}
      />
      <Utility 
        text="VOC" 
        hasGap={false} 
        hasBadge={false} 
        onClick={handleVOCClick}
      />
      <Utility 
        text="Confluence" 
        hasGap={false} 
        hasBadge={false} 
        onClick={handleConfluenceClick}
      />
      <Utility 
        text="Jira" 
        hasGap={false} 
        hasBadge={false} 
        onClick={handleJiraClick}
      />
    </div>
  );
};

export default Menu;
