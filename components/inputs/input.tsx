import React from 'react'

type Props = {
  type?: string;
  placeholder?: string;
  w?: string;
}

const Input = ({ type, placeholder, w }: Props) => {
  return (
    <div className={`border p-1 rounded-md border-gray-light`}>
      <input
        type={type && "text"}
        placeholder={placeholder && ""}
        style={{ width: `${w ? `${w}` : "auto"}` }}
      />
    </div>
  )
}

export default Input