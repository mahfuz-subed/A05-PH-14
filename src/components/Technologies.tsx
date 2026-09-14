import React, { useState } from 'react';
import {use} from "react"
import type { Itechnologies } from '../types/technologiesTypes';
import StackCard from './StackCard';
import AvailableStack from './AvailableStack';
import YourStack from './YourStack';

interface technologiesProps {
    teachnolgiesPromise : Promise<Itechnologies[]>
}
const Technologies = ({teachnolgiesPromise}:technologiesProps) => {
   
        const technologies = use(teachnolgiesPromise)
      const [selectedCard,setSelectedCard]  = useState<Itechnologies[]>([])
       
        
    return (
        <div className='container mx-auto w-[85%]'>
            <h2 className='text-[26px] font-bold'>Explore the <span>Technologies</span></h2>
            <p className='text-[#8e8f92]'>Pick one technology per category to build your ideal stack.</p>
        
            <div className='flex gap-10 items-start'>
              <div className='w-[80%]'>
                  <AvailableStack technologies={technologies} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
              </div>
        <div className='w-[20%]'>
            <YourStack selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
        </div>
            </div>
        </div>
    );
};

export default Technologies;