import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/ss-logo-00.svg';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#F4F4F4] font-bold">
        <aside>
            <img src={logo} alt="" className='w-36'/>
          <p>Seven Shop<br/>Providing reliable tech since 1992</p>
        </aside> 
        <nav>
          <header className="text-[#67AD5C] text-lg">Services</header> 
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav> 
        <nav>
          <header className="text-[#67AD5C] text-lg">Company</header> 
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </nav> 
        <nav>
          <header className="text-[#67AD5C] text-lg">Legal</header> 
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
    );
};

export default Footer;