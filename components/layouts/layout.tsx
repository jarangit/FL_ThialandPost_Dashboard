import React from 'react'
import Menu from './menu'

type Props = {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}

export default Layout