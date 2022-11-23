import React from 'react';
import error from '../../assets/errorpage.gif'

const ErrorPage = () => {
    return (
        <div className='flex justify-center h-screen'>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;