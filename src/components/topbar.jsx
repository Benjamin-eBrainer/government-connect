import {} from 'react'
import '../styles/components/topbar.css';
import {AiOutlineSearch} from 'react-icons/ai'
import {GrNotification} from 'react-icons/gr'
import avatar from '../assets/avatar.png'

const TopBar = () => {
  return (
    <div className='TopBar'>
      <div className='TopBarIntro'>
        <p className='first'>Hello User!</p>
        <p className='second'>Welcome back to the Dashboard</p>
      </div>
      <div className="searchBar">
        <input type="text" placeholder='Search...'/>
        <span ><AiOutlineSearch/></span>
      </div>
      <div className="notification">
        <div className="notificationBell"><GrNotification /></div>
        <div className='TopImg'><img src={avatar} alt="profile" /></div>
      </div>
    </div>
  )
}

export default TopBar
