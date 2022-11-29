import Link from 'next/link';
import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

type Props = {
  text: string;
  icon?: any;
  url?: string;
  subMenu: any[];
}

const SideBarItem = ({ text, icon, url, subMenu }: Props) => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <div className='cursor-pointer flex gap-2 relative items-center' onClick={() => setShow(!show)}>
        <div>{icon}</div>
        <div>{text}</div>
        {subMenu.length > 0 && (
          <div className={`absolute -right-5 top-0 transition-all duration-300 ${show ? "rotate-180" : "rotate-0"}`}>
            <MdKeyboardArrowDown size={25} />
          </div>
        )}
      </div>
      {/* render submenu */}
      <div className='pl-7 '>
        {subMenu.length > 0 ? (
          <div className={`flex flex-col gap-3 mt-3  overflow-hidden ${show ? "max-h-[500px]" : "max-h-0"} transition-all duration-300`}>
            {subMenu.map((item:any, key:any) => (
              <div key={key}>
                <Link href={item.url}>
                  <div className='text-gray-light hover:text-white cursor-pointer'>{item.text}</div>
                </Link>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default SideBarItem