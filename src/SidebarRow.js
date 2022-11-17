import React from 'react'
import './sidebarRow.css'
// import HomeIcon from '@mui/icons-material/Home';
function SidebarRow({Selected, Icon, title}) {
  return (
    <div className={`sidebarRow ${Selected && "selected"}`}>
    <Icon className="sidebarRow_icon"/>
    <h2 className='sidebarRow_title'>{title}</h2>
    </div>
  )
}

export default SidebarRow