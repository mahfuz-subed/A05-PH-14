import React from 'react';
import type { Itechnologies } from '../types/technologiesTypes';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import type { SetStateAction } from 'react';
import type { Dispatch } from 'react';
import { ToastContainer, toast } from 'react-toastify';

interface ItechnologyProps{
  technology: Itechnologies;
  selectedCard: Itechnologies[];
  setSelectedCard: Dispatch<SetStateAction<Itechnologies[]>>
}


const StackCard = ({technology,  selectedCard, setSelectedCard}:ItechnologyProps) => {
 
  const [isSelected,setIsSelected] = useState(false);
const handleSelectedCard = () => {
  setIsSelected(true)
toast.success(`You have added ${technology.name} to your stack.`)
  setSelectedCard([...selectedCard,technology])
}
    return (
       
                        <div className='container mx-auto'>
                            
                        <div className="card w-70 bg-base-100 card-lg shadow-sm">
  <div className="card-body">
    <div className='flex justify-between gap-15'>
        <img src={technology.icon} alt="" className='w-[30px]'/>
         <p className=' badge badge-xl badge-soft badge-success mb-10'>{technology.badge}</p>
    </div>
    <h2 className="card-title text-[15px]">{technology.name}</h2>
    <p className='text-[13px]'>{technology.description}</p>
    <div className='flex justify-between text-[13px] gap-1'>
        <p  className="badge badge-ghost text-[#6c6d70]">{technology.category}</p>
        <p className='text-[12px] pt-1'>{technology.difficulty}</p>
        <div className='flex items-center gap-0.5'>
            <FaStar className='text-yellow-500' />
            <p>{technology.rating}</p>
        </div>
    </div>
    <div className=" card-actions">
      <button onClick={() => handleSelectedCard() }
      className="btn btn-primary px-15 py-6 mt-4 bg-orange-500 border-none"
      disabled={isSelected? true: false}>
       {isSelected ? "Added" : "Add to Stack"}</button>
    </div>
  </div>
</div>
                            </div>
                    )
                } 
         
    


export default StackCard;