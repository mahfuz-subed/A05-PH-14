import React from 'react';
import {use} from "react"
import type { Itechnologies } from '../types/technologiesTypes';

interface technologiesProps {
    teachnolgiesPromise : Promise<Itechnologies[]>
}
const Technologies = ({teachnolgiesPromise}:technologiesProps) => {
   
        const technologies = use(teachnolgiesPromise)
        
        
    return (
        <div className='container mx-auto w-[80%]'>
            <h2 className='text-[26px] font-bold'>Explore the <span>Technologies</span></h2>
            <p className='text-[#8e8f92]'>Pick one technology per category to build your ideal stack.</p>
        
        <div>
            
        </div>
        
        </div>
    );
};

export default Technologies;