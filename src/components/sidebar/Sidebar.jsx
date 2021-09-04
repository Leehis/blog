import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src='https://images.pexels.com/photos/1151282/pexels-photo-1151282.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          alt=''
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          doloremque ab temporibus aliquid non ullam perferendis.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Style</li>
          <li className='sidebarListItem'>Sport</li>
          <li className='sidebarListItem'>Cinema</li>
          <li className='sidebarListItem'>Tech</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className=' sidebarIcon fab fa-facebook-square'></i>
          <i className=' sidebarIcon fab fa-twitter-square'></i>
          <i className=' sidebarIcon fab fa-pinterest-square'></i>
          <i className=' sidebarIcon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
