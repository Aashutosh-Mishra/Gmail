import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center w-screen mt-20'> 
    <form actiom="" className="flex flex-col gap-3 border-2 border-black p-6 rounded-lg bg-white w-full max-w-md">
        <h1 className='font-bold text-2xl uppercase text-center text-blue-700 '>LogIn</h1>  
        <input type='email' placeholder='Email' className='border-2 border-gray-400 m-2 p-2 rounded-lg'/>
        <input type='password' placeholder='Password' className='border-2 border-gray-400 m-2 p-2 rounded-lg'/>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-lg m-2'>LogIn</button>
        <p>Don't have  an account? <Link to ={"/signup"} className="text-blue-600">Signup</Link></p>

    </form>
    </div>
  )
}

export default Login