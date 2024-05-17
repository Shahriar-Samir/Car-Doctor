import React from 'react';
import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
   <>
    <div className='mx-auto w-full max-w-[1200px]'>
    <Navbar/>
    <Outlet/>
    </div>
    <Footer/>
    </>
  );
};

export default App;