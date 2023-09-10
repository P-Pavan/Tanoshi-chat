import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">Tanoshi Chat</div>
        <div className="user">
            <img src="https://i.pinimg.com/originals/a1/28/a7/a128a7319cd12cd379e8e9dc96e8fea5.jpg" alt="" />
            <span>Aqua</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar