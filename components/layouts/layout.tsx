import React, { useState } from 'react'
import Menu from './menu'
import SideBar from './sideBar';

type Props = {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Menu />
      <div className='flex'>
        <div>
          <SideBar/>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout