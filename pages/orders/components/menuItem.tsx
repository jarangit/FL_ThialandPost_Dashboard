import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

type Props = {
  title: string;
  children: any[];
}

const MenuItem = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div>
      <div className={`flex justify-between text-red items-center cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
        <div className='text-sm'>{title}</div>
        <div>
          <MdOutlineKeyboardArrowDown size={20} />
        </div>
      </div>
      <div className={`${isOpen ? "max-h-[500px] py-3" : "max-h-0"} overflow-hidden transition-all duration-300`}>
        {children.map((item: any, key: any) => (
          <div key={key} className={`pl-3 cursor-pointer hover:text-red transition-all text-sm`}>{item.text}</div>
        ))}
      </div>
    </div>
  )
}

export default MenuItem