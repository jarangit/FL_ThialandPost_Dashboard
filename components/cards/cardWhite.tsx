import React from 'react'

type Props = {
  children: any;
}

const CardWhite = ({ children }: Props) => {
  return (
    <div className='bg-white rounded-lg mt-6 p-6 drop-shadow-lg'>
      {children}
    </div>
  )
}

export default CardWhite