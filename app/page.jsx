import React from 'react'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-start'>
      <Navbar/>
      <Sidebar/>
      
    </div>
  )
}

export default Home