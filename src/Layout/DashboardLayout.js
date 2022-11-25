import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gray-200 text-base-content">
                        <li className='bg-white mb-2 py-2'><Link to='/dashboard'>My Orders</Link></li>
                        <li className='bg-white mb-2 py-2'><Link to='/dashboard/allUsers'>All Users</Link></li>
                        <li className='bg-white mb-2 py-2'><Link to='/dashboard/addProduct'>Add Product</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;