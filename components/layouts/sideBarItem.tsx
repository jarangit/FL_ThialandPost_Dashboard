import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

type Props = {
  text: string;
  icon?: any;
  url?: any;
  subMenu: any[];
  setShowSideBar: any;
  currentPath: string;
}

const SideBarItem = ({ text, icon, url, subMenu, setShowSideBar, currentPath }: Props) => {
  const [show, setShow] = useState(false)
  const [URL, setURL] = useState("")

  useEffect(() => {
    setURL(url)
  }, [url,])

  return (
    <>
      {URL && (
        <Link href={`${URL}`} >
          <div className={`cursor-pointer flex gap-2 relative items-center p-2 rounded-md transition-all ${url === currentPath && url !== "/" ? "bg-blue-dark !text-white" : ""}`} onClick={() => setShow(!show)}>
            <div>{icon}</div>
            <div>{text}</div>
            {subMenu.length > 0 && (
              <div className={`absolute -right-5 top-0 transition-all duration-300 ${show ? "rotate-180" : "rotate-0"}`}>
                <MdKeyboardArrowDown size={25} />
              </div>
            )}
          </div>
          {/* render submenu */}
          <div className=''>
            {subMenu.length > 0 ? (
              <div className={`flex flex-col gap-3 mt-3  overflow-hidden ${show ? "max-h-[500px]" : "max-h-0"} transition-all duration-300`}>
                {subMenu.map((item: any, key: any) => (
                  <div key={key} onClick={() => setShowSideBar(false)} className={` pl-7 p-1 rounded-md hover:text-white text-gray-light ${item.url === currentPath && item.url !== "/" ? "bg-blue-dark !text-white" : ""}`}>
                    <Link href={item.url}>
                      <div className='  cursor-pointer'>{item.text}</div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Link>
      )}
    </>
  )
}

export default SideBarItem