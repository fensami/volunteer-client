import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div className='container mx-auto'>
            {/* <Home></Home> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;