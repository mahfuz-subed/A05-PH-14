import React from 'react';
import logo from "../assets/logo-text.png"
import hamburger from "../assets/hamburger.png"
const Nav = () => {
    return (
       <div >
         <nav className="flex justify-between align-items-center w-[80%] container mx-auto mt-4 sticky top-0 z-50">
            <img src={hamburger} alt="" className='h-[20px] mt-3 md:hidden' />
            <img src={logo} alt="dev stack logo" className='h-[30px] mt-2' />
            <div className='sm:hidden md:flex align-items-center'>
                <ul className="flex align-items-center gap-[15px] font-semibold mt-2 cursor-pointer">
                    <li><a href="" className='text-[#DB2777]'>Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
               
                   
              
            </div>
            <div className='mb-5'>
                 <ul className='flex  align-items-center gap-[15px]'>
                        <button>Sign in </button>
                        <button className='px-[17px] py-[9px] rounded-[26px] bg-orange-500'>Sign Up</button>
                    </ul>
            </div>

        </nav>
       </div>
        
    );
};

export default Nav;