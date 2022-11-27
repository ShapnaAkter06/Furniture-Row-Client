import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

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
                        {
                            isAdmin && <>
                                <li className='bg-white mb-2 py-2'><Link to='/dashboard/allUsers'>All Users</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li className='bg-white mb-2 py-2'><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                <li className='bg-white mb-2 py-2'><Link to='/dashboard/myProduct'>My Product</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;