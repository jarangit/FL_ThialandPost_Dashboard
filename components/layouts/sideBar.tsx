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

}

const dataMenu = [
  {
    icon: <FaUserCircle size={25} />,
    text: 'ข้อมูลส่วนตัว',
    url: '/information',
    children: [
      {
        icon: '',
        text: 'ข้อมูลส่วนตัว',
        url: '/information',
      },
      {
        icon: '',
        text: 'ข้อมูลคำสั่งประจำ',
        url: '/',
      },
      {
        icon: '',
        text: `เงื่อนไขการใช้บริการ
        (ด้านการตลาด)`,
        url: '/',
      },
      {
        icon: '',
        text: 'เปลี่ยนรหัสผ่าน',
        url: '/',
      },
    ]
  },
  {
    icon: <CgArrowAlignV size={25} />,
    text: `รายละเอียดข้อมูลทางบัญชี 
    (Statement)`,
    url: '/',
    children: [
      {
        icon: '',
        text: 'test',
        url: '/information',
      },
    ]
  },
  {
    icon: <HiShoppingCart size={25} />,
    text: 'สั่งจองสั่งซื้อ',
    url: '/',
    children: [
      
    ]
  },
  {
    icon: <MdLibraryBooks size={25} />,
    text: `สินค้าวันแรกจำหน่ายที่ท่าน
    ยังไม่ได้รับตามคำสั่งประจำ`,
    url: '/',
    children: [
      
    ]
  },
  {
    icon: <FaPen size={25} />,
    text: 'ติดตาม/สอบถามข้อมูล',
    url: '/',
    children: [
      
    ]
  },
  {
    icon: <HiCreditCard size={25} />,
    text: 'เพิ่มเงินบัญชีสมาชิก',
    url: '/',
    children: [
      
    ]
  },
]
const SideBar = ({ }: Props) => {
  const [showSideBar, setShowSideBar] = useState(true)
  const [currentPath, setCurrentPath] = useState("")
  const {pathname} = useRouter()

  useEffect(() => {
    if(pathname){
      const found = pathname.toString().split("/")
      setCurrentPath(`/${found[1]}`)
    }
  }, [pathname])
  return (
    <div className={`bg-blue text-white ${showSideBar ? "w-[350px] max-w-[350px] pr-9" : "max-w-[80px] w-[80px]"} transition-all p-5 h-screen`}>
      <div onClick={() => setShowSideBar(!showSideBar)} className={`flex gap-1 items-center cursor-pointer`} >
        <AiOutlineMenuFold size={35} />
        <div className={`${showSideBar ? "block" : "hidden"}`} >เมนู</div>
      </div>
      {showSideBar && (
        <div className='flex flex-col gap-5 mt-10'>
          {dataMenu.map((item, key) => (
            <div key={key}>
              <SideBarItem
                text={item.text}
                url={item.url}
                subMenu={item.children || []}
                icon={item.icon}
                setShowSideBar = {setShowSideBar}
                currentPath = {currentPath}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SideBar