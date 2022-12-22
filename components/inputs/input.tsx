import React, { useEffect } from 'react'

type Props = {
  type?: string;
  placeholder?: string;
  w?: string;
  onChange?: any;
  value?: any;
  error?: any;
}

const Input = ({ type, placeholder, w, onChange, value, error }: Props) => {
  useEffect(() => {
    
  }, [value])
  
  return (
   <div>
     <div className={`border p-1 rounded-md border-gray-light`}>
      <input
        type={type && "text"}
        placeholder={placeholder && ""}
        style={{ width: `${w ? `${w}` : "auto"}` }}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={value}
      />
    </div>
      {error.status && <div className='text-xs mt-1 text-red'>{error.message}</div>}
   </div>
  )
}

export default Input