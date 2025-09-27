import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './component/sheard/navbar/Navbar';
import Footer from './component/sheard/footer/Footer';

const MainLayout = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-x-hidden m-0 p-0 absolute inset-0">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;