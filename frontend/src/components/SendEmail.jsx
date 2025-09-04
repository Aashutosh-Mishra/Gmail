import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';
import store from '../redux/store';
import { use } from 'react';

const SendEmail = () => {
    const {open} = useSelector(store=> store.app);
    const dispatch = useDispatch();
  return (
    <div className={`${open ? 'block' : 'hidden '} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
        <div className='flex items-center justify-between border-b border-gray-200 px-4 py-2 bg-[#F2F6FC]'>
            <h1>New Message</h1>
            <div onClick={()=> dispatch(setOpen(false))} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                <RxCross2 size="20px"/>
            </div>
        </div>
        <form  action="" className='flex flex-col gap-2 p-4 '>
            <input type="text" placeholder='To' className='w-full border-b border-gray-200 px-4 py-2 focus:outline-none'/>
            <input type="text" placeholder='Subject' className='w-full border-b border-gray-200 px-4 py-2 focus:outline-none'/>
            <textarea name="" id="" cols="30" rows="10" className='w-full px-4 py-2 focus:outline-none' ></textarea> 
        </form>
        
    </div>
  )
}

export default SendEmail