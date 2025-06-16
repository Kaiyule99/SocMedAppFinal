import React from 'react';
import Sidebar from './sidebar';
import '../styles/app.scss';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Sidebar />
      <main className="feed">{children}</main>
    </div>
  );
};

export default Layout;