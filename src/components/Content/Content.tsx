import React from 'react';

const Content: React.FC = () => {
  return (
    <main 
      className="bg-white flex-1 flex items-center justify-center border-2 border-gray-200"
      style={{
        minHeight: '41.5rem'
      }}
    >
      <h2 className="text-3xl font-bold text-gray-700">Content Area</h2>
    </main>
  );
};

export default Content;
