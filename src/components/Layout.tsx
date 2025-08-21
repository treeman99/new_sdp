import React from 'react';
import Header from './Header/Header';
import TabBar from './TabBar/TabBar';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const Layout: React.FC = () => {
  return (
    <div
      className="flex flex-col bg-gray-50"
      style={{
        width: '90rem',
        height: '57.5rem',
        margin: '0 auto',
      }}
    >
      {/* Header - 대략 8rem */}
      <Header />

      {/* TabBar - 대략 4rem */}
      <TabBar />

      {/* Content - 나머지 공간 */}
      <Content />

      {/* Footer - 대략 4rem */}
      <Footer />
    </div>
  );
};

export default Layout;
