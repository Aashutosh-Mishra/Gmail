import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex items-center justify-center w-screen mt-20'> 
    <form actiom="" className="flex flex-col gap-3 border-2 border-black p-6 rounded-lg bg-white w-full max-w-md">
        <h1 className='font-bold text-2xl uppercase text-center text-blue-700 '>Signup</h1>
        <input type='text' placeholder='Username' className='border-2 border-gray-400 m-2 p-2 rounded-lg'/>
        <input type='email' placeholder='Email' className='border-2 border-gray-400 m-2 p-2 rounded-lg'/>
        <input type='password' placeholder='Password' className='border-2 border-gray-400 m-2 p-2 rounded-lg'/>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-lg m-2'>Sign Up</button>
        <p>Already have an account? <Link to ={"/login"} className="text-blue-600">Login</Link></p>
    </form>
    </div>
  )
}

export default Signup