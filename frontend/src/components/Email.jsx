import React from 'react'
import { MdCrop, MdCropSquare } from 'react-icons/md'
import { FaRegStar } from "react-icons/fa";
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

const Email = () => {
    const navigate = useNavigate();
    const openMail = () => {
        navigate('/mail/1234')

    }
  return (
    <div onClick={openMail} className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer hover:shadow-md'>
        <div className='flex items-center gap-3 '>
            <div className='text-gray-500'>
                <MdCropSquare size={'20px'} />
            </div>
             <div className='text-gray-500'> 
                <FaRegStar size={'20px'} />
            </div>
            <div >
                <h1 className='font-semibold'>30dayscoding</h1>
            </div>
        </div>
        <div className='flex-1 ml-4'>
            <p>Lorem ipsum, dolor sit anet consectetur asipiscing elit. Assumenda fugiat repellaen.</p>

        </div>
        <div className='flex-none text-gray text-sm'>
            <p>12days ago </p>
        </div>
    </div>
  )
}

export default Email