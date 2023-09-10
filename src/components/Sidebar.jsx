import React from 'react'
import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="">
            <Navbar />
            <Search />
            <Chats />
        </div>
    </div>
  )
}

export default Sidebar