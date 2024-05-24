import React from 'react';
import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
   <>
    <HelmetProvider>
    <div className='mx-auto w-full max-w-[1200px]'>
      <ToastContainer/>
    <Navbar/>
    <Outlet/>
    </div>
    <Footer/>
    </HelmetProvider>
    </>
  );
};

export default App;