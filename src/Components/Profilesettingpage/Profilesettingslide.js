import React from 'react'
import "./Profilesettingslide.css"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Featuredvector from "../"

export default function Profilesettingslide() {
  return (
    <>
    <div className='container-fluid'>
    <div className='row '>
    <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
    <div className='row side-bar' >
    {/* <span>Setting</span> */}
    <div className='col-lg-2 col-md-2 col-sm-2 col-2 side-bar'>
    
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-sm col-6'><PermIdentityOutlinedIcon/></div>
    <div className='col-lg-6 col-md-6 col-sm col-6'><span className='side-items'>Profile</span></div></div>
    </div>
    <div className='col-lg-2 col-md-2 col-sm-2 col-2 side-bar1'>
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-sm col-6'><NotificationsOutlinedIcon/></div>
    <div className='col-lg-6 col-md-6 col-sm col-6'><span className='side-items'>Notifications</span></div></div>
    </div>
    <div className='col-lg-2 col-md-2 col-sm-2 col-2 side-bar1'>
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-sm col-6'><img src={Featuredvector} alt=''/></div>
    <div className='col-lg-6 col-md-6 col-sm col-6'><span className='side-items'>Featured Items</span></div></div>
    </div>
    <div className='col-lg-2 col-md-2 col-sm-2 col-2 side-bar1'>
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-sm col-6'><PermIdentityOutlinedIcon/></div>
    <div className='col-lg-6 col-md-6 col-sm col-6'><span className='side-items'>Offers</span></div></div>
    </div>
    <div className='col-lg-2 col-md-2 col-sm-2 col-2 side-bar1'>
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-sm col-6'><PermIdentityOutlinedIcon/></div>
    <div className='col-lg-6 col-md-6 col-sm col-6'><span className='side-items'>Account support </span></div></div>
    </div>
    <div className='col-lg-2 col-md-2 col-sm-2 col-2 side-bar1'>
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-sm col-6'><PermIdentityOutlinedIcon/></div>
    <div className='col-lg-6 col-md-6 col-sm col-6'><span className='side-items'>Earnings</span></div></div>
    </div>

    </div>

    </div>
    <div className='col-lg-9 col-md-9 col-sm-9 col-9'>

    </div>

    </div>
      
    </div>
    </>
  )
}
