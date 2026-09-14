import React from 'react';
import StackCard from './StackCard';
import type { Itechnologies } from '../types/technologiesTypes';
interface ItechnologiesProps{
    technologies: Itechnologies[]
}
const AvailableStack = ({technologies}:ItechnologiesProps) => {
    
    return (
        
                 <div className='grid grid-cols-3 mt-10 gap-1'> 
            {
 technologies.map((technology) =>{
    
                    return (
                         
                <div>
                    
                    <StackCard technology={technology}></StackCard>
                </div>
                    )
 })

};
</div>
    )}

export default AvailableStack;