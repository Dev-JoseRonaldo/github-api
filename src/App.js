import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import { ResetCSS } from './global/resetCSS';
const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile></Profile>
        <div>repositories</div>
        <div>starreds</div>
      </Layout>
    </main>
  );
};

export default App;
