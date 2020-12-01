import React from 'react'
import './style.css'

import Logo from '../../atoms/logo/index'
import Menu from '../../molecules/menu/index'

const Header = () => {
  return(
    <header className="main-header">
      <Logo />
      <Menu />
    </header>
  )
}

export default Header 
