import React from 'react';
import logo from "../assets/logo-text.png"
const Footer = () => {
    return (
        <footer className='container mx-auto w-[80%] mt-10'>
            <div className='flex justify-between'>
            <div className=' space-y-2.5'><img src={logo} alt="" />
            <p className="text[#6c6d70]">Curated tools, technologies, and resources for developers building
modern software.</p>
            <ul className='font-bold flex items-center gap-5'>
                <li><a href=""></a>Github</li>
                <li><a href=""></a>Twitter</li>
                <li><a href="" ></a>LinkedIn</li>
            </ul></div>
            <div><h4 className='font-bold'>PRODUCT</h4><ul className='text[#6c6d70]'>
                <li><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
            </ul></div>
            <div><h4 className='font-bold'>COMPANY</h4><ul className='text[#6c6d70]'>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Careers</a></li>
            </ul></div>
            <div><h4 className='font-bold'>LEGAL</h4><ul className='text[#6c6d70]'>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Service</a></li>
            </ul></div>
          
        </div>
        <div className='flex justify-between items-center font-[11px] mt-10'>
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <ul className='flex items-center gap-4'>
                <li><a href="">Privacy</a></li>
                <li><a href="">Terms</a></li>
            </ul>
          </div>
        </footer>
    );
};

export default Footer;