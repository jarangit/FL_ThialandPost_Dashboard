import React from 'react'

type Props = {
  children: any;
  disabled?: boolean;
  onClick?: any;
}

const ButtonOutline = ({ children, disabled, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`h-9 p-3 text-red flex items-center justify-center bg-white w-fit rounded-lg border border-gray-light cursor-pointer`}>
      {children}
    </div>
  )
}

export default ButtonOutline