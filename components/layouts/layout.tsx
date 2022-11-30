import React, { useState } from 'react'
import Menu from './menu'
import SideBar from './sideBar';

type Props = {
  children: any;
}

const Layout = ({ children }: Props) => {
  const [showSideBar, setShowSideBar] = useState(true)

  return (
    <div>
      <Menu />
      <div className='flex'>
        <div>
          <SideBar
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
        </div>
        <div className={`myContainer pt-[140px] pb-6  transition-all ${showSideBar ? " pl-[380px]" : " pl-[70px] lg:pl-[100px]"}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout