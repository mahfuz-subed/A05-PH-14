import React from 'react';
import type { Itechnologies } from '../types/technologiesTypes';
import type { SetStateAction } from 'react';
import type { Dispatch } from 'react';
import { CiCircleRemove } from "react-icons/ci";

interface Iprops{
    selectedCard: Itechnologies[]
    setSelectedCard:Dispatch<SetStateAction<Itechnologies[]>>
}

const YourStack = ({selectedCard, setSelectedCard}:Iprops) => {
const handleRemoveCard = (card:Itechnologies) =>{
    const restCards = selectedCard.filter((selectedCard) =>selectedCard.name !=card.name )
    setSelectedCard(restCards)
}
    return (
        <div className='mt-10 border-1 border-[#e8ecfa] rounded-[10px] w-full p-[20px]'>
           <h2 className='font-bold'>Your Stack</h2>
           <p className='text-[12px]'> {selectedCard.length} Technology Selected</p>
           <div>
            {
                selectedCard.map((card:Itechnologies) => {
                    return (
                        <div className='flex justify-between items-center mt-5'> 

                        <div className='flex justify-start items-center mt-5'>
                            <div><img src={card.icon} alt="" className='w-[25px] mr-2'/></div>
                            <div>
                                <h3 className='text-[13px]'>{card.name}</h3>
                                <p className='text-[10px] pb-2'>{card.category}</p>
                            </div>
                            
                        </div>
                        <span className="cursor-pointer" onClick={()=> handleRemoveCard(card)}> <CiCircleRemove /></span>
                       
                      
                        </div>
                    )
                })
            }  <div className='grid justify-center mt-4' >
                <button onClick={()=> setSelectedCard ([])}
                 className='btn btn-neutral btn-outline bg-orange-500 border-none'>Remove All</button>
            </div>
           </div>
        </div>
    );
};

export default YourStack;