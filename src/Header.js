import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return ( 
    <div className='header'>
   <div className='header_left'>
        <MenuIcon />
        <img className='header_logo'
         src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'
          alt=''/>

   </div>
   <div className='header_input'>
        <input type="text" placeholder='search'/>
        <SearchIcon className='header_inputButton'/>

   </div>
   <div className='header_icons'>
        <VideoCallIcon/>
        <AppsIcon/>
        <NotificationsIcon/>
        <AccountCircleIcon
          alt = "Laraib Nehal"
          src = "https://user-images.githubusercontent.com/95610027/201464573-8b4f44c9-9a2c-4054-8104-8c22c60bcea4.jpg"
        />

   </div>
    </div>  
  )
}

export default Header;