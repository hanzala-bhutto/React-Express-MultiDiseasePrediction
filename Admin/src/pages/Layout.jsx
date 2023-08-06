import React from 'react'
import Sidebar from '../components/shared/Sidebar';
import Header from '../components/shared/Header';
import {Outlet } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
    
    return (
        <div className='flex flex-row h-screen w-screen'>
            <Sidebar />
            <div className='w-screen'>
                <Header />
                <div className='p-4'>{<Outlet />}</div>
            </div>
        </div>
    )
}

export default Layout