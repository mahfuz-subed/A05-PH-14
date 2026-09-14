import React, { type Dispatch } from 'react';
import StackCard from './StackCard';
import type { Itechnologies } from '../types/technologiesTypes';
import type { SetStateAction } from 'react';

interface ItechnologiesProps{
    technologies: Itechnologies[];
    selectedCard: Itechnologies[];
    setSelectedCard: Dispatch<SetStateAction<Itechnologies[]>>
}
const AvailableStack = ({technologies, selectedCard, setSelectedCard}:ItechnologiesProps) => {
  
    
    return (
        
                 <div className='grid grid-cols-3 mt-10 gap-1 w-full'> 
            {
 technologies.map((technology) =>{
    
                    return (
                         
                <div>
                    
                    <StackCard technology={technology}  selectedCard={selectedCard} setSelectedCard={setSelectedCard}></StackCard>
                    
                </div>
                    )
 })

};
</div>
    )}

export default AvailableStack;