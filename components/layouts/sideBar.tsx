import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { FaPen, FaUserCircle } from 'react-icons/fa'
import { CgArrowAlignV } from 'react-icons/cg'
import { HiCreditCard, HiShoppingCart } from 'react-icons/hi'
import SideBarItem from './sideBarItem'
import { MdLibraryBooks } from 'react-icons/md'
import { useRouter } from 'next/router'
type Props = {
  showSideBar: any;
  setShowSideBar: any;
}

const dataMenu = [
  {
    icon: <FaUserCircle size={25} />,
    text: 'ข้อมูลส่วนตัว',
    url: '#',
    children: [
      {
        icon: '',
        text: 'ข้อมูลส่วนตัว',
        url: '/information',
      },
      {
        icon: '',
        text: 'ข้อมูลคำสั่งประจำ',
        url: '/information-command',
      },
      {
        icon: '',
        text: 'เปลี่ยนรหัสผ่าน',
        url: '/reset-password',
      },
    ]
  },
  {
    icon: <CgArrowAlignV size={25} />,
    text: `รายละเอียดข้อมูลทางบัญชี 
    (Statement)`,
    url: '/statements',
    children: [

    ]
  },
  {
    icon: <HiShoppingCart size={25} />,
    text: 'สั่งจองสั่งซื้อ',
    url: '#',
    children: [
      {
        icon: '',
        text: 'สั่งจองสั่งซื้อ',
        url: '/products',
      },
      {
        icon: '',
        text: 'ประวัติการสั่งซื้อ',
        url: '/history-orders',
      },
    ]
  },
  {
    icon: <MdLibraryBooks size={25} />,
    text: `สินค้าวันแรกจำหน่ายที่ท่าน
    ยังไม่ได้รับตามคำสั่งประจำ`,
    url: '/product-day-one',
    children: [

    ]
  },
  {
    icon: <FaPen size={25} />,
    text: 'ติดตาม/สอบถามข้อมูล',
    url: '#',
    children: [

    ]
  },
  {
    icon: <HiCreditCard size={25} />,
    text: 'เพิ่มเงินบัญชีสมาชิก',
    url: '#',
    children: [

    ]
  },
  {
    icon: <HiCreditCard size={25} />,
    text: 'จัดการคำนำชื่อ',
    url: '/menage-name',
    children: [

    ]
  },
]
const SideBar = ({ showSideBar, setShowSideBar }: Props) => {
  const [currentPath, setCurrentPath] = useState("")
  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname) {
      const found = pathname.toString().split("/")
      setCurrentPath(`/${found[1]}`)
    }
  }, [pathname])
  return (
    <div className={`bg-blue text-white mt-[110px] ${showSideBar ? "w-[350px] max-w-[350px] !pr-9" : "max-w-[80px] w-[50px] lg:w-[80px]"} transition-all p-5 px-3 lg:p-5 min-h-screen h-full fixed z-10`}>
      <div onClick={() => setShowSideBar(!showSideBar)} className={`flex gap-1 items-center cursor-pointer`} >
        <AiOutlineMenuFold size={35} />
        <div className={`${showSideBar ? "block" : "hidden"}`} >เมนู</div>
      </div>
      {showSideBar && (
        <div className='flex flex-col gap-1 mt-3'>
          {dataMenu.map((item, key) => (
            <div key={key}>
              <SideBarItem
                text={item.text}
                url={item?.url || ""}
                subMenu={item.children || []}
                icon={item.icon}
                setShowSideBar={setShowSideBar}
                currentPath={currentPath}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SideBar