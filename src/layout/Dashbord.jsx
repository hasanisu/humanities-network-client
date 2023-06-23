import React from 'react';
import Sidenav from '../pages/shared/Sidenav/Sidenav';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        
            <div className='grid grid-cols-12'>
                
            <div className='col-span-2'>
            <Sidenav></Sidenav>
            </div>

             <div className='col-span-10 w-11/12 mx-auto'>
             <Outlet></Outlet>
            </div>

            </div>

        
    );
};

export default Dashboard;