import React from 'react'

type Props = {
  children: any;
}

const HeaderPage = ({children}: Props) => {
  return (
    <div className='border-b-2 border-gray-light pb-3 text-xl flex items-center justify-between flex-wrap gap-3'>
      {children}
    </div>
  )
}

export default HeaderPage