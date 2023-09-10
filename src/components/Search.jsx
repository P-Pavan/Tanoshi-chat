import React from 'react'

function Search() {
  return (
    <div className="search">
        <div className="searchForm">
            <input type="text" placeholder='find a user' />
        </div>
        <div className="userChat">
            <img src="https://i.pinimg.com/originals/a1/28/a7/a128a7319cd12cd379e8e9dc96e8fea5.jpg" alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search