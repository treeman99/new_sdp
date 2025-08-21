import React from 'react';
import Utility from '../Utility';

const Profile: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      <Utility 
        text="Admin" 
        hasGap={false} 
        hasBadge={false} 
      />
      <Utility 
        text="이삼성" 
        hasGap={false} 
        hasBadge={false} 
        hasIcon={true}
      />
    </div>
  );
};

export default Profile;
