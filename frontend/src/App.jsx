import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Mails from './components/Mails'


const App = () => {
  return (
    <div className='bg-[#F6F8FC] h-screen'>
      <Navbar />
      <div className=' flex '>
        <Sidebar />
        <Mails />
      </div>   
    </div>
  )
}

export default App