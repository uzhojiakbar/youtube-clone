import React from 'react'
import { Burger, Icon, Input, Logo, MyIcon, NavbarStyle } from './style'


// ******** ICONS
import burger from '../../Assets/icons/navbar/burger-menu.svg'
import search from '../../Assets/icons/navbar/search.svg'
import add_video from '../../Assets/icons/navbar/add-video.svg'
import ring from '../../Assets/icons/navbar/ring.svg'

// ******** LOGO
import logo from '../../Assets/logo/logo.svg'
import { my_chanell } from '../../Mock/my-chanell'

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="left">
        <Burger
          src={burger} />
        <Logo
          src={logo} />
      </div>
      <div className="center">
        <div className="search">
          <Input
            type="text"
            placeholder='Search..'
          />
          <button className='text-search' >  <img src={search} alt="" /></button>
        </div>
        <button className='audio-search'>  <img src={search} alt="" /></button>
      </div>
      <div className="right">
        <Icon src={add_video} />
        <Icon src={ring} />
        <MyIcon src={my_chanell[0].logo} />
      </div>
    </NavbarStyle>
  )
}

export default Navbar