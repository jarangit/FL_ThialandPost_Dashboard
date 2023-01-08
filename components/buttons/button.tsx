import React from 'react'

type Props = {
  children: any;
  disabled?: boolean;
  onClick?: any;
  type?: string;
}

const Button = ({ children, disabled, onClick, type }: Props) => {
  return (
    <button
      type={"submit"}
      onClick={onClick}
      className={`h-9 px-6 text-white flex items-center justify-center  w-full lg:w-fit rounded-md transition-all ${disabled ? "cursor-not-allowed  text-red  border-red border" : "cursor-pointer bg-red"}`}>
      {children}
    </button>
  )
}

export default Button