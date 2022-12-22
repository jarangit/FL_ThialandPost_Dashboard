import React from 'react'

type Props = {
  children: any;
  disabled?: boolean;
}

const Button = ({ children, disabled }: Props) => {
  return (
    <div className={`h-9 px-6 text-white flex items-center justify-center  w-full lg:w-fit rounded-md transition-all ${disabled ? "cursor-not-allowed  text-red  border-red border" : "cursor-pointer bg-red"}`}>
      {children}
    </div>
  )
}

export default Button