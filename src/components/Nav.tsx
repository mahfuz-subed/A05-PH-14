import React from 'react';
import logo from "../assets/logo-text.png"
const Nav = () => {
    return (
       <div >
         <nav className="flex justify-between align-items-center w-[80%] container mx-auto mt-4">
            <img src={logo} alt="dev stack logo" className='h-[30px]' />
            <div className='flex align-items-center '>
                <ul className="flex align-items-center gap-[15px] font-semibold">
                    <li><a href="" className='text-[#DB2777]'>Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href=""></a>Projects</li>
                    <li><a href=""></a>About</li>
                    <li><a href=""></a>Contact</li>
                </ul>
               
                   
              
            </div>
            <div>
                 <ul className='flex  align-items-center gap-[15px]'>
                        <li><a href="">Sign in</a></li>
                        <li><a href="" className='px-[17px] py-[9px] rounded-[26px] bg-[#DB2777]'>Sign Up</a></li>
                    </ul>
            </div>

        </nav>
       </div>
        
    );
};

export default Nav;