import React from 'react';
import heroimg from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <div className='container mx-auto w-[80%]'>
            <section className='grid grid-cols-2 justify-between mt-30 '>
                <div className="grid justify-between h-[80%] pt-10 "><h1 className='font-bold text-[40px]'>Build Your Ideal  <span className='bg-linear-to-r from-orange-500 via-orange-500 to-violet-800 bg-clip-text text-transparent mt-1'>Development Stack</span></h1>
                <p>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
                <div className="grid grid-cols-2 mt-8">
                    <button className='px-[1px] py-[6px] rounded-[10px] bg-linear-to-r from-orange-500 to-amber-500  '>Explore Technologies</button><button  className='px-[1px] py-[6px] rounded-[10px] border border-[#e5e7eb] ml-4'>Learn More</button></div></div>
                <div><img src={heroimg} alt="" /></div>
            </section>
        </div>
    );
};

export default Hero;