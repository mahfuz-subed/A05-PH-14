import React from 'react';
import type { Itechnologies } from '../types/technologiesTypes';
import type { SetStateAction } from 'react';
import type { Dispatch } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
interface Iprops{
    selectedCard: Itechnologies[]
    setSelectedCard:Dispatch<SetStateAction<Itechnologies[]>>
}

const YourStack = ({selectedCard, setSelectedCard}:Iprops) => {
const handleRemoveCard = (card:Itechnologies) =>{
    const restCards = selectedCard.filter((selectedCard) =>selectedCard.name !=card.name )
     setSelectedCard(restCards)
    toast.warning(`You have removed ${card.name} from your stack.`)

}

const handleRemoveAll = () => {
    setSelectedCard ([])
    toast.warning(`You have emptied your stack.`)
}

    return (
        <div className='mt-10 border-1 border-[#e8ecfa] rounded-[10px] w-full p-[20px]'>
           <h2 className='font-bold'>Your Stack</h2>
           <p className='text-[12px]'> {selectedCard.length} Technology Selected</p>
           

           <div>
            {selectedCard.length === 0  && <p className=' text-[13px] text-[#8d8e91] border-1 border-[#e8ecfa] rounded-[8px] text-center py-2 my-2'>Your stack is empty.</p>} 

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
                <button onClick={()=> handleRemoveAll ()}
                
                 className='btn btn-neutral btn-outline bg-orange-500 border-none'>Remove All</button>
            </div>
           </div>
        </div>
    );
};

export default YourStack;