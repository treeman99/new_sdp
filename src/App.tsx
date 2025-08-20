import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Layout from './components/Layout';
import './index.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
