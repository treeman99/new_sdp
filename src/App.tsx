import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Content from './components/Content';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <MenuBar />
        <Content />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
